import React from "react";
// import Chart from "chart.js/auto";
import faker from "faker";
import { Line } from "react-chartjs-2";
import styles from "./maman.module.css";
import gradient from "chartjs-plugin-gradient";

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
    gradient,
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
    function getGradient(ctx, chartArea) {
        let gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "blue");

        return gradient;
    }
    const data = () => {
        return {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    tension: 0.4,
                    label: "First dataset",
                    data: [33, 53, 85, 41, 44, 65],
                    fill: "start",
                    backgroundColor: function (context) {
                        const chart = context.chart;
                        const { ctx, chartArea } = chart;

                        if (!chartArea) {
                            // This case happens on initial chart load
                            return;
                        }
                        return getGradient(ctx, chartArea);
                    },
                    borderColor: "rgba(75,192,192,1)",
                },
            ],
        };
    };

    const options = {
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
                    <Line options={options} data={data()} />;
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
