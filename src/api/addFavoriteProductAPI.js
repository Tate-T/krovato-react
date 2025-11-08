import axios from "axios"

export const addFavoriteProductAPI = async ({title,alt,size,inStock,price,imageSrc,oldPrice}) => {

    try {
        const response = await axios.post("https://690a0db01a446bb9cc21295a.mockapi.io/Favorite",{title,alt,size,inStock,price,imageSrc,oldPrice})
        return response.data
    } catch (error) {
        console.error("Помилка:",error)
    }
}