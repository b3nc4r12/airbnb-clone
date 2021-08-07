import getCenter from "geolib/es/getCenter"
import { useState } from "react"
import ReactMapGL, { Marker } from "react-map-gl"

const Map = ({ searchResults }) => {
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/b3nc4r12/cks1au8v438ey17pdckf5nlaf"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map((result) => (
                <div>
                    <Marker
                        latitude={result.lat}
                        longitude={result.long}
                    >
                        <div className="bg-white rounded-2xl font-semibold py-1 px-1.5 hover:bg-black hover:text-white transition duration-150 ease-out cursor-pointer">${result.price} CAD</div>
                    </Marker>
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map