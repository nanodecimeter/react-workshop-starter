import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { INITIAL_CONTACTS } from "./data/initial-contacts";

export default function App() {
  return (
    <>
      {/* Sidebar (nav) */}
      <Sidebar contacts={INITIAL_CONTACTS} />

      <main className="main-area">
        {/* TODO Contact display goes here */}
        <ContactDisplay selectedContact={INITIAL_CONTACTS[0]} />

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
