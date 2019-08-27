import React from "react";
import SystemStatistic from "../components/Statistic";

class PageHome extends React.Component {

    render() {
        return(
            <div>
                <SystemStatistic />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Marker, mark down everything.<br />
                Build with React, Ant Design, Spring Boot. ->
                <a href="https://github.com/PoldiChen/marker-react">GitHub</a>
            </div>
        );
    }

}

export default PageHome;