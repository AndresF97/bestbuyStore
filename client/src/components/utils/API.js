import axios from "axios"

export default {
    getItem:function(query){
        //console.log("hello")
        return axios.get('/api/products/', { params: { q: query } }) 
    },
    findItem:function(){
        console.log("saved in API Util calls")
        return axios.post("/api/products/")
    },
    getItems:function(name){
        return axios.get("/api/products/cart")
    }
}