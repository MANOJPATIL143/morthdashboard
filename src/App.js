import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "@amcharts/amcharts4/charts";
import "@amcharts/amcharts4/themes/animated";
import Header from "./componets/Header";
import Sidebar from "./componets/SideBar";
import CardComponent1 from "./componets/CardComponent";
import CardComponent2 from "./componets/CardComponent2";
import CardComponent3 from "./componets/CardComponent3";
import CardComponent4 from "./componets/CardComponent4";
import GraphComponents from "./componets/GraphComponents1";
import GraphComponents2 from "./componets/GraphComponents2";
import PieChart from "./componets/PieChart";
import "./App.css";

const App = () => {
  return (
    <Router>
    <div >
      <Header />
      <div className="row w-100">
        <div className="col-md-3">
          <Sidebar /> <br />
        </div>
        <div className="col-md-9">
          <div className="row ">
            <div className="col">
              <CardComponent1 data /> <br />
            </div>
            <div className="col">
              <CardComponent2 /> <br />
            </div>
            <div className="col">
              <CardComponent3 />
            </div>

            <div className="col">
              <CardComponent4 />
            </div>

            <div class="graph-container">
              <div class="graph-card">
                <GraphComponents />
              </div>

              <div class="graph-card">
                <GraphComponents2 />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="piechart">
        <PieChart />
      </div>
    </div>
    </Router>
  );
};

export default App;
