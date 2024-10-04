import { serverURL } from "./serverURL";
import { commonApi } from "./commonApi";

//upload video
export const uploadVideo=async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/videos`,reqBody)
}

//get all videos
export const getAllVideos= async() =>{
    return await commonApi('GET',`${serverURL}/videos`,"")
    //http://localhost:4000/videos
}

//delete videos
export const deleteVideo=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/videos/${id}`,{})
    //http://localhost:4000/videos/1
}

//add to watch histroy
export const addToHistroy=async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/histroy`,reqBody)
}

//get all histroy
export const getHistory=async()=>{
    return await commonApi('GET',`${serverURL}/histroy`,"")
}

//delete history by id
export const deleteHistory=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/histroy/${id}`,{})
}

//add category
export const addCategory=async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/category`,reqBody)
}

//get all category
export const getAllCategory=async()=>{
    return await commonApi('GET',`${serverURL}/category`,"")
}

//delete category
export const deleteCategory=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/category/${id}`,{})
}

//get all videos details by id
export const getAllVideosById= async(id) =>{
    return await commonApi('GET',`${serverURL}/videos/${id}`,"")
    
}

//update category with video details
export const updateCategory=async(data,id)=>{
    return await commonApi('PUT',`${serverURL}/category/${id}`,data)
}
