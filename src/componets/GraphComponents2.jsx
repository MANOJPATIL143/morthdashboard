import { useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function Chart() {
  useEffect(() => {
    let root = am5.Root.new("chartdiv2");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );

    // Define data
    let data = [{
      category: "Maharastra",
      value1: 10000,
      value2: 88888
    }, {
      category: "Gujrat",
      value1: 12000,
      value2: 80000
    }, {
      category: "Bihar",
      value1: 85002,
      value2: 10110
    },{
      category: "UP",
      value1: 11100,
      value2: 18000
    }];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category"
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category"
      })
    );
    series2.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv2" style={{ width: "400px", height: "350px" }}></div>
  );
}
export default Chart;
