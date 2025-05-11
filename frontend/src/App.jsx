
import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import {INITIAL_CONTACTS} from "./data/initial-contacts";
import { useState } from "react";

export default function App() {

 const [selectedContact, setSelectedContact] = useState(INITIAL_CONTACTS[0]);

  console.log("Selected contact: ", selectedContact);

   function handleContactClicked(contact) {
    setSelectedContact(contact);
  }

  return (
    <>
      {/* TODO Add sidebar here */}
      <Sidebar contacts={INITIAL_CONTACTS} onContactClicked={handleContactClicked} selectedContact={selectedContact}/>

      <main className="main-area">
        {/* TODO Contact display goes here */}
        <ContactDisplay/>


        {/* TODO Edit / Delete buttons section goes here */}
        <section style = {{display: "flex", gap: "1rem"}}>
          <button className="button"> Edit </button>
          <button className="button red"> Delete </button>
        </section>
      </main>

      {/* TODO Modal for adding new contacts */}

      {/* TODO Modal for editing existing contacts */}
    </>
  );
}
