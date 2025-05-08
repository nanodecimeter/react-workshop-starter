import { useState } from "react";
import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { INITIAL_CONTACTS } from "./data/initial-contacts";

export default function App() {
  const [selectedContact, setSelectedContact] = useState(INITIAL_CONTACTS[0]);

  function handleContactClicked(contact) {
    setSelectedContact(contact);
  }

  return (
    <>
      {/* Sidebar (nav) */}
      <Sidebar
        contacts={INITIAL_CONTACTS}
        onContactClicked={handleContactClicked}
        selectedContact={selectedContact}
      />

      <main className="main-area">
        {/* TODO Contact display goes here */}
        <ContactDisplay selectedContact={selectedContact} />

        {/* Buttons for editing / deleting selected contact */}
        <section style={{ display: "flex", gap: "1rem" }}>
          <button className="button">Edit</button>
          <button className="button red">Delete</button>
        </section>
      </main>

      {/* TODO Modal for adding new contacts */}

      {/* TODO Modal for editing existing contacts */}
    </>
  );
}
