import { utilHttp } from "helpers/utilHttp";
import { listParamters } from "../fake/fakeParametros";

const baseUrl = process.env.REACT_APP_API;

const getDataService = () => {
    // const url = `${baseUrl}/Parameters`;
    // return utilHttp().get(url);
    return new Promise((resolve, reject)=>{
        return resolve(listParamters);
    });
}

const saveParameterService = (datos) => {
    const url = `${baseUrl}/Parameters`;
    return utilHttp().post(url, {body: datos});
}

const updParameterService = (datos, id) => {
    const url = `${baseUrl}/Parameters/${id}`;
    return utilHttp().put(url, {body: datos});
}

const delParameterService = (id) => {
    const url = `${baseUrl}/Parameters/${id}`;
    return utilHttp().del(url);
}

export const paramterService = { getDataService, saveParameterService, updParameterService, delParameterService };
