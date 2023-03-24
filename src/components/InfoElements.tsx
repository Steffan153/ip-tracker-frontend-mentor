import {FunctionComponent} from "react";
import {IpInfo} from "../helpers/get-location";
import InfoElement from "./InfoElement";

type IpInfoElementsProps = {
    data: IpInfo,
}

const InfoElements: FunctionComponent<IpInfoElementsProps> = ({data}) => {
    return (
        <div className="flex justify-center">
            <div
                className="w-full lg:w-11/12 xl:w-3/4 flex flex-col md:flex-row justify-between bg-white rounded-xl gap-5 md:gap-0 -mt-28 md:-mt-8 py-6 px-4 md:p-9 translate-y-1/2 shadow-xl relative z-[1000]">
                <InfoElement name="IP ADDRESS" val={data.ip}/>
                <InfoElement name="LOCATION" val={data.region}/>
                <InfoElement name="TIMEZONE" val={data.timezone}/>
                <InfoElement name="ISP" val={data.isp}/>
            </div>
        </div>
    );
};

export default InfoElements;