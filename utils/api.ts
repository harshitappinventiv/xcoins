import { instanceOfAxios } from "./constants";

// ? post api function ********************************

const postApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  instanceOfAxios
    .post(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((err) => {
      errorCallback(err);
    });
};

export default {
  postApiCall,
};
