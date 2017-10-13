import React, { Component } from 'react';

class showImg extends Component{
    constructor(){
        super();
        this.handler = this.handler.bind(this);
        this.state = {random: 0};
    }
    handler(){
        var collection = ['images/1.jpg', 'images/2.jpg'];
        var rend = collection[Math.floor(Math.random() * collection.length)];
        this.setState({random: this.state.random + rend});
    }

    render(){
        var style = {
            border: "5px solid green", 
            padding: 5,
            margin: 2
        };

        var collection = ['img/Graf2.PNG', 'img/vms.png'];
        var random = collection[Math.floor(Math.random() * collection.length)];
        var map = collection.map(function(item, index){
            return <img src={item} style={style} key={index} alt={index}/>
        });

        return (<div>
            {map}
            <br/>
            <img src={random} style={style} alt="Din fucker, det gik galt" />
            <br/>
            <button onClick={this.handler.bind(this)}>Click</button>
            </div>);
    }
}

export default showImg;