import React,{Component} from "react";
import { BiSun,BiMoon} from "react-icons/bi";
import "./css/darkmode.css"

export default class Darkmode extends Component{
    
    constructor(props){
        super(props);
        this.state={
            boolean:false
        }
    }
    checkboxclick=()=>{
        switch(this.state.boolean){
            case true:{
                document.getElementById("App").style.cssText="background-color:rgb(190, 190, 253); color:black"
                document.getElementById("container_2").style.cssText="border: black solid 2px;"
                this.setState({
                    boolean:false
                });
                break;
            }
            case false:{
                document.getElementById("App").style.cssText="background-color:rgba(5, 5, 5, 0.986); color:white"
                document.getElementById("container_2").style.cssText="border: white solid 2px;"
                this.setState({
                    boolean:true
                });
                break;
            }
        }
        
    }

    
    render(){
        return(   
      <div className="darkmode_button" >
            <input type="checkbox" className="checkbox" id="checkbox" onClick={this.checkboxclick} />
            <label htmlFor="checkbox" className="label" >
                <BiSun className="icon_1"/> 
                <BiMoon className="icon_2"/>
                <div className="ball"></div>
            </label>
        </div>
        );
    }
}

