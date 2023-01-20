import React from "react";
import Select from "react-select";

export default function index() {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    return (
        <div>
            <h1>masuk</h1>
            <Select options={options} />
        </div>
    );
}
