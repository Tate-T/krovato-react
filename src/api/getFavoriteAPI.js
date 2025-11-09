import axios from "axios"

export const getFavortieAPI = async () =>{
    try {
        const response = await axios.get("https://690a0db01a446bb9cc21295a.mockapi.io/Favorite")
        return response.data
    } catch (error) {
        console.error("помилка:",error)
    }
}