'use client';

import { useEffect, useRef } from 'react';

// Coverage polygon coords: Dartford → Gravesend → Sittingbourne → Isle of Sheppey → back west through Medway → Maidstone → Dartford
// Coordinates are [lat, lng]
const COVERAGE_POLYGON: [number, number][] = [
  // Dartford / top-west
  [51.4460, 0.2170],
  // Gravesend
  [51.4415, 0.3700],
  // Northfleet
  [51.4440, 0.3400],
  // Rochester / Strood area east boundary
  [51.3800, 0.5300],
  // Gillingham / Rainham
  [51.3700, 0.5750],
  // Sittingbourne north
  [51.3600, 0.7400],
  // Isle of Sheppey - east tip (Leysdown)
  [51.3800, 0.9200],
  // Isle of Sheppey - north (Minster/Sheerness)
  [51.4400, 0.7600],
  // Isle of Sheppey - west (bridge/Kingsferry)
  [51.4000, 0.7200],
  // Back west along Thames estuary / Swale
  [51.3900, 0.6800],
  // Maidstone east
  [51.2700, 0.5900],
  // Maidstone south
  [51.2500, 0.5200],
  // Maidstone west
  [51.2720, 0.4600],
  // Dartford south
  [51.3800, 0.2300],
  // Close back to Dartford start
  [51.4460, 0.2170],
];

// Map centre: midpoint of coverage area
const MAP_CENTER: [number, number] = [51.3700, 0.5800];
const MAP_ZOOM = 10;

export default function CoverageMap({ height = '420px' }: { height?: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Leaflet must be imported client-side only
    import('leaflet').then((L) => {
      // Fix default marker icon paths broken by webpack
      delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(mapRef.current!, {
        center: MAP_CENTER,
        zoom: MAP_ZOOM,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      // Tile layer — CartoDB Positron (clean, light, no API key)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Coverage polygon — pink dashed border, light pink fill
      L.polygon(COVERAGE_POLYGON, {
        color: '#D4887F',
        weight: 2.5,
        dashArray: '8 6',
        fillColor: '#E8A4A0',
        fillOpacity: 0.18,
      }).addTo(map);

      // Town markers
      const towns: { name: string; lat: number; lng: number }[] = [
        { name: 'Dartford', lat: 51.4460, lng: 0.2170 },
        { name: 'Gravesend', lat: 51.4415, lng: 0.3680 },
        { name: 'Rochester', lat: 51.3885, lng: 0.5050 },
        { name: 'Chatham', lat: 51.3800, lng: 0.5280 },
        { name: 'Gillingham', lat: 51.3855, lng: 0.5490 },
        { name: 'Strood', lat: 51.3942, lng: 0.4795 },
        { name: 'Rainham', lat: 51.3685, lng: 0.6115 },
        { name: 'Maidstone', lat: 51.2720, lng: 0.5220 },
        { name: 'Sittingbourne', lat: 51.3400, lng: 0.7400 },
        { name: 'Isle of Sheppey', lat: 51.4000, lng: 0.8000 },
      ];

      const dotIcon = L.divIcon({
        className: '',
        html: `<div style="width:10px;height:10px;border-radius:50%;background:#D4887F;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.25);"></div>`,
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      });

      towns.forEach(({ name, lat, lng }) => {
        L.marker([lat, lng], { icon: dotIcon })
          .addTo(map)
          .bindPopup(`<strong style="font-family:serif;color:#1E293B;">${name}</strong>`, { closeButton: false });
      });

      mapInstanceRef.current = map;
    });

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div
        ref={mapRef}
        style={{ height, width: '100%' }}
        aria-label="Map showing Primrose Ever Care coverage area across North Kent"
      />
    </>
  );
}
