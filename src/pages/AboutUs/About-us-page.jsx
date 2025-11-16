import { Topic } from "./Topic/Topic";
import { ShowRoom } from "./Show-room/Show-room";
import { Benefits } from "./Benefits/Benefits";
import { Advantages } from "../../components/Advantages/Advantages";
import { LastReviews } from "../../components/LastReviews/LastReviews";

export const AboutUsPage = () => {
  return (
    <>
        <Topic />
        <Benefits />
        {/* <LastReviews /> */}
        <ShowRoom />
        <Advantages />
    </>
  );
};
