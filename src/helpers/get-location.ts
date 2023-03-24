function isIpAddress(ip: string) {
    return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(ip);
}

export interface IpInfo {
    ip: string;
    region: string;
    timezone: string;
    isp: string;
    lat: number;
    lng: number;
}

export async function getLocation(address: string | null): Promise<IpInfo> {
    throw new Error();
    let url = 'https://geo.ipify.org/api/v1?apiKey=' + import.meta.env.VITE_IPIFY_KEY;
    if (address) {
        url += isIpAddress(address) ? '&ipAddress=' : '&domain=';
        url += encodeURIComponent(address);
    }
    const res = await fetch(url);
    const json = await res.json();
    if (!json.location) {
        throw new Error(JSON.stringify(json));
    }
    return {
        ip: json.ip,
        region: json.location.city + ", " + json.location.region + "\n" + json.location.postalCode,
        lat: json.location.lat,
        lng: json.location.lng,
        timezone: "UTC " + json.location.timezone,
        isp: json.isp,
    };
}