import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { tokenState } from "../store/session";
import { useAxios } from "./axios"

export const useUpdateFound = () => {
    const [request, response] = useAxios();

    const run = useCallback((values) => {
        const fd=new FormData()
        fd.append('imagefile',values.imagefile)
        fd.append('title',values.title)
        fd.append('category',values.category)
        fd.append('date',values.date)
        fd.append('lost_location',values.lost_location)
        fd.append('lost_detail',values.lost_detail)
        fd.append('store_location',values.store_location)
        fd.append('store_detail',values.store_detail)
        fd.append('content',values.content)
        fd.append('userId',Number(values.userId))
        return request({
            url: '/found/register',
            method: 'POST',
            data: fd,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
      }, [request])

    return [run, response]
}

export const useUpdateLost = () => {
    const [request,response] =useAxios();
    const run = useCallback((values) => {
        return request({
            url: '/lost/register',
            method: 'POST',
            data: values
        })
    },[request])
    return [run,response]
}

export const useGetLost = () =>{
    const [request,response] =useAxios();
    // const userId=useRecoilValue(tokenState);
    const run = useCallback(()=>{
        return request({
            url: `/lost`,
            method: 'GET'
        })
    },[request])
    return [run,response]

}

export const useGetLostPost = () =>{
    const [request,response]=useAxios();

    const run = useCallback((id)=>{
        return request({
            url: `/lost/${id}`,
            method: 'GET'
        })
    },[request])
    return [run,response]
}

export const useGetFound = () =>{
    const [request,response]=useAxios();

    const run = useCallback(()=>{
        return request({
            url: `/found`,
            method: 'GET'
        })
    },[request])
    return [run,response]
}
export const useGetFoundPost = () =>{
    const [request,response]=useAxios();

    const run = useCallback((id)=>{
        return request({
            url: `/found/${id}`,
            method: 'GET'
        })
    },[request])
    return [run,response]
}

export const useGetLocation = () =>{
    const [request,response]=useAxios();

    const run = useCallback(()=>{
        return request({
            url: `/found/location`,
            method: 'GET'
        })
    },[request])
    return [run,response]

}

export const useGetMyinfo =()=>{
    const [request,response]=useAxios();

    const run = useCallback((id)=>{
        return request({
            url:`/user/mypage/info/${id}`,
            method: 'GET'
        })
    },[request])
    return [run,response]
}

export const useGetMyposts = () =>{
    const [request,response]=useAxios();

    const run = useCallback((id)=>{
        return request({
            url:`/user/mypage/content-info/${id}`
        })
    },[request])
    return [run,response]
}