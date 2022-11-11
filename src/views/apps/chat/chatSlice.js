import { createSlice } from '@reduxjs/toolkit';
import { SERVICE_URL } from 'config.js';
import axios from 'axios';

const initialState = {
  items: [],
  loading: false,
  selectedChat: null,
  currentMode: 'chat', // chat - call
  selectedTab: 'messages',
  currentCall: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    receiveService(state, action) {
      const { items, loading } = action.payload;
      state.items = items;
      state.loading = loading;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    chatSetSelectedTab(state, action) {
      state.selectedTab = action.payload;
    },
    chatSetSelectedChat(state, action) {
      if (action.payload && action.payload.messages && action.payload.messages.length > 0) {
        state.selectedTab = 'messages';
      }
      state.selectedChat = action.payload;
    },
    chatSetCurrentCall(state, action) {
      state.currentCall = action.payload;
    },
    chatChangeMode(state, action) {
      state.currentMode = action.payload;
    },
  },
});
const { setLoading, receiveService } = chatSlice.actions;

export const { chatChangeMode, chatSetSelectedChat, chatSetSelectedTab, chatSetCurrentCall } = chatSlice.actions;

export const getItems = () => async (dispatch, getState) => {
  const state = getState();
  dispatch(setLoading(true));
  const response = await axios.get(`${SERVICE_URL}/apps/chat`);
  const items = response.data;
  dispatch(receiveService({ items, loading: false }));
  if (state.chat.selectedChat === null) dispatch(chatSetSelectedChat(items.filter((x) => x.messages.length > 0)[0]));
};

export const addTextToChat =
  ({ chat, text }) =>
  async (dispatch) => {
    if (text !== '' && text.length > 0) {
      dispatch(setLoading(true));
      const response = await axios.put(`${SERVICE_URL}/apps/chat/addText`, { id: chat.id, text });
      const items = response.data;
      dispatch(receiveService({ items, loading: false }));
      dispatch(chatSetSelectedChat(items.filter((x) => x.id === chat.id)[0]));
    }
  };

export const addAttachmentsToChat =
  ({ chat, attachments }) =>
  async (dispatch) => {
    if (attachments !== null && attachments.length > 0) {
      dispatch(setLoading(true));
      const response = await axios.put(`${SERVICE_URL}/apps/chat/addAttachments`, { id: chat.id, attachments });
      const items = response.data;
      dispatch(receiveService({ items, loading: false }));
      dispatch(chatSetSelectedChat(items.filter((x) => x.id === chat.id)[0]));
    }
  };

export const selectChat =
  ({ chat }) =>
  async (dispatch) => {
    if (chat !== null) {
      dispatch(setLoading(true));
      const response = await axios.put(`${SERVICE_URL}/apps/chat/read`, { id: chat.id });
      const items = response.data;
      dispatch(receiveService({ items, loading: false }));
      dispatch(chatSetSelectedChat(items.filter((x) => x.id === chat.id)[0]));
    } else {
      dispatch(chatSetSelectedChat(null));
    }
  };

export const createChat =
  ({ item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));

    const response = await axios.post(`${SERVICE_URL}/apps/chat`, { item });
    const items = response.data;
    dispatch(receiveService({ items, loading: false }));
  };

export const updateChat =
  ({ item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.put(`${SERVICE_URL}/apps/chat`, { item });
    const items = response.data;
    dispatch(receiveService({ items, loading: false }));
  };

export const deleteChat =
  ({ ids }) =>
  async (dispatch) => {
    const response = await axios.delete(`${SERVICE_URL}/apps/chat`, { ids });
    const items = response.data;
    dispatch(receiveService({ items, loading: false }));
  };

const chatReducer = chatSlice.reducer;

export default chatReducer;
