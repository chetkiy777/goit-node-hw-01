const fs = require('fs/promises')
const path = require('path')


const contactsPath = path.join(__dirname, '/db/contacts.json')
console.log(contactsPath);

function listContacts() {
  const data = fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  console.log(contacts);
  return contacts
}

function getContactById(contactId) {
  const contacts = listContacts()
  const findedContact = contacts.find(contact => contact.id === contactId)
  if (!findedContact) {
    throw new Error(`Не найдено контакт с таким ${contactId}`)
  }
  return findedContact
}

function removeContact(contactId) {
    const contacts = listContacts()
    const newContactsList = contacts.filter(contact => contact.id !== contactId)
    fs.writeFile(contactsPath, JSON.stringify(newContactsList))
}

function addContact(name, email, phone) {
  const contacts = listContacts()
  const newContact = {name, email, phone}
  contacts.push(newContact)
  fs.writeFile(contactsPath, JSON.stringify(contacts))
  return newContact
}

module.exports = {listContacts, getContactById, removeContact , addContact}