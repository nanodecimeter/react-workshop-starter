import { useState } from "react";
import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import EditContactModal from "./components/EditContactModal";
import { useContacts } from "./context/ContactsContextProvider";

export default function App() {
  const [isEditContactVisible, setEditContactVisible] = useState(false);
  const { selectedContact, deleteContact } = useContacts();

  return (
    <>
      {/* Sidebar (nav) */}
      <Sidebar />

      <main className="main-area">
        {/* TODO Contact display goes here */}
        <ContactDisplay />

        {/* Buttons for editing / deleting selected contact */}
        <section style={{ display: "flex", gap: "1rem" }}>
          <button className="button" onClick={() => setEditContactVisible(true)}>
            Edit
          </button>
          <button className="button red" onClick={() => deleteContact(selectedContact._id)}>
            Delete
          </button>
        </section>
      </main>

      {/* TODO Modal for adding new contacts */}

      {/* Modal for editing existing contacts */}
      <EditContactModal
        visible={isEditContactVisible}
        onClose={() => setEditContactVisible(false)}
      />
    </>
  );
}
