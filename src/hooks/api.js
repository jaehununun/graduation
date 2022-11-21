import { useCallback } from "react";
import { useAxios } from "./axios"

export const useUpdateFound = () => {
    const [request, response] = useAxios();

    const run = useCallback((values) => {
        return request({
          url: '/found/register',
          method: 'POST',
          data: values
        })
      }, [request])

    return [run, response]
}