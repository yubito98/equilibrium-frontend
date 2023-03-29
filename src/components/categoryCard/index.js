import styles from "./styles.module.css"

const CategoryCard = ({title, icon}) =>{
    return(
        <div className={styles.categoryCard} >
            <img src={`${icon}`}/>
            <h4>{title}</h4>
        </div>
    )
}



export default CategoryCard