import axios from "axios";

export const http = axios.create({
   // baseUrl:"xxxxx"
   timeout:5000
})


//请求拦截
http.interceptors.request.use((config)=>{
    
    //处理get请求

    if(config.method == "post"){
        config.data = config.data;
    }else if(config.method == "get"){
        config.params = {...config.data};
    }

    return config;
},(e)=>{
    return Promise.reject(e);
})



http.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
        return res.data;
    }
},(e)=>{
    return Promise.reject(e);
})




