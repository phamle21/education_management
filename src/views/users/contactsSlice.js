import { createSlice } from '@reduxjs/toolkit';
import { SERVICE_URL } from 'config.js';
import axios from 'axios';
import apiBase from 'app/axios/apiBase';
import Swal from 'sweetalert2';
import { useIntl } from 'react-intl';

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

      // const response = await axios.get(`${SERVICE_URL}/apps/contacts`, { params: { term, sortBy, pageSize, pageIndex } });

      const response = await apiBase.get(`/users`, { params: { term, sortBy, pageSize, pageIndex, type: "All" } });

      const { items: contacts, pageCount } = response.data;
      dispatch(receiveService({ contacts, pageCount, loading: false, pageIndex }));
    };

export const createContact =
  ({ sortBy, pageSize, pageIndex, item }) =>
    async (dispatch) => {
      dispatch(setLoading(true));
      // const response = await axios.post(`${SERVICE_URL}/apps/contacts`, { sortBy, pageSize, pageIndex, item });
      const response = await apiBase.post(`/users`, { sortBy, pageSize, pageIndex, item });

      if (response.data.status === 'success') {
        Swal.fire({
          title: 'Success',
          icon: 'success',
        })
      } else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
        })
      }

      const { items: contacts, pageCount } = response.data;
      dispatch(receiveService({ contacts, pageCount, loading: false, pageIndex }));
    };

export const updateContact =
  ({ sortBy, pageSize, pageIndex, item }) =>
    async (dispatch) => {
      dispatch(setLoading(true));

      // const response = await axios.put(`${SERVICE_URL}/apps/contacts`, { sortBy, pageSize, pageIndex, item });
      const response = await apiBase.patch(`/users/${item.id}`, { sortBy, pageSize, pageIndex, item });

      if (response.data.status === 'success') {
        Swal.fire({
          title: 'Success',
          icon: 'success',
        })
      } else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
        })
      }

      const { items: contacts, pageCount } = response.data;
      dispatch(receiveService({ contacts, pageCount, loading: false, pageIndex }));
    };
export const deleteContact =
  ({ sortBy, pageSize, pageIndex, ids, mess }) =>
    async (dispatch) => {
      dispatch(setLoading(true));

      // const response = await axios.delete(`${SERVICE_URL}/apps/contacts`, { sortBy, pageSize, pageIndex, ids });
      const response = await apiBase.post(`/users/delete-list`, { sortBy, pageSize, pageIndex, ids });

      if (response.data.status === 'success') {
        Swal.fire({
          title: 'Success',
          icon: 'success',
        })
      } else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
        })
      }

      const { items: contacts, pageCount } = response.data;
      dispatch(receiveService({ contacts, pageCount, loading: false, pageIndex }));
    };

const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
