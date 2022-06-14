const fs = require('fs/promises')
const path = require('path')


const contactsPath = path.join(__dirname, 'contacts.json')

const listContacts = async () => {
  const data = await fs.readFile(contactsPath)
  return JSON.parse(data)
}

const getContactById = async (contactId) => {
  const contacts = await listContacts()
  const findedContact = contacts.find(contact => contact.id == contactId)
    if (!findedContact) {
      throw new Error(`Нету пользователя с id: ${contactId}`)
    }
    return findedContact
  }
  
  
const removeContact = async (id) => {
    const contacts = await listContacts()
    const newContactsList = contacts.filter(contact => contact.id !== id)
    await fs.writeFile(contactsPath, JSON.stringify(newContactsList))
}

const addContact = async (name, email, phone) => {
  const contacts = await listContacts()
  const newContact = {name, email, phone}
  contacts.push(newContact)
  fs.writeFile(contactsPath, JSON.stringify(contacts))
  return newContact
}

module.exports = {listContacts, getContactById, removeContact , addContact}