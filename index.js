const contactsApi = require('./db/contactsApi')
const yargs = require('yargs')
const {hideBin} = require('yargs/helpers')

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch(action) { 
    case 'list': {
        await contactsApi.listContacts().then(console.log)
      break;
    }

    case 'get': {
      await contactsApi.getContactById(id).then(console.log)
      break;
    }

    case 'add': {
      const newContact = {name, email, phone}
        await contactsApi.addContact(...newContact).then(console.log)
      break;
    }

    case 'remove': {
      await contactsApi.removeContact(id).then(console.log)
      break;
    }

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

const arr = hideBin(process.argv)
const {argv} = yargs(arr);
invokeAction(argv)
