import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";

    const AddButton = () =>{

    const [modal, setModal] = useState(false);
    const [data, setData] = useState({});

    const handleButton = () =>{
        setModal(!modal)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const reponse = await axios.post('http://localhost:3080/api/v1/categories', data);
        location.reload()
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        setData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    return(
        <>
            <button onClick={handleButton} className={styles.addButton}>+</button>
            <div className={modal ? styles.modal : styles.modalInactive}>
                <form onSubmit={handleSubmit} className="form-primary">
                    <span onClick={() => setModal(false)} className="btn-close">x</span>
                    <h3>Crear una nueva categoria </h3>
                    <label for="icono">Seleciona un icono</label>
                    <input 
                    type="text" 
                    id="icono"
                    name="image"
                    onChange={handleInput}
                    />
                    <input 
                    type="text" 
                    name="title" 
                    placeholder="Ingresar el nombre de la categoria" 
                    onChange={handleInput}
                    />
                    <button type="submit" className="btn-primary">Crear</button>
                </form>
            </div>
        </>
        
    )
    }


export default AddButton