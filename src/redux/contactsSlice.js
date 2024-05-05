import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlise = createSlice({
    name: "contacts",
    initialState: {
        items: [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ],
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        name: text.name,
                        number: text.phone,
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.items.findIndex((contact) => contact.id === action.payload);
            state.items.splice(index, 1);
        },
    },
});

export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
export const getContacts = (state) => state.contacts;