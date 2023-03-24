import {FunctionComponent} from "react";

type InfoElementProps = {
    name: string,
    val: string,
}

const InfoElement: FunctionComponent<InfoElementProps> = props => {
    return (
        <div
            className="flex flex-col text-center md:text-left gap-1 md:gap-2 md:border-l md:pl-10 first:border-none first:pl-0 grow basis-0">
            <div
                className="text-dark-gray font-bold text-[.6rem] md:text-xs tracking-[.15em] md:tracking-widest">{props.name}</div>
            <div
                className="font-medium text-xl md:text-2xl text-very-dark-gray md:whitespace-pre-wrap">{props.val}</div>
        </div>
    );
};

export default InfoElement;