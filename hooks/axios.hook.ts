import axios, { AxiosInstance } from "axios";
import config from "../helpers/config.helper";
import { useLocale } from "next-intl";

const useAxiosInstance = (): AxiosInstance => {
    const locale = useLocale();

    const axiosInstance: AxiosInstance = axios.create({
        baseURL: config.AppUrl,
    });

    axiosInstance.defaults.headers.common["Accept-Language"] = locale;

    return axiosInstance;
};

export default useAxiosInstance;