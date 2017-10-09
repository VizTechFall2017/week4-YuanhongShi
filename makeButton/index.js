var svg = d3.select('svg')
    .append('g')    //g means group, treat the svg and its context as a group
    .attr('transform', 'translate(100,100)');

/* Your code goes here */


d3.csv('./data.csv', function(dataIn){

    //console.log(dataIn);
    svg.selectAll('circle')//grap the container of circle
        .data(dataIn)
        .enter()//enter the data to the container
        .append('circle')
        .attr('cx',function(d){
            return scaleX(d.x);
        })
        .attr('cy',function(d){
            return scaleY(d.y);
        })
        .attr('r',10);
    svg.append('g')
        .attr('transform', 'translate(0,400)')
        .call(d3.axisBottom(scaleX));
    svg.append('g')

        .call(d3.axisLeft(scaleY));

    svg.append('text')
        .attr('x', 300)
        .attr('y', 450)
        .attr('font-size', 16)
        .text('x axis title');

    svg.append('text')
        .attr('x', -200)
        .attr('y', -50)
        .attr('font-size', 16)
        .text('y axis title')
        .attr('transform', 'rotate(270)');
});

var scaleX = d3.scaleLinear().domain([0,400]).range([0,600]); //cause d3.scaleLinear() is a built in function
//so it is start from var;
var scaleY = d3.scaleLinear().domain([500,0]).range([0,400]);

function buttonClicked(){
    console.log('here');
}