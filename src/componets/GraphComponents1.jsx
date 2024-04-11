import React, { useEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { Button, Modal } from "react-bootstrap"; // import Button and Modal from react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // import the Bootstrap CSS
import "./GraphComponents.css";

function Chart() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );

    // Define data
    let data = [
      {
        category: "Maharastra",
        value1: 15000,
        value2: 58081,
      },
      {
        category: "Gujrat",
        value1: 14000,
        value2: 18800,
      },
      {
        category: "Bihar",
        value1: 85500,
        value2: 123,
      },
      {
        category: "UP",
        value1: 12000,
        value2: 18200,
      },
      {
        category: "Maharastra",
        value1: 15000,
        value2: 58081,
      },
      {
        category: "Gujrat",
        value1: 14000,
        value2: 18800,
      },
      {
        category: "Bihar",
        value1: 85500,
        value2: 123,
      },
      {
        category: "UP",
        value1: 12000,
        value2: 18200,
      },
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
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
        categoryXField: "category",
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category",
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
    <div>
      <div id="chartdiv" style={{ width: "400px", height: "350px" }}></div>
      <Button
        style={{
          backgroundColor: "white",
          color: "black",
          border: "none",
          display: "flex",
          justifyContent: "flex-end",
          right: "43%",
          alignItems: "center",
          position: "absolute",
          bottom: "-30%",
        }}
        onClick={openModal}
      >
        View All
      </Button>
      <Modal show={showModal} onHide={closeModal} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="table-responsive">
            <table id="customers">
              <thead>
                <tr>
                  <th>SR NO</th>
                  <th>STATE/UT NAME</th>
                  <th>APPLICATION SUBMITION</th>
                  <th>APPLICATION APPROVAL</th>
                  <th>MOU SIGNED BY STATE</th>
                  <th>FUND DISBURSAL TO STATES/UT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Andhra Pradesh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Arunachal Pradesh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Assam</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Bihar</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Chhattisgarh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Chandigarh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Goa</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Dadra & Nagar Haveli and Daman Diu</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Andaman and Nicobar Islands</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Gujarat</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Haryana</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Himachal Pradesh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Jharkhand</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Karnataka</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Kerala</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Madhya Pradesh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Maharashtra</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Manipur</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Meghalaya</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Mizoram</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Nagaland</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Odisha</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Punjab</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Rajasthan</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Sikkim</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Tamil Nadu</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Chhattisgarh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Telangana</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Tripura</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Uttar Pradesh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Uttarakhand</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>West Bengal</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Andaman and Nicobar Island</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Delhi</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Ladakh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Puducherry</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            onClick={closeModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Chart;
