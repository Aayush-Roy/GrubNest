import Practice from "./practice";

import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent contructor called");
    }

    // componentDidMount(){
    //     console.log("parent component mounted");
    // }
    render(){
        console.log("parent render called");
        return (
            <div>
                <h1>Contact Page</h1>
                {/* <Practice name={"first"} />
                <Practice name={"second"} />
                <Practice name={"third"} /> */}
            </div>
        )
    }
}

export default Contact;