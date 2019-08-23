import React, {Component} from 'react'
import axios from 'axios'
const {Consumer, Provider} = React.createContext()

export class GlobalProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: '',
            condition: '',
            temperature: '',
            humidity: '',
            sunrise: '',
            sunset: '',
            windSpeed: '',
            windDirection: '',
            // markers: [{
            //     position: {   
            //         lat: '',
            //         lng: '' 
            //     }
            // }],
            lat: 40.7508,
            lng: -111.8710 
        }
    }

    handleCoordinate = (lat, lng) => {
        this.setState({lat, lng})
    }

    handleLocation = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.name)

            this.setState({
                location: response.data.name
            })
        })
    }

    // handleCondition = () => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
    //     .then(response => {
    //         console.log(response.data.weather)
            
    //         this.setState({
    //             condition: response.data.weather
    //         })
    //     })

    // }

    handleTemperature = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.main.temp)

            this.setState({
                temperature: response.data.main.temp
            })
        })
    }

    handleHumidity = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.main.humidity)

            this.setState({
                humidity: response.data.main.humidity
            })
        })
    }

    

    render(){
        return(
            <Provider value={{
                ...this.state, 
                
                handleCoordinate: this.handleCoordinate,
                handleLocation: this.handleLocation,
                // handleCondition: this.handleCondition,
                handleTemperature: this.handleTemperature,
                handleHumidity: this.handleHumidity
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default GlobalProvider

export const withProvider = C => props => (
    <Consumer>
      {value => <C {...value}{...props}/>}
    </Consumer>
)