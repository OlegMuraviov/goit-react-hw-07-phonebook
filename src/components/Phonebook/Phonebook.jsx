import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getFilteredContacts,
} from 'redux/contacts/contactsSelector';
import actionCreators from 'redux/contacts/contactsActions';

import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

const Phonebook = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const addContact = ({ name, number }) => {
    const searchedName = name.toLowerCase();

    if (contacts.some(element => element.name.toLowerCase() === searchedName)) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(actionCreators.addContact({ name, number }));
  };

  const removeContact = id => {
    dispatch(actionCreators.removeContact(id));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Form onSubmit={addContact} />
      <h3>Contacts</h3>
      <Filter />
      <ContactsList
        filteredContacts={filteredContacts}
        removeContact={removeContact}
      />
    </div>
  );
};

export default Phonebook;
