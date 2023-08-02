import axios from "axios";

export const getProductsByApi = () => axios.get(`/api/foods`);
export const getProductByApi = (id: string) => axios.get(`/api/foods/${id}`);
export const getProductsByNameByApi = (name: string) => axios.get(`/api/foods?search=${name}`);
