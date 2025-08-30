import { Contacts } from "./Contacts/Contacts";
import { Route } from "./Route/Route";
import { Writeus } from "./Writeus/Writeus";
import { Advantages } from "../../components/Advantages/Advantages";

export const ContactsPage = () => {
  return (
    <>
      <Contacts />
      <Route />
      <Writeus />
      <Advantages />
    </>
  );
};

export default ContactsPage