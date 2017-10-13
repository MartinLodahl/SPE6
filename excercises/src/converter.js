import React, { Component } from 'react';

class Converter extends Component{
    constructor(){
      super();
    }

    render(){
            return (<div>
                <h1>{this.props.name}</h1>
    
                <span>value1:</span><Input id="value1" onChange={this.props.convert} 
                value={this.props.state_value1}/><br/>
    
                <span>value2:</span><Input id="value2" onChange={this.props.convert} 
                value={this.props.state_value2}/>
    
                </div>);
        }
}
export default Converter;

const Input = (props)=>{return <input type="number" id={props.id} 
onChange={props.onChange} value={props.value}/>};