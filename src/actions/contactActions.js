import { 
    GET_CONTACTS, 
    DELETE_CONTACT, 
    ADD_CONTACT, 
    GET_CONTACT, 
    UPDATE_CONTACT } from './types';

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
export const getContact = (id) => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: GET_CONTACT,
        payload: res.data
    });
};

// ACTION CREATOR 3
export const deleteContact = id => async dispatch => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch ({
            type: DELETE_CONTACT,
            payload: id
        });      
    } catch (e) {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    }
};

// ACTION CREATOR 4
export const addContact = contact => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', contact);
    dispatch ({
        type: ADD_CONTACT,
        payload: res.data
    });
};

// ACTION CREATOR 5
export const updateContact = contact => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact);
    dispatch ({
        type: UPDATE_CONTACT,
        payload: res.data
    });
};
