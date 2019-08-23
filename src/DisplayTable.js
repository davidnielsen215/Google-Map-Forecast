import React from 'react'
import {withProvider} from './GlobalProvider'
import './DisplayTable.css'

const DisplayTable = (props) => {
    return(
        <div>
            <div className="forecast">
                {/* <ol><b>lattitude</b> {props.lat}</ol>
                <ol><b>longitude </b>{props.lng}</ol> */}
                <div id='yel'> <b>Location</b> {props.location} </div>
                <div id='blue'> <b>Condition</b> {props.condition}</div>
                <div id='yel'> <b>Temperature</b> {props.temperature}</div>
                <div id='blue'> <b>Humidity</b> {props.humidity}</div>
                <div id='yel'> <b>Sunrise</b> {props.sunrise}</div>
                <div id='blue'> <b>Sunset </b>{props.sunset}</div>
                <div id='yel'> <b>Wind Speed </b>{props.windSpeed}</div>
                <div id='blue'> <b>Wind Direction</b> {props.windDirection}</div>
            </div>
        </div>
    )
    
}
export default withProvider(DisplayTable)