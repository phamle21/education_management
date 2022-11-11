import { createSlice } from '@reduxjs/toolkit';
import { SERVICE_URL } from 'config.js';
import axios from 'axios';

const initialState = {
  tasks: [],
  loading: false,
  showSettings: { deleted: false, status: 'All', tags: 'All' },
  selectedTask: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    receiveService(state, action) {
      const { tasks, loading } = action.payload;
      state.tasks = tasks;
      state.loading = loading;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setShowSettings(state, action) {
      state.showSettings = action.payload;
    },
    setSelectedTask(state, action) {
      state.selectedTask = action.payload;
    },
  },
});
const { setLoading, receiveService } = tasksSlice.actions;

export const { setSelectedTask, setShowSettings } = tasksSlice.actions;

export const getTasks = () => async (dispatch) => {
  dispatch(setLoading(true));
  const response = await axios.get(`${SERVICE_URL}/apps/tasks`);
  const tasks = response.data;
  dispatch(receiveService({ tasks, loading: false }));
};

export const createTask =
  ({ item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    console.log('...create...item', item);

    const response = await axios.post(`${SERVICE_URL}/apps/tasks`, { item });
    const tasks = response.data;
    dispatch(receiveService({ tasks, loading: false }));
  };

export const updateTask =
  ({ item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.put(`${SERVICE_URL}/apps/tasks`, { item });
    const tasks = response.data;
    dispatch(receiveService({ tasks, loading: false }));
  };
export const deleteTask =
  ({ id }) =>
  async (dispatch) => {
    const response = await axios.delete(`${SERVICE_URL}/apps/tasks`, { id });
    const tasks = response.data;
    dispatch(receiveService({ tasks, loading: false }));
  };

const tasksReducer = tasksSlice.reducer;

export default tasksReducer;
