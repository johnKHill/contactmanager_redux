import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';
import axios from 'axios';


// ACTION CREATOR 1
export const getContacts = () =>  async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
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
