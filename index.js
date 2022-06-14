const {listContacts, getContactById, removeContact , addContact} = require('./contacts.js')
const argv = require('yargs').argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        const contacts = listContacts()
        console.log(contacts)
      break;

    case 'get':
      const contact = getContactById(id)
      console.log(contact)
      break;

    case 'add':
      const newContact = {name, email, phone}
      addContact(...newContact)
      break;

    case 'remove':
        removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
