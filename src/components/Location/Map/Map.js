import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import PropTypes from 'prop-types'

const Map = ({ position, zoom, markerText, className }) => {
  return (
    <MapContainer
      className={className}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        {markerText && <Popup>{markerText}</Popup>}
      </Marker>
    </MapContainer>
  )
}

Map.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  markerText: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
}

Map.defaultProps = {
  position: [43.64401, -79.39458],
  zoom: 13,
  markerText: '',
}

export default Map
