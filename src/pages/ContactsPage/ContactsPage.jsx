import { Contacts } from "./Contacts/Contacts";
import { Route } from "./Route/Route";
import { Writeus } from "./Writeus/Writeus";
import { Advantages } from "../../components/Advantages/Advantages";
import { LastReviews } from "../../components/LastReviews/LastReviews";

export const ContactsPage = () => {
  return (
    <>
      <Contacts />
      <Route />
      <Writeus />
      <Advantages />
      <LastReviews />
    </>
  );
};

export default ContactsPage