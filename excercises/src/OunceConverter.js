import React, { Component } from 'react';
import Converter from './converter';

class OunceConverter extends Component{
    constructor(){
        super();
        this.state = {value1: 0, value2: 0};
        this.convert = this.convert.bind(this); 
/*         this.historyOunce = new Array[10];
        this.historyKilo = new Array[10]; */
    };
    convert(event){
        console.log(event.target.id);
        const who = event.target.id;
        const value = event.target.value;

        if(who === 'value1'){
            const ounce = value * 0.0283495231;
            this.setState({value1: value, value2: ounce});
            //sæt ounce ind i historyOunce og value ind i historyKilo
        }else if(who === 'value2'){
            const kilograms = value / 0.0283495231;
            this.setState({value1: kilograms, value2: value})
            //sæt kilograms ind i historyKilo og value ind i historyOunce
        }
    }
    render(){
        return <Converter name="Ounce to kilo converter (Value1 = ounce, value2 = kilo)" 
                          convert={this.convert}
                          state_value1={this.state.value1}
                          state_value2={this.state.value2} />
    }
}
export default OunceConverter;