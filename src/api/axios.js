import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "b3f1515648d238b959e9bea84a7569f9",
        language: "en-US",
    },
});

export default instance;