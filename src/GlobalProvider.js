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
            lat: 40.7508,
            lng: -111.8710 
        }
    }

    handleCoordinate = (lat, lng) => {
        this.setState({lat, lng})
    }

    // handleWeather = () => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
    //     .then(response => {
    //         // console.log(response.data.name)

    //         this.setState({
    //             location: response.data.name,
    //             condition: response.data.weather[0].description,
    //             temperature: response.data.main.temp,
    //             humidity: response.data.main.humidity,
    //             sunrise: response.data.sys.sunrise,
    //             sunset: response.data.sys.sunset,
    //             windSpeed: response.data.wind.speed,
    //             windDirection: response.data.wind.deg
    //         })
    //     })
    // }

    handleLocation = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.name)

            this.setState({
                location: response.data.name
            })
        })
    }

    handleCondition = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.weather[0].description)
            

            this.setState({
                condition: response.data.weather[0].description
            })
            })
        }

    handleTemperature = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.main.temp)
            // const temp = response.data.main.temp.map()

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

    handleSunrise = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.sys.sunrise)

            this.setState({
                sunrise: response.data.sys.sunrise
            })
        })
    }

    handleSunset = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.sys.sunset)

            this.setState({
                sunset: response.data.sys.sunset
            })
        })
    }

    handleWindSpeed = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.wind.speed)

            this.setState({
                windSpeed: response.data.wind.speed
            })
        })
    }
    handleWindDirection = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.wind.deg)

            this.setState({
                windDirection: response.data.wind.deg

            })
        })
    }

    

    render(){
        return(
            <Provider value={{
                ...this.state, 
                    // handleWeather: this.handleWeather
                handleCoordinate: this.handleCoordinate,
                handleLocation: this.handleLocation,
                handleCondition: this.handleCondition,
                handleTemperature: this.handleTemperature,
                handleHumidity: this.handleHumidity,
                handleSunrise: this.handleSunrise,
                handleSunset: this.handleSunset,
                handleWindSpeed: this.handleWindSpeed,
                handleWindDirection: this.handleWindDirection
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