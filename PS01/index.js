var svg = d3.select('svg');
var defs = svg.append('defs');

defs.append('pattern')
    .attr('id','bg')
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', 1250)
    .attr('height', 700)
    .append('image')
    .attr('xlink:href', 'Background_Single.png')
    .attr('width', 1250)
    .attr('height', 700)
    .attr('x', 0)
    .attr('y', 0);



svg.append('rect')
    .attr('width', 1250)
    .attr('height', 700)
    .attr('fill', 'url(#bg)');


var lineFunction = d3.line()
    //.interpolate('cardinal')
    .x(function(d){
        return d.x;
    })
    .y(function(d){
        return d.y;
    });


d3.csv('./PathData.csv', function(dataIn){


    var path = svg.append('path')

        .datum(dataIn)
        .attr('class', 'line')
        .attr('stroke','steelblue')
        .attr('stroke-width', 2)
        .attr('d', lineFunction)
        .attr('fill', 'none');


    svg.selectAll('circle')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('cx', function(d){
            return d.x;
        })
        .attr('cy', function(d){
            return d.y;
        })
        .attr('r', function(d){
            return d.r;
        })
        .attr('fill', function(d){
            //console.log(d.fill);
            return d.fill;

        });
});



