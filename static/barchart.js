function plotBarChart(data) {

    var margin = {top: 10, right: 40, bottom: 80, left: 50},
        width = 400 - margin.left - margin.right,
        height = 480 - margin.top - margin.bottom;

    // binning

    var binsArray = {};
    for (const value of data) {
        binsArray[value] = binsArray[value] ? binsArray[value] + 1 : 1;
    }
    var sorted = Object.entries(binsArray).sort((a, b) => a[1] - b[1])
    binsArray = {}
    for (var i = 0; i < sorted.length; i++) {
        binsArray[sorted[i][0]] = sorted[i][1]
    }

    var binCounts = Object.keys(binsArray);
    noOfBins = binCounts.length;

    var svg = d3.select("#barid").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr('transform', 'translate(100,-67) rotate(-90 30 0)');

    svg.append("text")
        .attr("transform", "rotate(90)")
        .attr("x", 130)
        .attr("y", -350)
        .attr("fill", "white")
        .attr("font-family", "Gill Sans")
        .attr("font-size", "25px")
        .text("Level of Job")

    // domains & ranges
    var x = d3.scaleBand().range([0, width]).padding(0.1);
    var y = d3.scaleLinear().range([height, 0]);

    var g = svg
        .append("g")


    x.domain(binCounts);
    y.domain([
        0,
        d3.max(binCounts, function (d) {
            return binsArray[d];
        }) + 8,
    ]);

    // X-Axis Call


    g.append("text")
        .attr("x", 0)
        .attr("y", 0)
        .attr("fill", "#ffffff")
        .attr("font-size", "25px")
        .attr("text-anchor", "middle")


    g.selectAll(".bar")
        .data(binCounts)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d);
        })
        .attr("y", height)
        .attr("height", 0)
        .attr("width", x.bandwidth())
        .transition()
        .ease(d3.easeLinear)
        .duration(600)
        .delay(function (d, i) {
            return i * 50;
        })
        .attr("y", function (d, i) {
            return y(binsArray[d]);
        })
        .style("fill", "#3181BD")
        .style("stroke", "black")
        .style("opacity", "1")
        .attr("height", function (d, i) {
            return height - y(binsArray[d]);
        })
        .attr("filter", "drop-shadow(3px 0px 2px rgb(0 0 0 / 0.4))")
        .on('end', function (d, i) {
            d3.select(this)
                .on("click", function () {
                    if (this.getAttribute("test") === "yes") {
                        d3.select(this).style("fill", "#3181BD").attr("test", "no")
                    } else {
                        d3.select(this).style("fill", "#a444ff").attr("test", "yes")
                    }
                    barchartlistener(binCounts[i])
                })
                .on("mouseover", function () {
                    // handler code here
                    d3.select(this)
                        .attr("x", x(d) - 7)
                        .attr("width", x.bandwidth() + 15)
                        .style("fill", "#3181BD")
                        .style("stroke", "black")
                    ;
                })
                .on("mouseout", function () {
                    // handler code here
                    d3.select(this)
                        .attr("width", x.bandwidth())
                        .attr("x", x(d))
                        .style("fill", this.getAttribute("test") === "yes" ? "#a444ff" : "#3181BD")
                })
        })
    ;

    const xAxisCall = d3.axisBottom(x);
    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxisCall)
        .selectAll("text")
        .attr("y", -3)
        .attr("x", 10)
        .attr("text-anchor", "start")
        .attr("font-family", "Gill Sans")
        .attr("fill", "#ffffff")
        .attr("stroke", "white")
        .attr("font-size", "17px")
        .attr("transform", "translate(0,-360) rotate(90)");


    g.selectAll(".text")
        .data(binCounts)
        .enter()
        .append("text")
        .transition()
        .ease(d3.easeLinear)
        .duration(1000)
        .attr("x", function (d) {
            return x(d) + x.bandwidth() / 2;
        })
        .attr("y", height - 17)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-family", "Gill Sans")
        .attr("font-size", "15px")
        .attr("dy", ".75em")
        .text(function (d) {
            return binsArray[d]
        })


}
