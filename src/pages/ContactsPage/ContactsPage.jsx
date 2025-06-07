import { Contacts } from "./Contacts/Contacts";
import { Route } from "./Route/Route";
import { Writeus } from "./Writeus/Writeus";
import { Advantages } from "../../components/Advantages/Advantages";
import { LastReviews } from "../../components/LastReviews/LastReviews";

export const ContactsPage = () => {
  return (
    <>
      <header></header>
      <main>
        <Contacts />
        <Route />
        <Writeus />
        <Advantages />
        <LastReviews />
      </main>
      <footer></footer>
    </>
  );
};
