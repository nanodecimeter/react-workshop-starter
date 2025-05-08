import { DEFAULT_IMAGE } from "../util/image-utils";

/* eslint-disable react/prop-types */
/**
 * The main application area; displays detailed info about a single contact.
 */
export default function ContactDisplay() {
  return (
    <section className="contact-display">
      <img src={DEFAULT_IMAGE} alt={`Portrait`} />
      <h1>Contact Name</h1>
      <h3>555-1234</h3>
      <p>Fun Fact: This is dummy data.</p>
    </section>
  );
}
