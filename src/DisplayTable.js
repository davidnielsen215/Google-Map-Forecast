import React from 'react'
import {withProvider} from './GlobalProvider'
import './DisplayTable.css'

const DisplayTable = (props) => {
    return(
        <div>
            <div className="forecast">
                <ol>lattitude {props.lat}</ol>
                <ol>longitude {props.lng}</ol>
                <ol >Location {props.location} </ol>
                <ol>Condition {props.condition}</ol>
                <ol >Temperature {props.temperature}</ol>
                <ol>Humidity {props.humidity}</ol>
                <ol >Sunrise {props.sunrise}</ol>
                <ol>Sunset {props.sunset}</ol>
                <ol >Wind Speed {props.windSpeed}</ol>
                <ol>Wind Direction {props.windDirection}</ol>
            </div>
        </div>
    )
    
}
export default withProvider(DisplayTable)