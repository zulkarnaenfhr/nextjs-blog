import React, { Component } from "react";

class LandingPageSection1 extends Component {
    async componentDidMount() {
        await fetch("https://indonesian-covid-api.herokuapp.com/update-harian-indonesia")
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    render() {
        return (
            <div>
                <h1>masuk</h1>
            </div>
        );
    }
}

export default LandingPageSection1;
