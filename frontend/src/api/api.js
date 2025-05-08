const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Sends a GET request to the server to get all contacts.
 *
 * @returns a promise which will resolve to an array of all contact info on the server.
 */
export async function retrieveContacts() {
  const response = await fetch(BASE_URL);
  return await response.json();
}
