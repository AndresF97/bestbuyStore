import axios from "axios"

export default {
    getItem:function(query){
        console.log("hello")
        return axios.get('/api/products/', { params: { q: query } }) 
    }
}