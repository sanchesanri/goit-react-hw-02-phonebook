import React, { Component } from "react"

import { FormContact } from "./FormContact/FormContact";
import { ContactsList } from "./ContactsList/ContactsList";
import { ContactsFilter } from "./ContactsFilter/ContactsFilter";

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Her Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  }

  handleAddContact = (obj) => {
    if (this.isInContacts(obj)) {
      return alert(`${obj.name} is already in contacts`)
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj]
    })
    )
  }

  handlerFilterChange = (value) => {
    this.setState({ filter: value })
  }

  isInContacts = ({ name }) => {
    const { contacts } = this.state;

    return contacts.some(contact => contact.name === name)
  }

  handleDeleteContact = (contactId) => {
    this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== contactId) })
  }


  render() {
    const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));

    return (
      <div>
        My phone book
        <FormContact addContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <ContactsFilter dataContacts={this.state} handlerFilterChange={this.handlerFilterChange} />
        {this.state.contacts && <ContactsList
          options={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />}
      </div>
    )
  }
};
