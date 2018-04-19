import React from "react";
import MarkerCreate from "../components/Marker/MarkerCreate/index";

class PageMarker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <MarkerCreate />
        );
    }

}

export default PageMarker;