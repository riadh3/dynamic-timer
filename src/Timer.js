import React, { Component } from 'react';
import './Timer.css';

            
class Timer extends Component {
    constructor(props) {
        super(props); 
        this.state={
            hour: 0,
            minute:0,
            second:0,
            status:"stop"   
        }
        this.reset = this.reset.bind(this)
      };



reset() {
    this.setState({
        hour: 0,
        minute:0,
        second:0,
        status:"stop"
    })
}

status=()=>{
    if(this.state.status==="start"){
         this.setState({
             status:"stop"
          })
    }
    else{
      this.setState({
          status:"start"
      })
    }
}


    
    startTimer=()=>{
        if(this.state.status==="start" ){
            if(this.state.second===60){
                this.setState({
                    minute: (this.state.minute +1) ,
                    second:0
                });
            }
            if(this.state.minute===60){
                this.setState({
                    hour: (this.state.hour +1) ,
                    minute:0
                }); 
            }
            else{
                this.setState({
                    second: (this.state.second +1)
                });
            }
            
        }   
    }

    componentWillMount(){
        setInterval( ()=>this.startTimer(), 1000) 
    }



  render() { 
      return ( 
        <div >
            <div className="time">
                 <span className="hour">
                          {this.state.hour<10 ? '0'+this.state.hour : this.state.hour}
                 </span>
                :<span className="minutes">
                         {this.state.minute<10 ? '0'+this.state.minute : this.state.minute}
                </span>
                :<span className="seconds">
                          {this.state.second<10 ? '0'+ this.state.second : this.state.second}
                </span>
            </div>

            <div className="indicators">
                <span className="indicat">Hour</span>
                <span className="indicat minute">Minute</span>
                <span className="indicat">Second</span>
            </div>

            <div className="buttons">

                <button className="button" onClick={this.status}> 
                        {this.state.status==="start" ? "stop" : "start"} 
                </button>

                <button className="button" onClick={this.reset}> 
                        reset
                </button>
            </div>

        </div>
       );
  }
}
export default Timer;
