import { useCallback } from "react";
import { useAxios } from "./axios";

export const useLogin = () => {
  const [request, response] = useAxios();

  const run = (studentNumber, password) => {
    return request({
      url: "/user/sign-in",
      method: "POST",
      data: { studentNumber, password },
    });
  };

  return [run, response];
};

export const useMyInfo = () => {
  const [request, response] = useAxios();

  const run = useCallback((id) => {
    return request({
      url: `/user/mypage/info/${id}`,
      method: 'GET'
    })
  }, [request])

  return [run, response]
}

export const useSignup = () => {
  const [request, response] = useAxios();

  const run = useCallback((values) => {
    return request({
      url: '/user/sign-up',
      method: 'POST',
      data: values
    })
  }, [request])

  return [run, response]
}