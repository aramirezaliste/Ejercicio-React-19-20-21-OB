import axiosConfig from "../utils/axios.config";

export const getRandomJoke = () => {
    return axiosConfig.get('/jokes/random')
} 