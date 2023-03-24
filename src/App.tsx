import {useState} from "react";

import './App.css';
import {IpInfo} from "./helpers/get-location";
import MapBox from "./components/MapBox";
import TopArea from "./components/TopArea";

function App() {
    const defaultLocation = {
        ip: "-",
        isp: "-",
        lat: 0,
        lng: 0,
        region: "-",
        timezone: "-"
    };

    const [loc, setLoc] = useState<IpInfo>(defaultLocation);

    return (
        <div className="h-screen flex flex-col">
            <TopArea loc={loc} setLoc={x => setLoc(x || defaultLocation)}/>
            <MapBox lng={loc.lng} lat={loc.lat}/>
        </div>
    );
}

export default App;
