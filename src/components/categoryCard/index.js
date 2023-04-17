import styles from "./styles.module.css";
import axios from "axios";

const CategoryCard = ({name, icon, editButton}) =>{

    const deleteCard =  async () =>{
        const response = await axios.delete(`http://localhost:3080/api/v1/categories/${name}`)
        location.reload()
    }

  



    return(
        <div className={styles.categoryCard} >
            <img src={`${icon}`}/>
            <h4>{name}</h4>
            <div className={styles.categoryCardButtons} >
                <button onClick={deleteCard} className="btn-delete">Eliminar</button>
                <button onClick={editButton} className="btn-secondary">Editar</button>
            </div>
        </div>
    )
}



export default CategoryCard