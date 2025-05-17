import Header from "../../components/Header/Header";
import { Topic } from "./Topic/Topic";
import { ShowRoom } from "./Show-room/Show-room";
import { Benefits } from "./Benefits/Benefits";
import { Advantages } from "../../components/Advantages/Advantages";
import { LastReviews } from "../../components/LastReviews/LastReviews";
import { Footer } from "../../components/Footer/Footer";

export const AboutUsPage = () => {
  return (
    <>
        <Header />
        <Topic />
        <Benefits />
        {/* <LastReviews /> */}
        <ShowRoom />
        <Advantages />
        <Footer />

    </>
  );
};
