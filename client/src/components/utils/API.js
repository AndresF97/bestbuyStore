import axios from "axios"

export default {
    getItem:function(query){
        //console.log("hello")
        return axios.get('/api/products/', { params: { q: query } }) 
    },
    saveItem:function(save){
        console.log("saved")
        return axios.post("/api/products/",save)
    }
}