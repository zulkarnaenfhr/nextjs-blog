import React from "react";
import { Scrollbar } from "smooth-scrollbar-react";

const Index = () => {
    return (
        // <div className="App">
        //     <div className="list-data">
        //         {[...Array(1000).keys()].map((value, index) => (
        //             <div key={index}>{value + index}</div>
        //         ))}
        //     </div>
        // </div>
        <div
            className="App"
            style={{
                display: "flex",
                width: "100vw",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                background: "black",
            }}
        >
            <Scrollbar
                damping={0.015}
                thumbMinSize={20}
                renderByPixels={true}
                alwaysShowTracks={false}
                continuousScrolling={true}
                plugins={{
                    overscroll: {
                        effect: "bounce",
                    },
                }}
            >
                <div className="list-data" style={{ height: "500px", width: "500px", backgroundColor: "white" }}>
                    {[...Array(120).keys()].map((value, index) => (
                        <div key={index}>{value + index}</div>
                    ))}
                </div>
            </Scrollbar>
        </div>
    );
};

export default Index;
