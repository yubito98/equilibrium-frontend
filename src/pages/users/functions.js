import axios from "axios"


const getCategories = async (state)=>{
    const response = await axios.get('http://localhost:3080/api/v1/categories');
    state(response.data)
    console.log(response.data)
}


export {getCategories}