import Header from '@/components/Header'
import styles from './styles.module.css'
import { useState } from "react";
import axios from 'axios';

const SignUp = () =>{

    const [formData, setFormData] = useState({})

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await axios.post("http://localhost:3080/api/v1/users", formData);
        window.location.href = `/users/${formData.name}`
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };


    return(
        <>
            <Header/>
            <div className="container">
                <h1 className={styles.title}>Sign Up</h1>
                <form className='form-primary' onSubmit={handleSubmit}>
                    <input type="text" 
                    name="name" 
                    placeholder="Ingresar Nombre" 
                    onChange={handleInputChange} />
                    <input 
                    type="text" 
                    name="country" 
                    placeholder="Ingresar Pais" 
                    onChange={handleInputChange} />
                    <button 
                    className="btn-primary" 
                    type="submit">Send</button>
                </form>
            </div>
        </>
    )
}


export default SignUp