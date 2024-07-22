import { axiosInstance } from "../config/axios";
import { endpoint } from "../config/endpoint";

export const getAllLists = async () => {
    try {
        const response = await axiosInstance.get(endpoint.getAllLists);
        return response.data;
    } catch (error) {
        console.error("Error while fetching lists", error);
    }
};

export const getListsById = async (id:any) => {
    try {
        const response = await axiosInstance.get(`${endpoint.getAllLists}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error while fetching lists", error);
    }
};  

export const addList = async (data: any) => {
    try {
        const response = await axiosInstance.post(endpoint.getAllLists, data);
        return response.data;
    } catch (error) {
        console.error("Error while adding list", error);
    }
}