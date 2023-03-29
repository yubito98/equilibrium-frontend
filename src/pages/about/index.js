import { useState, useEffect } from "react";
import Header from "@/components/Header";
import getData from "./getData";

const About = () =>{

    const [data, setData] = useState(null);

    useEffect(()=>{
        getData(setData)
    },[])


    
    return(
        <>
            <Header/>
            <h1>About Page</h1>
            {
                data != null ? (
                    data.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                ):("There is no info")
            }
        </>
    )
}


export default About;