import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           userInfo:{
            name:"Dummy",
            location:"Default",
           }
        }
        // console.log(this.props.name+"child constructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Aayush-Roy") ;
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json
        });
        
        console.log("parent componentDidMount")
    }

    componentDidUpdate(){
        console.log(" componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    render(){
       
        const {name, location, avatar_url} = this.state.userInfo;
        
        return (
        
        <div  className="p-2 border-2 mt-5 w-[50vh] border-zinc-500">
            <img src={avatar_url} alt="" />
            <h1>name : {name}</h1>
            <h1>location : {location}</h1>
        </div>
        )
    }
}

export default UserClass;