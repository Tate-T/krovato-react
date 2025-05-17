import { Component } from "react";
import style from "./Favorite.module.scss"
export class FavoriteItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const [onelink, twolink] = this.props.Favorite.image.srcSet.desktop.split(",")
    return (
      <li className={style.Item}>
            <img src={onelink} alt={this.props.Favorite.alt } className={style.Item_image}/> 
            <h5>`{this.props.Favorite.title.desktopTitle}`</h5>
            <p>{this.props.Favorite.price.currentPrice}</p>
      </li>
    );
  }
}
