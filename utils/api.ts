import { instanceOfAxios } from "./constants";

// ? post api function ********************************

const getApiCall = (
  endPoint: string,
  params: any = "",
  successCallback: Function,
  errorCallback: Function
) => {
  instanceOfAxios
    .get(endPoint, params)
    .then((response: any) => {
      const { status, data } = response;
      if (status === 200) {
        successCallback(data);
      }
    })
    .catch((err) => {
      errorCallback(err);
    });
};

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
  getApiCall,
  postApiCall,
};
