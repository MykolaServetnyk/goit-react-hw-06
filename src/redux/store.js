// import { createStore } from "redux";

// const initialContacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];


// export const addContact = (contact) => {
//     const { id, name, number } = contact;
//     return {
//         type: 'initialContacts/addContact',
//         payload: {
//             id, name, number
//         }
//     }
// }

// export const deleteContact = (id) => {
//     return {
//         type: 'initialContacts/deleteContact',
//         payload: {
//             id
//         }
//     }
// }


// export const filterContacts = (name) => {
//     return {
//         type: 'initialContacts/filterContacts',
//         payload: name
//     }
// };

// const initialState = {
//     initialContacts,
//     filter: ''
// };
// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'initialContacts/addContact':
//             return {
//                 ...state,
//                 initialContacts: [...state.initialContacts, action.payload]
//             };
//         case 'initialContacts/deleteContact':
//             return {
//                 ...state,
//                 initialContacts: state.initialContacts.filter(contact => contact.id !== action.payload.id)
//             };
//         case 'initialContacts/filterContacts':
//             const filteredContacts = state.initialContacts.filter(contact =>
//                 contact.name.toLowerCase().includes(action.payload.toLowerCase())
//             );
//             return {
//                 ...state,
//                 filter: action.payload,
//                 filteredContacts: filteredContacts
//             };
//         default:
//             return state;
//     }
// }

// export const store = createStore(rootReducer);
// console.log(store.getState());
// store.js
// store.js
import { createStore } from "redux";

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ],
    filter: ''
};

export const actionTypes = {
    ADD_CONTACT: 'ADD_CONTACT',
    DELETE_CONTACT: 'DELETE_CONTACT',
    FILTER_CONTACTS: 'FILTER_CONTACTS'
};

export const addContact = (contact) => ({
    type: actionTypes.ADD_CONTACT,
    payload: contact
});

export const deleteContact = (id) => ({
    type: actionTypes.DELETE_CONTACT,
    payload: id
});

export const filterContacts = (name) => ({
    type: actionTypes.FILTER_CONTACTS,
    payload: name
});

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case actionTypes.DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case actionTypes.FILTER_CONTACTS:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};

export const store = createStore(rootReducer);
