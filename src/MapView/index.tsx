import React from "react";
import "../MapView/styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker as LMarker, Popup } from "react-leaflet";
import { icon, LatLngExpression } from "leaflet";
import { Marker, Status } from "./mapModel";

type Props = {
  markers: Marker[];
};

function MapView(props: Props) {
  const position: LatLngExpression = [47.495632, 19.061795];
  const { markers } = props;
  const defaultIconUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png";

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker, index) => (
        <LMarker
          key={index}
          position={marker.pos}
          title={marker.name}
          icon={icon({
            iconUrl: marker.icon.length === 0 ? defaultIconUrl : marker.icon,
            iconSize: [25, 25],
            className: marker.status,
          })}
        >
          <Popup>
            <div dangerouslySetInnerHTML={{ __html: marker.details }} />
          </Popup>
        </LMarker>
      ))}
    </MapContainer>
  );
}

export default React.memo(MapView);
