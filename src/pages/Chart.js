import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { Typography } from "@mui/material";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [myData, SetData] = useState([]);
  const { user } = useAuthContext();
  const { documents } = useCollection("MoneyManager", ["uid", "==", user.uid]);
  const mydata = documents;
    // console.log(mydata);

  useEffect(() => {
    SetData(mydata);
  }, [mydata]);

  const data = {
    labels: myData?.map((x) => x.title),
    datasets: [
      {
        label: `Total amount of spend`, //${myData.map(x=>Number(x.amount)).reduce((a,b)=>a+b)} should constraint amount as number field in db sometimes chart doesnt work because of string
        data: myData?.map((x) => x.amount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div >
        <Typography variant="h3" color="darkslateblue" sx={{my:5}}>
            Graph of usage money
        </Typography>
      <Bar data={data} />
    </div>
  );
};

export default Chart;
