/**
 * Gets the photo URL of a contact.
 * If the contact has a photoUrl, it will be returned.
 * Otherwise, a default image URL will be returned.
 *
 * @param {{photoUrl: string}} contact the contact to check
 * @returns {string} the url of the contact's photo
 */
export function getPhotoUrl(contact) {
  if (contact?.photoUrl) {
    if (contact.photoUrl.startsWith("http")) return contact.photoUrl;
    return import.meta.env.VITE_IMAGE_BASE_URL + contact.photoUrl;
  }
  return "https://th.bing.com/th/id/OIP.PoS7waY4-VeqgNuBSxVUogAAAA?rs=1&pid=ImgDetMain";
}
