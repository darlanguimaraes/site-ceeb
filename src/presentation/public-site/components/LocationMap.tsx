import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix para ícones do Leaflet no React
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface LocationMapProps {
  height?: string;
}

export default function LocationMap({ height = "400px" }: LocationMapProps) {
  const position: [number, number] = [-27.56208174299294, -48.628447642403486]; // Ajuste as coordenadas exatas

  return (
    <div
      style={{ height, width: "100%" }}
      className="rounded-sm overflow-hidden border border-slate-200"
    >
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <LayersControl position="topright">
          {/* Camada de Terreno (Padrão) */}
          <LayersControl.BaseLayer checked name="Mapa de Ruas">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          {/* Camada Satélite */}
          <LayersControl.BaseLayer name="Satélite">
            <TileLayer
              attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        {/* Marcador da localização */}
        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <strong className="text-primary">
                Casa Espírita Eurípedes Barsanulpho
              </strong>
              <p className="text-sm mt-1">Rua Flomape, 1342</p>
              <p className="text-sm">São José, Santa Catarina</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xs underline mt-2 inline-block"
              >
                Abrir no Google Maps
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
