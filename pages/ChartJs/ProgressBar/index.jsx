import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./gradientSVG";

const Index = () => {
    const idCSS = "hello";
    const percentage = 66;

    return (
        <div>
            <div
                style={{
                    width: "550px",
                }}
            >
                <GradientSVG />
                <CircularProgressbar
                    strokeWidth={8}
                    value={percentage}
                    circleRatio={0.5}
                    text={`${percentage}%`}
                    styles={{
                        path: { stroke: `url(#${idCSS})`, height: "100%", transform: "rotate(0.75turn)", transformOrigin: "center center", strokeLinecap: "butt" },
                        trail: {
                            stroke: "#2e2e2e",
                            transform: "rotate(0.75turn)",
                            transformOrigin: "center center",
                            strokeLinecap: "butt",
                        },
                        text: {
                            // Text color
                            fill: "#ff0606",
                            // Text size
                            fontSize: "16px",
                            marginTop: "20px",
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Index;
