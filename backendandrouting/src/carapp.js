
import DataStore from './data/datastore'
import React, {Component} from 'react';
const datastore = new DataStore();

class CarApp extends Component{
    constructor(){
    super();
    this.store = datastore;
    this.state = {_data: []};
   this.state.value = '';
    this.loadCars();
    this.createCar = this.createCar.bind(this);
    this.createCarBySubmit = this.createCarBySubmit.bind(this);
    this.findCarById = this.findCarById.bind(this);
    this.changeCar = this.changeCar.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
    }
    loadCars(){
        this.store.loadData(function(data){
            this.setState({_data : data});
        }.bind(this));
    }
    createCar(){
        const car = {
            "make":"Alis Limo",
            "model": "En hurtig en",
            "year": 2512
            };
      this.store.createCar(car, function(data){
          console.log(data);
      })      
    this.loadCars();           
    }
    createCarBySubmit(){
        const car = {
            "make": document.getElementById("make").value,
            "model": document.getElementById("model").value,
            "year": document.getElementById("year").value
            };
      this.store.createCar(car, function(data){
          console.log(data);
      })      
    this.loadCars();           
    }
    changeCar(){
        const car = {
            "make": document.getElementById("make").value,
            "model": document.getElementById("model").value,
            "year": document.getElementById("year").value,
            "id": document.getElementById("id").value
            };
            this.store.changeCar(car, function(data){
                console.log(data);
            })
            this.loadCars();
    }
    deleteCar(){
        let id = document.getElementById("id").value;
        this.store.deleteCar(id);
    }
    findCarById(event){
        let id = event.target.value;
        this.setState({value: id});
        this.store.loadDataById(function(data){
            this.setState({_data : data});
        }.bind(this),id);
    }
    render(){
        let currentData = this.state._data;
        let cars = '';
        if( Object.prototype.toString.call( currentData ) === '[object Array]' ) {
            cars = currentData.map(function(car){
            return <h4>{car.make}</h4> 
            });
        } else { 
        cars= <h4>{currentData.make}</h4>
        } 
        return <div>
        <input type="number" value={this.state.value} onChange={this.findCarById}/>
        <button onClick={this.createCar}>Create a car</button>{cars}

        <form >
        <label>
          Make:
          <input type="text" id="make" />
        </label>
        <label>
        Model:
        <input type="text" id="model" />
      </label>
      <label>
      Year:
      <input type="number" id="year" />
    </label>
    <label>
    ID:
    <input type="number" id="id" />
  </label>
        <button onClick={this.createCarBySubmit}>createCarBySubmit</button>
        <button onClick={this.changeCar}>changeCar</button>
        <button onClick={this.deleteCar}>deleteCar</button>
      </form>
        </div>
    }
}

export default CarApp;