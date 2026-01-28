function plotPieChart2(data, type) {

    // set the dimensions and margins of the graph
    var width = 520,
        height = 150,
        margin = 21

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#pieid2")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(275,60)");


    // Compute the position of each group on the pie:
    var pie = d3.pie()
        .value(function (d) {
            return d.value;
        })

    var data_ready = pie(d3.entries(data))
    // Now I know that group A goes from 0 degrees to x degrees and so on.

    // shape helper to build arcs:
    var arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(radius)

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.

    let mouseOver = function (d) {
        d3.selectAll(".pieslice")
            .transition()
            .duration(100)
            .style("opacity", .3)
        d3.select(this)
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("stroke", "black")
    }

    let mouseLeave = function (d) {
        d3.selectAll(".pieslice")
            .transition()
            .duration(100)
            .style("opacity", 1)
        d3.select(this)
            .transition()
            .duration(100)
            .style("stroke", "transparent")
            .style("fill", function () {
                if (this.getAttribute("test") === "yes") {
                    return "#FFFFFF";
                } else {
                    console.log("pie chart");
                    return d.data.key === "Female" ? d3.select(this).style("fill", "#3181BD") :
                        d3.select(this).style("fill", "#a444ff")
                }

            })
    }

    svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('path')
        .attr("class", "pieslice")
        .transition()
        .duration(1000)
        .attr('d', arcGenerator)
        .attr('fill', function (d) {
            if (d.data.key === "Female")
                return "#3181BD"
            else
                return "#a444ff"
        })
        .attr("stroke", "black")
        .style("stroke-opacity", 0.8)
        .style("stroke-width", "1px")
        .on('end', function (d, i) {
            d3.select(this)
                .on("click", function () {
                    if (this.getAttribute("test") === "yes") {
                        d.data.key === "Yes" ? d3.select(this).style("fill", "#3181BD").attr("test", "no") :
                            d3.select(this).style("fill", "#a444ff").attr("test", "no")
                    } else {
                        d.data.key === "Yes" ? d3.select(this).style("fill", "#FFFFFF").attr("test", "yes") :
                            d3.select(this).style("fill", "#FFFFFF").attr("test", "yes")
                    }
                    piechartlistener2(d.data.key, type)
                })
                .on("mouseover", mouseOver)
                .on("mouseleave", mouseLeave)
        })


    var len = 0
    for (var d in data_ready) {
        len = len + data_ready[d].data.value;
    }

    svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('text')
        .text(function (d) {
            return Math.round((d.data.value / len) * 100) + "%"
        })
        .attr("transform", function (d) {
            return "translate(" + arcGenerator.centroid(d) + ")";
        })
        .style("text-anchor", "middle")
        .style("font-size", 17)


    svg.append('rect')
        .attr('x', 100)
        .attr('y', -30)
        .attr('width', 20)
        .attr('height', 20)
        .attr('stroke', 'black')
        .attr('fill', '#3181BD')

    svg.append("text")
        .attr("fill", "#ffffff")
        .attr("font-family", "Gill Sans")
        .attr("font-size", "17px")
        .attr("x", 130)
        .attr("y", -15)
        .text("Female");

    svg.append('rect')
        .attr('x', 100)
        .attr('y', 10)
        .attr('width', 20)
        .attr('height', 20)
        .attr('stroke', 'black')
        .attr('fill', '#a444ff')

    svg.append("text")
        .attr("fill", "#ffffff")
        .attr("font-family", "Gill Sans")
        .attr("font-size", "17px")
        .attr("x", 130)
        .attr("y", 25)
        .text("Male");

    svg.append("text")
        .attr("fill", "#ffffff")
        .attr("font-family", "Gill Sans")
        .attr("font-size", "30px")
        .attr("x", -200)
        .attr("y", 10)
        .text("Gender");


}
