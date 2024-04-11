import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const PieChart = () => {
  const root = useRef(null);

  useEffect(() => {
    const chartDiv = document.getElementById("k");

    if (chartDiv) {
      if (!root.current) {
        root.current = am5.Root.new("k");
        root.current.setThemes([
          am5themes_Animated.new(root.current)
        ]);
      }

      const chart = root.current.container.children.push(
        am5percent.PieChart.new(root.current, {
          radius: am5.percent(90),
          innerRadius: am5.percent(50),
          layout: root.current.horizontalLayout
        })
      );

      const series = chart.series.push(
        am5percent.PieSeries.new(root.current, {
          name: "Series",
          valueField: "sales",
          categoryField: "country"
        })
      );

      series.data.setAll([
        {
          country: "Lithuania",
          sales: 501.9
        },
        {
          country: "Czechia",
          sales: 301.9
        },
        {
          country: "Ireland",
          sales: 201.1
        },
        {
          country: "Germany",
          sales: 165.8
        },
        {
          country: "Australia",
          sales: 139.9
        },
        {
          country: "Austria",
          sales: 128.3
        },
        {
          country: "UK",
          sales: 99
        },
        {
          country: "Belgium",
          sales: 60
        },
        {
          country: "The Netherlands",
          sales: 50
        }
      ]);

      series.labels.template.set("visible", false);
      series.ticks.template.set("visible", false);

      series.slices.template.set("strokeOpacity", 0);
      series.slices.template.set("fillGradient", am5.RadialGradient.new(root.current, {
        stops: [{
          brighten: -0.8
        }, {
          brighten: -0.8
        }, {
          brightern: -0.5
        }, {
          brighten: 0
        }, {
          brighten: -0.5
        }]
      }));

      const legend = chart.children.push(
        am5.Legend.new(root.current, {
          centerY: am5.percent(50),
          y: am5.percent(50),
          layout: root.current.verticalLayout
        })
      );

      legend.valueLabels.template.setAll({ textAlign: "right" })
      legend.labels.template.setAll({
        maxWidth: 140,
        width: 140,
        oversizedBehavior: "wrap"
      });

      legend.data.setAll(series.dataItems);

      series.appear(1000, 100);
    }

  
  }, []);

  return (
    <div id="k" style={{ width: "100%", height: "400px" }}></div>
  );
};

export default PieChart;