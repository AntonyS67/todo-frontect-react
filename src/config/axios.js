import axios from "axios";
import { url } from "./api";

export const clientAxios = axios.create({
    baseURL: url
})