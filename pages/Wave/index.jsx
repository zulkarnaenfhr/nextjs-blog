import React from "react";

import Wave from "react-wavify";

const Index = () => {
    return (
        <div>
            <Wave
                fill="linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%)"
                paused={false}
                options={{
                    height: 50,
                    amplitude: 10,
                    speed: 0.25,
                    points: 10,
                }}
            />{" "}
        </div>
    );
};

export default Index;
