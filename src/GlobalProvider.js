import React, {Component} from 'react'
const {Consumer, Provider} = React.createContext()

export class GlobalProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: 'Salt Lake City',
            condition: '',
            temperature: '',
            humidity: '',
            sunrise: '',
            sunset: '',
            windSpeed: '',
            windDirection: '',
            markers: [{
                position: {   
                    lat: '',
                    lng: '' 
                }
            }],
            lat: '',
            lng: ''
        }
    }

    handleCoordinate = (lat, lng) => {
        this.setState({lat, lng})
    }
    

    render(){
        return(
            <Provider value={{
                ...this.state, 
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange,
                handleCoordinate: this.handleCoordinate
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