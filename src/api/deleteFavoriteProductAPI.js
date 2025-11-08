import axios from "axios"

export const deleteFavoriteProductAPI = async (id) => {
    try {
        const response = await axios.delete(`https://690a0db01a446bb9cc21295a.mockapi.io/Favorite/${id}`)
        return response.data
    } catch (error) {
        console.log("Помилка:",error)
    }
}