import { DEFAULT_IMAGE } from "./util/image-utils";

export default function App() {
  return (
    <>
      {/* TODO Add sidebar here */}

      <main className="main-area">
        {/* TODO Contact display goes here */}
        <section className="contact-display">
          <img src = {DEFAULT_IMAGE}/>
          <h1>Contanct name goes here</h1>
          <h3>555-1234</h3>
          <p>Fun Fact: This is some dummy data</p>
        </section>


        {/* TODO Edit / Delete buttons section goes here */}
      </main>

      {/* TODO Modal for adding new contacts */}

      {/* TODO Modal for editing existing contacts */}
    </>
  );
}
