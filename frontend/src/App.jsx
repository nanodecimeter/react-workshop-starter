import ContactDisplay from "./components/ContactDisplay";

export default function App() {
  return (
    <>
      {/* TODO Add sidebar here */}

      <main className="main-area">
        {/* TODO Contact display goes here */}
        <ContactDisplay />


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
