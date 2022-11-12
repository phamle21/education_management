import { createSlice } from '@reduxjs/toolkit';
import { SERVICE_URL } from 'config.js';
import axios from 'axios';

const initialState = {
  events: [],
  selectedEvent: {},
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setEvents(state, action) {
      state.events = action.payload;
    },
    setSelectedEvent(state, action) {
      state.selectedEvent = action.payload;
    },
  },
});
const { setEvents } = calendarSlice.actions;
export const { setSelectedEvent } = calendarSlice.actions;

export const getEvents = (startStr, endStr) => async (dispatch) => {
  const response = await axios.get(`${SERVICE_URL}/apps/events`, { params: { startStr, endStr } });
  dispatch(setEvents(response.data));
};

export const createEvent = (item) => async (dispatch) => {
  const response = await axios.post(`${SERVICE_URL}/apps/events`, { item });
  dispatch(setEvents(response.data));
};

export const updateEvent = (item) => async (dispatch) => {
  const response = await axios.put(`${SERVICE_URL}/apps/events`, { item });
  dispatch(setEvents(response.data));
};
export const deleteEvent = (id) => async (dispatch) => {
  const response = await axios.delete(`${SERVICE_URL}/apps/events`, { id });
  dispatch(setEvents(response.data));
};

const calendarReducer = calendarSlice.reducer;

export default calendarReducer;
