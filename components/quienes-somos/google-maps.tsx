import { useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useEffect, useState } from 'react';

const GoogleMaps = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 800
  );
  const [mapSize, setMapSize] = useState('');

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  useEffect(() => {
    const containerStyle = screenWidth > 1025 ? '800' : '375';
    setMapSize(containerStyle);
  }, []);

  const center = {
    lat: 28.41759,
    lng: -16.54183,
  };

  const zoom = 16;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAdP2Jy5nVXuPAX1vzAfHes2nkupjsXr-0',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    map.setZoom(zoom);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    map.setZoom(zoom);
    setMap(null);
  }, []);

  return (
    <div className="bg-black w-full h-[800px] grid grid-cols-1 xl:grid-cols-4 place-content-center place-items-center xl:px-20">
      <div className="flex flex-col space-y-10 col-span-1 py-20">
        <div className="flex flex-col space-y-2">
          <h5 className=" text-lg text-white">Nuestras ubicaciones</h5>
          <h6 className="font-semibold text-3xl text-white">
            Oficinas y talleres
          </h6>
          <p className=" text-xl text-white">
            Encuéntranos en estas ubicaciones.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className=" text-xl text-white">Tenerife, España</p>
          <p className=" text-xl text-white max-w-[300px]">
            C. la Carreta, 20, 38400 Puerto de la Cruz
          </p>
        </div>
      </div>
      <div className="col-span-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.634968399611!2d-16.55348752437481!3d28.400091275792494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a7f1336c4d10b%3A0x9f4c40e3078336d4!2sDuotono%20Design!5e0!3m2!1ses!2ses!4v1708656775282!5m2!1ses!2ses"
          width={mapSize}
          height="450"
          className="border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMaps;
