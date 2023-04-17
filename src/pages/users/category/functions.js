import axios from "axios"

const getCategory = async (categoryId, state) =>{
    const response =  await axios.get(`http://localhost:3080/api/v1/categories/${categoryId}`);
    state(response.data.data)
}


export { getCategory }