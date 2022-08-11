import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLTileLayer from "ol/layer/Tile";
import BingMaps from 'ol/source/BingMaps';

const TileLayer = ({ source, zIndex = 0 }) => {
  const { map } = useContext(MapContext); 
  useEffect(() => {
    if (!map) return;
    
    let tileLayer = new OLTileLayer({
      source: new BingMaps({
        key: 'AuCWgl-KkoQAapboty-exYZfK_I2ssPvO6npZFxx_eYfnUZVrZ2pVc4XZYCQ_MuN',
        imagerySet: 'Aerial',
      }),
      zIndex,
    });


    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);

    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);
  return null;
};

export default TileLayer;