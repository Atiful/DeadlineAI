import axios from "axios"
const httpURL = 'http://localhost:3000';

export const APILoginForm = async (user) => {
    try{
    const response = await axios.post(`${httpURL}/auth/login` , user ,  {withCredentials: true});
     return response;
    }
    catch(error){
        return error.response || { status: 500, data: { message: "Something went wrong" } };
    }
}


export const APISignupForm = async (user) => {
    try{
    const response = await axios.post(`${httpURL}/auth/signup` , user ,  {withCredentials: true});
     return response;
    }
    catch(error){
        return error.response || { status: 500, data: { message: "Something went wrong" } };
    }
}

export const  ApiUserLoginInfo = async () => {
    try{
    const response = await axios.get(`${httpURL}/auth/isLogin` ,  {withCredentials: true});
     return response;
    }
    catch(error){
        return error.response || { status: 500, data: { message: "Something went wrong" } };
    }
}






export const  APIGoogleSignIn = async () => {
    window.location.href = `${httpURL}/auth/google`;
}

export const ApiLogout = async () => {
    try{
    const response = await axios.get(`${httpURL}/auth/logout` ,  {withCredentials: true});
     return response;
    }
    catch(error){
        return error.response || { status: 500, data: { message: "Something went wrong" } };
    }
}



export const ApiSaveTask = async (userId , deadlineData) => {
    try{
    const response = await axios.post(`${httpURL}/task/${userId}/addTask` , deadlineData ,  {withCredentials: true});
     return response;
    }
    catch(error){
        return error.response || { status: 500, data: { message: "Something went wrong" } };
    }
}



export const ApiGetTasks = async (id) => {
    try{
        const response = await axios.get(`${httpURL}/task/${id}/getTask` , {withCredentials : true});
        return response;
    }
    catch(error){
        return error.response || {status : 500 , data : {message : "Server Error"}};
    }
}



export const ApiAddEventGoogle = async (deadlineData) => {
  try {
    const response = await axios.get(`${httpURL}/google/calender/addEvents`, {
      params: deadlineData,
      withCredentials: true, // ✅ sends session cookie
    });

    return response;
  } catch (error) {
    return error.response || { status: 500, data: { message: "Server Error" } };
  }
};
