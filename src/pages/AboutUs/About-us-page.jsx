import { Topic } from "./Topic/Topic";
import { ShowRoom } from "./Show-room/Show-room";
import { About } from "../../components/About/About";
import { Advantages } from "../../components/Advantages/Advantages";
import { LastReviews } from "../../components/LastReviews/LastReviews";

export const AboutUsPage = () => {
  return (
    <>
      <header></header>
      <main>
        <Topic />
        <About />
        <LastReviews />
        <ShowRoom />
        <Advantages />
      </main>
      <footer></footer>
    </>
  );
};
