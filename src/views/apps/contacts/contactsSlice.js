import { createSlice } from '@reduxjs/toolkit';
import { SERVICE_URL } from 'config.js';
import axios from 'axios';

const initialState = {
  contacts: [],
  pageCount: 0,
  pageIndex: 0,
  loading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    receiveService(state, action) {
      const { contacts, pageCount, loading } = action.payload;
      state.contacts = contacts;
      state.pageCount = pageCount;
      state.loading = loading;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});
const { setLoading, receiveService } = contactsSlice.actions;

export const getContacts =
  ({ term, sortBy, pageSize, pageIndex }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.get(`${SERVICE_URL}/apps/contacts`, { params: { term, sortBy, pageSize, pageIndex } });
    const { items: contacts, pageCount } = response.data;
    dispatch(receiveService({ contacts, pageCount, loading: false, pageIndex }));
  };

export const createContact =
  ({ sortBy, pageSize, pageIndex, item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.post(`${SERVICE_URL}/apps/contacts`, { sortBy, pageSize, pageIndex, item });
    const { items: contacts, pageCount } = response.data;
    dispatch(receiveService({ contacts, pageCount, loading: false, pageIndex }));
  };

export const updateContact =
  ({ sortBy, pageSize, pageIndex, item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.put(`${SERVICE_URL}/apps/contacts`, { sortBy, pageSize, pageIndex, item });
    const { items: contacts, pageCount } = response.data;
    dispatch(receiveService({ contacts, pageCount, loading: false, pageIndex }));
  };
export const deleteContact =
  ({ sortBy, pageSize, pageIndex, ids }) =>
  async (dispatch) => {
    const response = await axios.delete(`${SERVICE_URL}/apps/contacts`, { sortBy, pageSize, pageIndex, ids });
    const { items: contacts, pageCount } = response.data;
    dispatch(receiveService({ contacts, pageCount, loading: false, pageIndex }));
  };

const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
