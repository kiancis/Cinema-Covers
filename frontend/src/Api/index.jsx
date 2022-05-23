import axios from "axios";

export const getTrailersRequests = async () => await axios.get("/trailer");
export const createTrailersRequests = async (post) =>{
  const form = new FormData();
  for(let key in post){
    form.append(key, post[key]);
  }
  return await axios.post("/trailer", form,{
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}
export const deleteTrailersRequests = async (_id) =>
  await axios.delete(`/trailer/${_id}`);
export const getTrailerRequests = async (_id) => await axios.get(`/trailer/${_id}`);
export const updateTrailerRequests = async (id, newFields) =>
  await axios.put(`/trailer/${id}`, newFields);