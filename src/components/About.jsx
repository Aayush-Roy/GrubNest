import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        // console.log("parent constructor")
    }

   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Aayush-Roy") ;
        const json = await data.json();
        console.log(json)
        // console.log("parent componentDidMount")
    }
    render(){
        console.log("parent render")
        return(
            <div>
                   <h1>About</h1>
                   <div>
                    <UserContext.Consumer>{(data)=>console.log(data)}</UserContext.Consumer>
                   </div>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, aliquam repellendus necessitatibus similique officiis facilis nam!</p>
                 <p>ye le lo</p>
                 <UserClass name={"first"} />
                 
             </div>
        )
    }
}

// const About =()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, aliquam repellendus necessitatibus similique officiis facilis nam!</p>
//             <p>ye le lo</p>
//             <UserClass name={"gabru"} location={"NCR"}/>
//         </div>
        
//     )
// }

export default About;