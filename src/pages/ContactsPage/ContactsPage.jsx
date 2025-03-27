import { Contacts } from "./Contacts/Contacts";
import { Route } from "./Route/Route";
import { Writeus } from "./Writeus/Writeus";

export const ContactsPage = () => {
  return (
    <>
      <header></header>
      <main>
        <Contacts />
        <Route />
        <Writeus />
      </main>
      <footer></footer>
    </>
  );
};
