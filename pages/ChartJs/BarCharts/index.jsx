import React from "react";
// import Chart from "chart.js/auto";
import faker from "faker";
import { Bar } from "react-chartjs-2";
import styles from "./maman.module.css";

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle,
} from "chart.js";

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

export default function index() {
    const options = {
        maintainAspectRatio: false,
        indexAxis: "y",
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: "right",
            },
            title: {
                display: true,
                text: "Chart.js Horizontal Bar Chart",
            },
        },
    };

    const labels = ["January", "February", "March", "April", "May", "June", "July"];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Dataset 2",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    return (
        <div>
            <h1>masd</h1>
            {/* <div
                style={{
                    width: "700px",
                }}
            >
                <Doughnut data={data} />
            </div> */}
            <div className={styles["box"]}>
                <div className={styles["subbox"]}>
                    <Bar options={options} data={data} />;
                </div>
            </div>

            {/* <Line
                datasetIdKey="id"
                data={{
                    labels: ["Jun", "Jul", "Aug"],
                    datasets: [
                        {
                            id: 1,
                            label: "",
                            data: [5, 6, 7],
                        },
                        {
                            id: 2,
                            label: "",
                            data: [3, 2, 1],
                        },
                    ],
                }}
            /> */}
        </div>
    );
}
