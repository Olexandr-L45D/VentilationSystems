// ContactMap.jsx
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import css from "./ContactMap.module.css";

// Координати ITALVENT
const position = [45.69973, 11.46358]; //Italy, Via Marco Corner, 2

// Кастомна іконка з логотипом
const defaultIcon = new L.Icon({
  iconUrl:
    "https://res.cloudinary.com/dpzs8insu/image/upload/v1764916134/LogoItalvent_jwgcfp.jpg", // ⚠️ Замінити шлях при потребі
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  className: "marker-default",
});

const hoverIcon = new L.Icon({
  iconUrl:
    "https://res.cloudinary.com/dpzs8insu/image/upload/v1764916134/LogoItalvent_jwgcfp.jpg",
  iconSize: [60, 60],
  iconAnchor: [30, 60],
  className: "marker-hover",
});

// Компонент для плавного zoom при завантаженні
function SmoothZoom() {
  const map = useMap();
  map.setView(position, 13, { animate: true });
  return null;
}

export default function ContactMap() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={css.mapWrapper}>
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={false}
        className={css.cardMap}
      >
        <SmoothZoom />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          maxZoom={19}
          minZoom={3}
          tileSize={256}
          detectRetina={true} // вмикає retina-тайли на високих DPR
          subdomains={["a", "b", "c"]}
          errorTileUrl="/images/placeholder-tile.png" // зображення при помилці
        />

        <Marker
          position={position}
          icon={isHovered ? hoverIcon : defaultIcon}
          eventHandlers={{
            mouseover: () => setIsHovered(true),
            mouseout: () => setIsHovered(false),
          }}
        >
          <Tooltip
            direction="top"
            offset={[0, -10]}
            opacity={1}
            permanent={false} // з’являється тільки при hover
            className={css.customTooltip}
          >
            Via Marco Corner, 2, 36016 Thiene (VI), Italy
          </Tooltip>
        </Marker>
      </MapContainer>
    </section>
  );
}

// // Пояснення під капотом

// TileLayer — компонент з react-leaflet, що підключає тайловий шар карти (мозаїку з маленьких зображень — «тайлів»). Саме цей шар показує карту (дороги, рельєф і т.д.).

// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// Це шаблон URL для тайлів:

// {z} — zoom level (0 — світ, 1..n — детальніше)

// {x}, {y} — координати тайла в тайловій системі

// {s} — subdomain (зазвичай a, b, c) — браузер одночасно робить кілька паралельних запитів, тому субдомени прискорюють підвантаження.
// OpenStreetMap офіційний тайл-сервер підтримує a, b, c.

// attribution="&copy; OpenStreetMap"
// Пара метаданих, яка відображається у лівому/правому нижньому куті карти — обов’язкова для більшості публічних тайл-провайдерів (OSM вимагає коректного атрибуту). Можна використовувати HTML, наприклад:
