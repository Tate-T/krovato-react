import axios from "axios"

export const addFavoriteProductAPI = async ({title,alt,width,height,length,inStock,price,imageSrc,oldPrice}) => {
    const size = {
        width: width,
        height: height,
        length: length
      }
    try {
        const response = await axios.post("https://690a0db01a446bb9cc21295a.mockapi.io/Favorite",{title,alt,size,inStock,price,imageSrc,oldPrice})
        return response.data
    } catch (error) {
        console.error("Помилка:",error)
    }
}