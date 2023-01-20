import React from "react";

const RemainSpace = () => {
    return (
        <div>
            <div
                style={{
                    height: "500px",
                    width: "500px",
                    border: "1px solid red",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        height: "100px",
                        border: "1px solid red",
                    }}
                >
                    <h1>masuk</h1>
                </div>
                <div
                    style={{
                        height: "fit-content",
                        border: "1px solid red",
                    }}
                >
                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus veritatis architecto! Cupiditate repellat asperiores, perferendis a est assumenda dicta. asd asd as oasdasdasd asda sdas 
                    </h1>
                </div>
                <div
                    style={{
                        flex: "1",
                        border: "1px solid red",
                        overflow: "scroll",

                    }}
                >
                    <h1>masuk Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates ex nisi fugit iste, dolorum qui! Placeat corrupti perspiciatis quidem.</h1>
                </div>
            </div>
        </div>
    );
};

export default RemainSpace;
