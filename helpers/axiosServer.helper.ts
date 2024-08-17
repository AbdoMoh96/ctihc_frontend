import axios, { AxiosInstance } from "axios";
import config from "../helpers/config.helper";
import { getLocale } from "next-intl/server";


    const axiosInstanceServer = async () => {
        const locale = await getLocale();
        const axiosInstance: AxiosInstance = axios.create({
            baseURL: config.AppUrl,
        });
        axiosInstance.defaults.headers.common["Accept-Language"] = locale;
        return axiosInstance;
    }

export default axiosInstanceServer;