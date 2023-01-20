import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltipaa
        </Tooltip>
    );

    return (
        <div
            style={{
                paddingTop: "200px",
            }}
        >
            <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                <button>Hover meas to see</button>
            </OverlayTrigger>{" "}
        </div>
    );
};

export default Index;
