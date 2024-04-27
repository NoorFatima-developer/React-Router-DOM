// import { createContext } from "react";

import { useLoaderData, useNavigation } from "react-router-dom"

// export const data = createContext("noor");


export const Start = ()=> {
    
            const dogarl = useLoaderData()
            const navigation = useNavigation()

            if(navigation.state === "loading"){
                return(
                    <>
                        <h1>Loading...</h1>
                    </>
                )
            }
            return(
            <div>
            {""}
                <img src={dogarl} />{""}
            </div>
            );
    
}

export const dataLoader = async () => {
    const res = await fetch("https://random.dog/woof.json")
    const dog = await res.json();

    return dog.url;
}