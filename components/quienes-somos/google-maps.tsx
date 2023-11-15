import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useState } from "react";

const GoogleMaps = () => {

    const containerStyle = {
    width: '800px',
    height: '400px',
    borderRadius: '10px', // Adjust the radius based on your needs
  };
  
  const center = {
    lat: 28.417590,
    lng: -16.541830,
  };

  const zoom = 16

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAdP2Jy5nVXuPAX1vzAfHes2nkupjsXr-0"
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    map.setZoom(zoom)

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    map.setZoom(zoom)
    setMap(null)
  }, [])

    return (
        <div className="bg-black w-full h-[800px] grid grid-cols-1 xl:grid-cols-4 place-content-center place-items-center xl:px-20">
        <div className="flex flex-col space-y-10 col-span-1 py-20">
            <div className="flex flex-col space-y-2">
                <h5 className=" text-lg text-white">Nuestras ubicaciones</h5>
                <h6 className="font-semibold text-3xl text-white">Oficinas y talleres</h6>
                <p className=" text-xl text-white">Encuéntranos en estas ubicaciones.</p>
            </div>
            <div className="flex flex-col space-y-2">
                <p className=" text-xl text-white">Tenerife, España</p>
                <p className=" text-xl text-white max-w-[300px]">C. la Carreta, 20, 38400 Puerto de la Cruz</p>
            </div>
        </div>
        <div className="col-span-3">
            {isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                   <Marker position={{ lat: 28.417590, lng: -16.541830 }}/>
            </GoogleMap>
         ) : <></>}
        </div>
    </div>
    )
}

export default GoogleMaps