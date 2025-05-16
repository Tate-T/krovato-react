import { Component } from "react";
export class FavoriteItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
            <img src={this.props.Favorite.image.src} alt={this.props.Favorite.alt } /> {/**src стоїть тимчасово поки не будуть нормально зроблені посилання в srcSet */}
            <h3>`{this.props.Favorite.title.desktopTitle}`</h3>
            <p>{this.props.Favorite.price.currentPrice}</p>
      </li>
    );
  }
}
