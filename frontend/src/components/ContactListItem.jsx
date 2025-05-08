/* eslint-disable react/prop-types */
import clsx from "clsx";
import { getPhotoUrl } from "../util/image-utils";

/**
 * A card / link to appear on the sidebar. When clicked, will allow the user to view
 * detailed info about that contact.
 */
export default function ContactListItem() {
  return (
    <li className="contact-list-item">
      <img src="https://th.bing.com/th/id/OIP.PoS7waY4-VeqgNuBSxVUogAAAA?rs=1&pid=ImgDetMain" />
      My Contact
    </li>
  );
}
