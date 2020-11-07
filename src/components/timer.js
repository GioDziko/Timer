import React,{Component} from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { TiMediaPause} from "react-icons/ti";
import {IconContext} from "react-icons";
import {VscDebugStart ,VscDebugRestart} from "react-icons/vsc";
import "./css/timer.css";


export default class Timer extends Component{
    constructor(props){
        super(props);
        this.state={
            startingMinutes:10,
            time:undefined,
            intervalId:undefined,
            boolean:true,
            startingBreak:10,
            breakTime:undefined,

        }
    }
    
    updateCount=()=>{
        if(this.state.time>=0){
            const minutes=Math.floor(this.state.time/60);
            const seconds=this.state.time%60;
            document.getElementById("count").innerHTML=`${minutes}:${seconds}`;
            this.setState({
                time:this.state.time-1
            })
            if(this.state.time<60 &&this.state.time>0){
                document.getElementById("container_2").style.color="red";
            }
        }
        else{
            document.getElementById("caption").innerHTML="Break"
            document.getElementById("container_2").style.color="black";
            if(this.state.breakTime>=0){
                const seconds=this.state.breakTime%60;
                const minutes=Math.floor(this.state.breakTime/60);
                document.getElementById("count").innerHTML=`${minutes}:${seconds}`;
                this.setState({
                breakTime:this.state.breakTime-1
                })
            }
        }
    } 

    componentDidMount(){
        this.setState({
            time:this.state.startingMinutes*60,
            breakTime:this.state.startingBreak*60
        })
        console.log(document.getElementById("checkbox").checked);
    }
       
    
    restart=()=>{
        this.setState({
            time:this.state.startingMinutes*60,
            boolean:true,
            breakTime:this.state.startingBreak*60
        })
        clearInterval(this.state.intervalId);
        document.getElementById("container_2").style.color="black";
        document.getElementById("caption").innerHTML="Session"
        document.getElementById("count").innerHTML=`${this.state.startingMinutes}:00`
    }
    start=()=>{
        if(this.state.boolean===true){
            let intervalId = setInterval(this.updateCount, 1000)
            this.setState({ intervalId: intervalId,boolean:false })
        }
          
    }
    pause=()=>{
        clearInterval(this.state.intervalId);
        this.setState({boolean:true})
        console.log("gio");
    }

    sessionArrowUp=()=>{
        
        if(this.state.boolean===true){
            this.setState({
                startingMinutes:this.state.startingMinutes+1,
                time:this.state.time+60
            })
            document.getElementById("count").innerHTML=`${this.state.startingMinutes+1}:00`
        }
    }

    sessionArrowDown=()=>{
        if(this.state.startingMinutes>1){
            if(this.state.boolean===true){
                this.setState({
                    startingMinutes:this.state.startingMinutes-1,
                    time:this.state.time-60
                })
                document.getElementById("count").innerHTML=`${this.state.startingMinutes-1}:00`
            }
            
        }
        
    }

    breakArrowDown=()=>{
        
        if(this.state.startingBreak>1){
            if(this.state.boolean===true){
                this.setState({
                    startingBreak:this.state.startingBreak-1,
                    breakTime:this.state.breakTime-60
                })
                
            }
        }
       
    }


    breakArrowUp=()=>{
        if(this.state.boolean===true){
            this.setState({
                startingBreak:this.state.startingBreak+1,
                breakTime:this.state.breakTime+60
            })
        }
    }

    
    render(){
        var x=this.state.startingMinutes;
        return(
            
            <IconContext.Provider value={{size:"1em"}}>
            <div className="timer">
                <div className="container_1" >
                    <div className="break" >
                        <p>Break Length</p>
                        <AiOutlineArrowUp  className="icon" onClick={this.breakArrowUp} />
                        <span>{this.state.startingBreak}</span>
                        <AiOutlineArrowDown className="icon" onClick={this.breakArrowDown} />
                    </div>
                    <div className="session" >
                        <p>Session Length</p>
                        <AiOutlineArrowUp className="icon" onClick={this.sessionArrowUp} />
                        <span>{this.state.startingMinutes}</span>
                        <AiOutlineArrowDown className="icon" onClick={this.sessionArrowDown} />
                    </div>
                </div>
                <div className="container_2" id="container_2" >
                    <p id="caption" >Session</p>
                    <div className="count" id="count" >
                        {this.state.startingMinutes}:00
                    </div>
                </div>
                <div className="icons" >
                    <TiMediaPause className="icon displayicon" onClick={this.pause} />
                    <VscDebugStart className="icon displayicon"  onClick={this.start} />
                    <VscDebugRestart className="icon displayicon" onClick={this.restart} />
                </div>

            </div>
            </IconContext.Provider>
        );
    }
}