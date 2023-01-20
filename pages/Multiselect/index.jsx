import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const Index = () => {
    const [field, setField] = useState([]);

    const onSelect = (selectedList, removedItem) => {
        console.log(removedItem);
        console.log(selectedList);
    };

    return (
        <div>
            <h1>masuk</h1>
            <Multiselect
                displayValue="key"
                onRemove={(e) => {
                    console.log(e);
                }}
                onSearch={(e) => {
                    console.log(e);
                }}
                onSelect={onSelect}
                options={[
                    {
                        cat: "Group 1",
                        key: "Option 1",
                    },
                    {
                        cat: "Group 1",
                        key: "Option 2",
                    },
                    {
                        cat: "Group 1",
                        key: "Option 3",
                    },
                    {
                        cat: "Group 2",
                        key: "Option 4",
                    },
                    {
                        cat: "Group 2",
                        key: "Option 5",
                    },
                    {
                        cat: "Group 2",
                        key: "Option 6",
                    },
                    {
                        cat: "Group 2",
                        key: "Option 7",
                    },
                ]}
                showCheckbox
            />
        </div>
    );
};

export default Index;
