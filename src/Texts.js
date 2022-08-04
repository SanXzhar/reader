import axios from "axios";
import { useEffect } from "react";
import { useAuthStore } from "./stores/auth.js"

const Data = () => {
    const {token} = useAuthStore();
    async function FetchData (e) {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            const response = await axios("http://localhost:5000/auth/book", config);
            const data = response.data;
            data.map((mappedObject, index) => {
                return(
                <div style={{"height": "200px", "width": "400px", "backgroundColor": "800px" }} key={mappedObject.id}>
                    <p>{mappedObject.text}</p>
                    <p>{mappedObject.currentIndex}</p>
                    <p>{mappedObject.speed}</p>
                </div>
                )
            })
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }
    return(
        useEffect(() => {
            FetchData();
        })
    )
}


export default Data;
