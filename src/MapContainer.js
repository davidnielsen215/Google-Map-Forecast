import React, {Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import {withProvider} from './GlobalProvider'

export class MapContainer extends Component {
    constructor(){
        super()
        this.state = {
            markers: [{
                position: {   
                    lat: 40.7508,
                    lng: -111.8710  
                }
            }]
        }
        this.onClick = this.onClick.bind(this)     
    }
    
    onClick(t, map, coord) {
        const { latLng } = coord
        const lat = latLng.lat()
        const lng = latLng.lng()
        this.props.handleCoordinate(lat, lng)
        this.props.handleLocation()
        // this.props.handleCondition()
        this.props.handleTemperature()
        this.props.handleHumidity()
        this.props.handleSunrise()
        this.props.handleSunset()
            console.log(lat)
            console.log(lng)

        

        this.setState(previousState => {
            return {
                markers: [{
                    position: { lat, lng }
                }]
            }
        })
    }
      
    render() {

        const mapSize = {
            marginLeft: '5%',
            width: '60%',
            height: '80%'
        }

        //Salt Lake City
        const initialPoint = {
            lat: 40.7508,
            lng: -111.8710 
        }

        return (
            <Map  google={this.props.google} 
                zoom={11}
                style={mapSize}
                initialCenter = {initialPoint} 
                onClick={this.onClick}
            >
     
            {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              draggable={true}
              onDragend={this.onClick}
            />
          ))}
     
           
          </Map>
        )
      }
    }

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC-rfY59_Vfk_qUNw_fsP7B1nixnS6Y5tU')
})(withProvider(MapContainer))


