import React from 'react'
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl'

const Map = ReactMapboxGl({accessToken: ''})

const geojson = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [2.15, 41.39]
  },
  properties: {
    name: 'Un Punto'
  }
}

class MapPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      angle: 0,
      center: [2.15, 41.39],
      zoom: [12]
    }
    this.animateMarker = this.animateMarker.bind(this)
  }

  componentDidMount () {
    window.requestAnimationFrame(this.animateMarker)
  }

  animateMarker (timestamp) {
    // Update the data to a new position based on the animation timestamp. The
    // divisor in the expression `timestamp / 1000` controls the animation speed.
    this.setState({ angle: (timestamp / 5) % 360 })

    // Request the next frame of the animation.
    window.requestAnimationFrame(this.animateMarker)
  }

  render () {
    return (<Map className='animated slideInRight map' style='https://apps.tmb.cat/sm/assets/mapboxgl/styles/positron.json' center={this.state.center} zoom={this.state.zoom}>
      <GeoJSONLayer data={geojson}
        symbolLayout={{
          'icon-image': 'TMB',
          'icon-rotate': this.state.angle
        }} />
    </Map>)
  }
}

export default MapPage
