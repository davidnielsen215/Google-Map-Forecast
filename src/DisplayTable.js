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
                <ol>Condition</ol>
                <ol >Temperature</ol>
                <ol>Humidity</ol>
                <ol >Sunrise</ol>
                <ol>Sunset</ol>
                <ol >Wind Speed</ol>
                <ol>Wind Direction</ol>
            </div>
        </div>
    )
    
}
export default withProvider(DisplayTable)