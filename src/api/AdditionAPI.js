import axios from "axios"

export const AdditionAPI = async() =>{
    const response = await axios.get (`https://690a0db01a446bb9cc21295a.mockapi.io/Producyts?page=1&limit=4`)
    return response.data
}