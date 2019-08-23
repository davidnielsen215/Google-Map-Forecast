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
            const cond = response.data.weather[0].description
            
            function capFirst(str){
                str = str.split(' ')

                for (let i = 0; i < str.length; i++){
                    str[i] = str[i][0].toUpperCase() + str[i].substr(1)

                }
                return str.join(' ')
            }
            console.log(capFirst(cond))

            this.setState({
                condition: capFirst(cond)
            })
            })
        }

    handleTemperature = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.main.temp)
            const celcius = response.data.main.temp -273 //KELVIN
            const cToF = celcius * 9 / 5 +32
            const dispF = cToF.toFixed(2)


            this.setState({
                temperature: dispF + ' F°'
            })
        })
    }

    handleHumidity = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.main.humidity)

            this.setState({
                humidity: response.data.main.humidity + '%'
            })
        })
    }

    handleSunrise = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.sys.sunrise)
            const milliSunrise = response.data.sys.sunrise

            let date = new Date (milliSunrise * 1000)
            let hours = date.getHours()
            let minutes = '0' + date.getMinutes()

            let sunriseTime = hours + ':' + minutes.substr(-2)

            this.setState({
                sunrise: sunriseTime
            })
        })
    }

    handleSunset = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.sys.sunset)
            const milliSunset = response.data.sys.sunset
            
            let date = new Date (milliSunset * 1000)
            let hours = date.getHours()
            let minutes = '0' + date.getMinutes()

            let sunsetTime = hours + ':' + minutes.substr(-2)


            this.setState({
                sunset: sunsetTime 
            })
        })
    }

    handleWindSpeed = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.wind.speed)

            this.setState({
                windSpeed: response.data.wind.speed + ' mph'
            })
        })
    }
    handleWindDirection = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&APPID=a3a7340c7c6572b7b7d92eb4c451ff67`)
        .then(response => {
            console.log(response.data.wind.deg)

            this.setState({
                windDirection: Math.trunc(response.data.wind.deg) + ' degrees'

            })
        })
    }

    

    render(){
        return(
            <Provider value={{
                ...this.state, 
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