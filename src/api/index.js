import {post} from '@/utils/http'
export const getIndex=(data)=>post("post","/hop/router/rest.json",data);
