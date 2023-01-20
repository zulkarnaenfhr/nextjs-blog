import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./gradientSVG";

const Index = () => {
    const idCSS = "hello";
    const percentage = 66;

    return (
        <div>
            <div
                style={{
                    width: "190px",
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
                            stroke: "#EBECF2",
                            transform: "rotate(0.75turn)",
                            transformOrigin: "center center",
                            strokeLinecap: "butt",
                        },
                        text: {
                            // Text color
                            fill: "transparent",
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
