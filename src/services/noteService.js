import axios from "axios";

const baseUrl='http://localhost:3002/notes'


const getAllnotes=()=>{
    return axios.get(baseUrl)
}
const createNote=(newNote)=>{
    return axios.post(baseUrl,newNote)

}
const deletenote=(id)=>{
    return axios.delete(`${baseUrl}/${id}`)
}
const updateNote=(id, targetNote)=>{
    return axios.put(`${baseUrl}/${id}`,targetNote)
}
export default{
    getAllnotes,
    createNote,
    deletenote,
    updateNote

}