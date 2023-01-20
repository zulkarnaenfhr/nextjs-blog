import React from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => {
    const handleSwal = () => {
        Swal.fire({
            confirmButtonColor: "#ffffff",
            template: "#my-template",
        });
    };

    return (
        <div>
            <template id="my-template">
                <h1>masuk</h1>
                <swal-title>Save changes to "Untitled 1" before closing?</swal-title>
                <swal-icon type="warning" color="red"></swal-icon>
                <swal-button type="confirm">Save As</swal-button>
                <swal-button type="cancel">Cancel</swal-button>
                <swal-param name="allowEscapeKey" value="false" />
                <swal-param name="customClass" value='{ "popup": "my-popup" }' />
                <swal-function-param name="didOpen" value="popup => console.log(popup)" />
            </template>

            <button onClick={handleSwal}>Button masuk</button>
        </div>
    );
};

export default Index;
