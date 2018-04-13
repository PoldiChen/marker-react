import React from "react";
import { Input, Button, Row, Col } from "antd";

class PageMarker extends React.Component {

    render() {

        const { TextArea } = Input;
        const { Search } = Input;

        return(
            <div>

                        <Search
                            placeholder="input title here"
                            onSearch={value => console.log(value)}
                            enterButton="Submit"
                        />


                        <TextArea rows={20} placeholder="input content here" style={{marginTop: "8px"}} />




            </div>
        );
    }

}

export default PageMarker;