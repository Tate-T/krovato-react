import { Component } from "react";
import style from "./Favorite.module.scss";
export class FavoriteItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const [onelink, twolink] = this.props.Favorite.image.srcSet.desktop.split(",");

    return (
      <li className={style.Item}>
        <img
          src={this.props.Favorite.image.src}
          alt={this.props.Favorite.image.alt}
          className={style.Item_image}
        />
        <h5>{this.props.Favorite.title}</h5>
        <p>{this.props.Favorite.price}</p>
      </li>
    );
  }
};