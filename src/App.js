import React, { Component } from 'react';

//Components
import Form from './components/Form'
import Vehicle from './components/Vehicle'

class App extends Component {
    render() {
        return (
            <div className='App d-flex'>
				<Form storeVehicle={this.storeVehicle}/>
				<Vehicle vehicleLoaded={this.state.vehicleLoaded} vehicle={this.state.vehicle}/>
            </div>
        );
    }

    state = {
        vehicle: {},
        vehicleLoaded: false
    }

    storeVehicle = data => this.setState({vehicle: data, vehicleLoaded: true})
}

export default App;