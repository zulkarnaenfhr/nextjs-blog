import React, { useState } from "react";
import * as XLSX from "xlsx";

const Index = () => {
    const [fileExcel, setFileExcel] = useState("");

    const handleChangeFile = async (e) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        console.log(jsonData);
    };

    return (
        <div>
            <h1>masuk</h1>
            <input type="file" onChange={handleChangeFile} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
        </div>
    );
};

export default Index;
