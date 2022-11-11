import { SERVICE_URL } from 'config';
import api from '../api';

const notificationData = [
  {
    id: 1,
    img: '/img/profile/profile-1.webp',
    title: 'profile-1',
    detail: 'Joisse Kaycee just sent a new comment!',
    link: '#/',
  },
  {
    id: 2,
    img: '/img/profile/profile-2.webp',
    title: 'profile-2',
    detail: 'New order received! It is total $147,20.',
    link: '#/',
  },
  {
    id: 3,
    img: '/img/profile/profile-3.webp',
    title: 'profile-3',
    detail: '3 items just added to wish list by a user!',
    link: '#/',
  },
  {
    id: 6,
    img: '/img/profile/profile-6.webp',
    title: 'profile-6',
    detail: 'Kirby Peters just sent a new message!',
    link: '#/',
  },
];
api.onGet(`${SERVICE_URL}/notifications`).reply(200, notificationData);
