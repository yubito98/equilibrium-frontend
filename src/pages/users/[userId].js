import Header from "@/components/Header";
import CategoryCard from "@/components/categoryCard";
import AddButton from "@/components/AddButton";
import { useRouter } from "next/router"
import { getCategories } from "./functions";
import { useState, useEffect } from "react";

const UserId = () => {

    const {query:{userId}} = useRouter();

    const [categories, setCategories] = useState(null);

    useEffect(()=>{
        getCategories(setCategories)
    },[])

    return(
        <>
            <Header/>
            <main className="container">
                <h1>Hola <span style={{color:"#f7d547"}}>{userId}</span>, gracias por usar Equilibrium</h1>
                <section className="card-container">
                    {
                        categories ? (
                            categories.map(item =>(
                                <CategoryCard
                                key={item.title}
                                title={item.title}
                                icon={item.image}
                                />
                            ))
                        ): "There is no data"
                    }
                    <AddButton/>
                </section>
            </main>
        </>
    )
}



export default UserId