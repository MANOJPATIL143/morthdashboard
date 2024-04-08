import React, { useEffect } from "react";
import { create } from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const PieChart = () => {
  useEffect(() => {
    const pie = create("chartdiv3", am4charts.PieChart);

    pie.data = [
      {
        category: "Total Estimated Project Cost",
        value: 463.9,
      },
      {
        category: "Total Centre's",
        value: 332.24,
      },
      {
        category: "Total Amount From Centre",
        value: 117.5,
      },
      {
        category: "Total States Share",
        value: 131.86,
      },
    ];

    const pieSeries = pie.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "category";

    return () => {
      pie.dispose();
    };
  }, []);

  return (
    <div className="card">
      <div id="chartdiv3" style={{ width: "100%", height: "400px", boxShadow: "0 2px 4px rgba(10, 100, 100, 0.1)" }}></div>

    </div>
  );
};

export default PieChart;
