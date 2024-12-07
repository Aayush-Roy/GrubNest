import React from 'react';

class Practice extends React.Component {
   constructor(props) {
    super(props);
    // console.log(this.props.name + " child constructor")
   }

   componentDidMount(){
    console.log( " child componentDidMount")
   }
    render(){
        // console.log(this.props.name + "  child render")
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1>This is a Practice Component</h1>
                <p>This is a simple React component.</p>
            </div>
        )
    }
}

export default Practice;