import style from "./Favorite.module.scss";

const FavoriteItem=()=>{
  return(
    <li className={style.Item}>
    <img
      src={this.props.Favorite.image.src}
      alt={this.props.Favorite.image.alt}
      className={style.Item_image}
    />
    <h5>{this.props.Favorite.title}</h5>
    <p>{this.props.Favorite.price}</p>
  </li>
  ) 
}
export default FavoriteItem