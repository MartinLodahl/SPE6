const URL = 'http://localhost:4000/cars';
class DataStore{
    constructor(){
        this.cars = [];
    }
    loadData(callback){
        fetch(URL, {method: 'get'}).then(function(data){
        return data.json();
        }).then(function(data){
            console.log(data);
            callback(data);  
        });
    }
    loadDataById(callback, id){
        fetch(URL+"/"+id, {method: 'get'}).then(function(data){
            return data.json();
            }).then(function(data){
                console.log(data);
                callback(data);  
            });
    }
    createCar(car, callback){
        fetch(URL, {method: 'POST', headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body : JSON.stringify(car)
    }).then(function(data){
        return data.json();
    }).then(function(data){
        callback(data);
    });
    }
    changeCar(car, callback){
        fetch(URL+"/"+car.id, {method: 'put', headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body : JSON.stringify(car)
    }).then(function(data){
        return data.json();
    }).then(function(data){
        callback(data);
    }); 
    }
    deleteCar(id){
        fetch(URL+"/"+id, {method: 'delete', headers: new Headers({
            'Content-Type': 'application/json'
        }),
    }).then(function(data){
        return data.json();
    }).then(function(data){
        
    }); 
    }
}

export default DataStore;