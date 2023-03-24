import {FunctionComponent, KeyboardEventHandler, useEffect, useRef, useState} from "react";

import {getLocation, IpInfo} from "../helpers/get-location";
import InfoElements from "./InfoElements";

import ArrowIcon from '../assets/icon-arrow.svg';

type TopAreaProps = {
    loc: IpInfo,
    setLoc: (loc: IpInfo | null) => void,
}

const TopArea: FunctionComponent<TopAreaProps> = ({loc, setLoc}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [domain, setDomain] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const location = await getLocation(domain);
                setLoc(location);
            } catch (e) {
                setLoc(null);
                console.log(e);
            }
        })();
    }, [domain]);

    const handleClick = () => setDomain(inputRef.current!.value);

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === "Enter") {
            handleClick();
        }
    };

    return <div className="top-area p-6 pb-1">
        <h1 className="text-white text-center text-2xl md:text-3xl font-medium">IP Address Tracker</h1>
        <div
            className="flex justify-center mt-7 shadow-md max-w-xl mx-auto focus-within:shadow-xl rounded-xl">
            <input type="text"
                   placeholder="Search for any IP address or domain"
                   className="rounded-l-xl outline-none px-5 py-3 w-full text-lg"
                   ref={inputRef}
                   onKeyDown={handleKeyDown}/>
            <button className="bg-very-dark-gray px-4 border-none rounded-r-xl hover:bg-black"
                    onClick={handleClick}>
                <ArrowIcon/>
            </button>
        </div>
        <InfoElements data={loc}/>
    </div>;
};

export default TopArea;