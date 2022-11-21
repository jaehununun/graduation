import { useCallback } from "react";
import { useAxios } from "./axios"

export const useUpdateFound = () => {
    const [request, response] = useAxios();

    const run = useCallback((values) => {
        const fd=new FormData()
        fd.append('photo',values.photo)
        fd.append('title',values.title)
        fd.append('category',values.category)
        fd.append('date',values.date)
        fd.append('lost_location',values.lost_location)
        fd.append('lost_detail',values.lost_detail)
        fd.append('store_location',values.store_location)
        fd.append('store_detail',values.store_detail)
        fd.append('content',values.content)
        return request({
          url: '/found/register',
          method: 'POST',
          data: fd
        })
      }, [request])

    return [run, response]
}