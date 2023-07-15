import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const contactPath = path.resolve("models", "contacts.json");

export const listContacts = async () => {
  const buffer = await fs.readFile(contactPath);
  return JSON.parse(buffer);
};

export const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const foundContact = contacts.find((contact) => contact.id === contactId);
  return foundContact || null;
};

export const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex((contact) => contact.id === contactId);
  if (contactIndex === -1) {
    return null;
  }
  const [deletedContact] = contacts.splice(contactIndex, 1);
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return deletedContact;
};

export const addContact = async ({ name, email, phone }) => {
  const newContact = { id: nanoid(), name, email, phone };
  const contacts = await listContacts();
  contacts.push(newContact);
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

export const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex((contact) => contact.id === contactId);
  if (contactIndex === -1) {
    return null;
  }
  contacts[contactIndex] = body;
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return contacts[contactIndex];
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
