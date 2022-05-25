import { vectorGrid, svg } from 'leaflet';
import { MapContainer, TileLayer, useMap, WMSTileLayer } from 'react-leaflet'
import { VectorTileLayer } from 'react-esri-leaflet'

import './App.css';

const position = [54.983, 73.368]

/**
 * https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreOriginal/MapServer вот тут можно почитать подробнее
 * что должно передаваться, я взял просто какие-то рандомные значения
 */
const params = {
  layers: "show:0",
  format: "png32",
  f: "image",
  transparent: true,
  bboxSR: 102100,
  imageSR: 102100,
  size: "1024,1024"
}

function App() {

  return (
    <MapContainer center={position} zoom={13} className="mapa" attributionControl={false}>
      {/* <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      {/* Вот так подключается MapServer, к Leaflet */}
      <WMSTileLayer url='https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreOriginal/MapServer/export' params={params} />
      {/* <VectorTileLayer url="https://pkk.rosreestr.ru/arcgis/rest/services/Hosted/caddivsion/VectorTileServer" /> */}
      <TileLayer url='https://pkk.rosreestr.ru/arcgis/rest/services/Hosted/caddivsion/VectorTileServer/tile/{z}/{y}/{x}.pbf' />
    </MapContainer>
  );
}

export default App;
