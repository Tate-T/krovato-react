import { Topic } from "./Topic/Topic";
import { ShowRoom } from "./Show-room/Show-room";
import { Benefits } from "./Benefits/Benefits";
import { Advantages } from "../../components/Advantages/Advantages";
import { LastReviews } from "../../components/LastReviews/LastReviews";

const AboutUsPage = () => {
  return (
    <>
        <Topic />
        <Benefits />
        <LastReviews />
        <ShowRoom />
        <Advantages />
    </>
  );
};

export default AboutUsPage