import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';

// ACTION CREATOR 1
export const getContacts = () => {
    return {
        type: GET_CONTACTS
    };
};

// ACTION CREATOR 2
export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    };
};

// ACTION CREATOR 3
export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact
    };
};
