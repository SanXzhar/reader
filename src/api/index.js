import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
})

export const login = (username, password) => {
    return api.post("/auth/login", {username, password})
}

export const register = (username, password) => {
    return api.post("/auth/registration", {username, password})
}