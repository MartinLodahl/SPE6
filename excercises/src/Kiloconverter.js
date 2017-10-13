import React, { Component } from 'react';
import Converter from './converter';

class KiloConverter extends Component{
    constructor(){
        super();
        this.state = {value1: 0, value2: 0};
        this.convert = this.convert.bind(this); 
        this.historyKilo = [];
      this.historyPound = []; 
    };
    convert(event){
        console.log(event.target.id);
        const who = event.target.id;
        const value = event.target.value;
        if(who === 'value1'){
            const pound = value * 2.20462;
            this.setState({value1: value, value2: pound});
            
            
            //sæt value ind i historyKilo og pounds ind i historyPound
            if (this.historyKilo.length >= 10){
                this.historyKilo = this.historyKilo.slice(1,10);
            } 
            this.historyKilo.push(value);
            if (this.historyPound.length>=10){
                this.historyPound = this.historyPound.slice(1,10);
            }
            this.historyPound.push(pound);

            
        }else if(who === 'value2'){
            const kilo = value / 2.20462;
            this.setState({value1: kilo, value2: value})
            //sæt value ind i historyPound og kilo ind i historyKilo
            if (this.historyKilo.length >= 10){
                this.historyKilo = this.historyKilo.slice(1,10);
            } 
            this.historyKilo.push(kilo);
            if (this.historyPound.length>=10){
                this.historyPound = this.historyPound.slice(1,10);
            }
            this.historyPound.push(value);
        }
    }
    render(){
        return <Converter name="Kilo to pounds converter (Value1 = kilo, value2 = pounds)" 
                          convert={this.convert}
                          state_value1={this.state.value1}
                          state_value2={this.state.value2} />
    }
}
export default KiloConverter;