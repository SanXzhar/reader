import axios from "axios";
import { useState } from "react";
import { useAuthStore } from "./stores/auth.js"

const Login = () => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const {setToken} = useAuthStore();
    async function Log(e) {
		e.preventDefault()
		try {
		const res =	await axios.post("http://localhost:5000/auth/login", {
			    username, password
			}) 
            setToken(res.data.token)
		} catch (error) {
			console.error(error)
		}
	}
    return(
        <form onSubmit={Log}>
            <h1>Logiin</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;