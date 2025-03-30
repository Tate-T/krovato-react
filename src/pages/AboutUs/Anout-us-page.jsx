import { Topic } from "./Topic/Topic";
import { ShowRoom } from "./Show-room/Show-room";
import { About } from "../../components/About/About";

export const AboutUsPage = () => {
  return (
    <>
      <header></header>
      <main>
        <Topic />
        <ShowRoom />
        <About />
      </main>
      <footer></footer>
    </>
  );
};
