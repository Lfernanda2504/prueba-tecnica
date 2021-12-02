import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";



const HeatMap = (props) => {

    const { Episode } = props;
    console.log(props)

    const data = Episode.map(char => {
        return {
            id: char.id,
            name: char.name,
            air_date: char.air_date,
            episode: char.episode,
            characters: char.characters

        }
    })

  const Chart = useRef();

  const Dimensions = {
    width: 800,
    height: 600,
    margin: { top: 130, left: 50, bottom: 70, right: 50 },
  };

  function colorAssign(d) {
     console.log(d)
    if (d <= 51 && d >=42) return "#ffe7be";
    else if (d <=41 && d >= 32) return "#ffc14d";
    else if (d <= 31 && d >= 22) return "#14a9be";
    else if (d <= 21 && d >=11) return "##14a9be";
    else return "#fff";
  }
  
  const rectSize = 30;

  useEffect(() => {
    const svg = d3
      .select(Chart.current)
      .attr("width", Dimensions.width)
      .attr("height", Dimensions.height)
      .style("background-color", "black");


      const x = d3
      .scaleLinear()
      .domain([0, data.length])
      .range([0, Dimensions.width]);

    svg
      .append('g')
      .selectAll("text")
      .data(data)
      .join("text")
      .text((d) => `${d.id}`)
      .attr("x", (d, i) => x(i) + Dimensions.margin.left)
      .attr("y", Dimensions.height - Dimensions.margin.bottom)
      .attr("fill", "white")
      .style("font-size", 14);

      
      data.forEach((ele, i) => {
        svg
          .append('g')
          .selectAll("rect")
          .data(ele.episode)
          .join("rect")
          .attr("x", x(i) + Dimensions.margin.left)
          .attr("y", (d, j) => j * (rectSize + 2) + Dimensions.margin.top)
          .attr("width", rectSize)
          .attr("height", rectSize)
          .attr("fill", (d) => colorAssign(d));
        });
    });


    return (
        <div>
        {console.log(data)}
        <svg ref={Chart}></svg>
        </div>
    )
}

export default HeatMap;
