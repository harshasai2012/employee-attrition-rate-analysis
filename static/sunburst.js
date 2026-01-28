function plotSunBurst(json_data) {

    var margin = {top: 50, right: 10, bottom: 10, left: 10},
        width = 600 - margin.left - margin.right,
        height = 530 - margin.top - margin.bottom,
        maxRadius = (Math.min(width, height) / 2) - 5;

    const formatNumber = d3.format(',d');

    const x = d3.scaleLinear()
        .range([0, 2 * Math.PI])
        .clamp(true);

    const y = d3.scaleSqrt()
        .range([maxRadius * .1, maxRadius]);

    const color = d3.scaleOrdinal(d3.schemeCategory20c);

    const partition = d3.partition();

    const arc = d3.arc()
        .startAngle(d => x(d.x0))
        .endAngle(d => x(d.x1))
        .innerRadius(d => Math.max(0, y(d.y0)))
        .outerRadius(d => Math.max(0, y(d.y1)));

    const middleArcLine = d => {
        const halfPi = Math.PI / 2;
        const angles = [x(d.x0) - halfPi, x(d.x1) - halfPi];
        const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);

        const middleAngle = (angles[1] + angles[0]) / 2;
        const invertDirection = middleAngle > 0 && middleAngle < Math.PI; // On lower quadrants write text ccw
        if (invertDirection) {
            angles.reverse();
        }

        const path = d3.path();
        path.arc(0, 0, r, angles[0], angles[1], invertDirection);
        return path.toString();
    };

    const textFits = d => {
        const CHAR_SPACE = 6;

        const deltaAngle = x(d.x1) - x(d.x0);
        const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
        const perimeter = r * deltaAngle;

        return d.data.name.length * CHAR_SPACE < perimeter;
    };

    const svg = d3.select('#sunburstid').append('svg')
        .style('width', width)
        .style('height', height)
        .attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height}`)
        .on('click', () => focusOn()) // Reset zoom on canvas click
        .attr("transform", "translate(100,20)")

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -70)
        .attr("y", -270)
        .attr("fill", "white")
        .attr("font-family", "Gill Sans")
        .attr("font-size", "25px")
        .text("Sunburst Chart")

    d3.json(json_data, (error, root) => {

        root = d3.hierarchy(json_data);
        root.sum(d => d.size);

        const slice = svg.selectAll('g.slice')
            .data(partition(root).descendants());

        slice.exit().remove();

        let mouseOver = function (d) {

            d3.selectAll(".main-arc")
                .style("opacity", .3)
            d3.select(this)
                .style("opacity", 1)
        }

        let mouseLeave = function (d) {
            d3.selectAll(".main-arc")
                .style("opacity", 1)

            d3.selectAll(this)
                .style("stroke", "transparent")
                .style("fill", this.getAttribute("test") === "yes" ? color((d.children ? d : d.parent).data.name) : "#3181BD")
        }

        const newSlice = slice.enter()
            .append('g').attr('class', 'slice')


        newSlice.append('title')
            .text(d => d.data.name.slice(0, -1) + '\n' + formatNumber(d.value));

        let mouseClicked = function (d) {
            d3.event.stopPropagation()
            if (this.getAttribute("test") === "yes") {
                d3.select(this).style("fill", color((d.children ? d : d.parent).data.name)).attr("test", "no")
            } else {
                d3.select(this).style("fill", "#A344FE").attr("test", "yes")
            }
            let txt = d.data.name
            sunburstlistener(d.data.name, txt[txt.length - 1])
        }

        newSlice.append('path')
            .attr('class', 'main-arc')
            .style('fill', d => color((d.children ? d : d.parent).data.name))
            .attr('d', arc)
            .on('click', mouseClicked)
            .on("mouseover", mouseOver)
            .on("mouseleave", mouseLeave)

        newSlice.append('path')
            .attr('class', 'hidden-arc')
            .attr('id', (_, i) => `hiddenArc${i}`)
            .attr('d', middleArcLine);

        const text = newSlice.append('text')
            .attr('display', d => textFits(d) ? null : 'none');

        // Add white contour
        text.append('textPath')
            .attr('startOffset', '50%')
            .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
            .text(d => d.data.name.slice(0, -1))
            .style('fill', '#ffffff')
            .style('stroke', '#ffffff')
            .style('stroke-width', 2.5)
            .style('stroke-linejoin', 'round');

        text.append('textPath')
            .attr('startOffset', '50%')
            .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
            .attr("font-size", "16px")
            .text(d => d.data.name.slice(0, -1))

    });

    function focusOn(d = {x0: 0, x1: 1, y0: 0, y1: 1}) {
        // Reset to top-level if no data point specified

        const transition = svg.transition()
            .duration(750)
            .tween('scale', () => {
                const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
                    yd = d3.interpolate(y.domain(), [d.y0, 1]);
                return t => {
                    x.domain(xd(t));
                    y.domain(yd(t));
                };
            });

        transition.selectAll('path.main-arc')
            .attrTween('d', d => () => arc(d));

        transition.selectAll('path.hidden-arc')
            .attrTween('d', d => () => middleArcLine(d));

        transition.selectAll('text')
            .attrTween('display', d => () => textFits(d) ? null : 'none');

        moveStackToFront(d);


        function moveStackToFront(elD) {
            svg.selectAll('.slice').filter(d => d === elD)
                .each(function (d) {
                    this.parentNode.appendChild(this);
                    if (d.parent) {
                        moveStackToFront(d.parent);
                    }
                })
        }
    }
}
