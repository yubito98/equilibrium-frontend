import axios from "axios";

const getData = async(state) => {
    const response = await axios.get('http://localhost:3080/api/v1/users');
    state(response.data); 
}


export default getData