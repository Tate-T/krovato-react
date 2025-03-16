import { Title } from "./Title";
import { Number } from "./Number";
import { Button } from "./Button";

export const Item = ({title, number, button}) => {
  return (
    <li className="categories__item">
      <Title text={title}/>
      <Number number={number}/>
      <Button {...button}/>
    </li>
  );
};
