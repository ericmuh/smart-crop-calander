import React from "react";
import ChartistGraph from "react-chartist";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { getData } from "utils/requests";

const Rainfall = () => {
  const [data, setData] = React.useState();
const [series,setSeries] = React.useState([])

  React.useEffect(() => {
    (async () => {
      let rainfall = await getData("monthly_precipitation");
      console.log("data", rainfall);
//       if (rainfall) {
//         rainfall.map ((rain)=>{
//       s
// });
      // }
      setData(rainfall);
    })();
  }, []);
  return (
    <div className="ct-chart" id="chartHours">
      <ChartistGraph
        data={{
          labels: [
            "jan",
            "feb",
            "mar",
            "apr",
            "may",
            "jun",
            "jul",
            "aug",
            "sept",
            "oct",
            "nov",
            "dec",
          ],
          series: [
            [287, 385, 490, 492, 554, 586, 698, 695],
            [67, 152, 143, 240, 287, 335, 435, 437],
            [23, 113, 67, 108, 190, 239, 307, 308],
          ],
        }}
        type="Line"
        options={{
          low: 0,
          high: 800,
          showArea: false,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
            right: 50,
          },
        }}
        responsiveOptions={[
          [
            "screen and (max-width: 640px)",
            {
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ]}
      />
    </div>
  );
};

export default Rainfall;
