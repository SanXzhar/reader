import { createStore } from 'hox'
import { useLocalStorage } from "usehooks-ts" 

export const [useAuthStore, AuthStoreProvider] = createStore(() => {
  const [token, setToken] = useLocalStorage("token", null)

  return {
    token, 
    setToken
  }
})