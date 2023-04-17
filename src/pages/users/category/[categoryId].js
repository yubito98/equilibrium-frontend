import Header from "@/components/Header"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { getCategory } from './functions' 
import axios from "axios"

const categoryDashboard = () =>{

    const {query: {categoryId}} = useRouter();
    const [category, setCategory] = useState({});


    useEffect(()=>{
        if(categoryId){
            getCategory(categoryId, setCategory)
        }
    },[categoryId])

    return(
        <>
            <Header/>
            <section>
                <div className="container" >
                    {category != null ? (
                        <div>
                            <h1>categoría: {category.name}</h1>
                            <h3>Meta principal: {category.mainGoal}</h3>
                        </div>
                    ): "There is no data"}
                </div>
            </section>
            
        </>
    )
}


export default categoryDashboard