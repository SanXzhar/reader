import axios from "axios"
import { useState } from "react"

const Resigter = () => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    async function Reg(e) {
		e.preventDefault()
		try {
			await axios.post("http://localhost:5000/auth/registration", {
			    username, password
			})
		} catch (error) {
			console.error(error)
		}
	}
    return(
        <form onSubmit = {Reg}>
            <h1>Resigter</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    )
}

export default Resigter;