import { SERVICE_URL } from 'config';
import api from '../api';

let chatData = [
  {
    id: 1,
    name: 'Blaine Cottrell',
    thumb: '/img/profile/profile-4.webp',
    last: 'Today 10:40',
    status: 'Online',
    unread: 0,
    messages: [
      {
        text: 'Hello there!',
        time: '17:20',
        type: 'response',
        attachments: [],
      },
      {
        text: 'How is it going?',
        time: '17:20',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Here is the images you have asked for.',
        time: '17:21',
        type: 'response',
        attachments: [],
      },
      {
        text: '',
        time: '17:21',
        type: 'response',
        attachments: ['/img/product/large/product-1.webp', '/img/product/large/product-2.webp'],
      },
      {
        text: 'Carrot cake pie sweet roll cake. Danish apple pie danish muffin marzipan carrot cake. Danish pastry wafer halvah brownie muffin cookie cookie. Dessert sweet chocolate fruitcake. Toffee candy cake. Pie gummies dessert oat cake sweet roll powder jelly pastry chocolate cake. Gummi bears cake icing gummies marzipan croissant lemon drops soufflé.',
        time: '17:22',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Fruitcake chupa chups gingerbread sweet roll pie. Tootsie roll sweet roll pudding. Pastry liquorice wafer sweet.',
        time: '17:23',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Toffee croissant icing toffee. Sweet roll chupa chups marshmallow.',
        time: '19:10',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Chocolate cake lollipop dessert.',
        time: '19:11',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Tootsie roll sweet roll pudding.',
        time: '19:13',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Danish pastry wafer halvah brownie muffin cookie cookie.',
        time: '19:15',
        type: 'response',
        attachments: [],
      },
      {
        text: '',
        time: '19:15',
        type: 'message',
        attachments: ['/img/product/large/product-3.webp'],
      },
      {
        text: 'Oat cake gummies cheesecake cake biscuit jelly beans. Muffin cheesecake sesame snaps.',
        time: '19:35',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Thanks for the help!',
        time: '21:22',
        type: 'response',
        attachments: [],
      },
      {
        text: 'And I see you soon!',
        time: '21:22',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Bye',
        time: '21:22',
        type: 'response',
        attachments: [],
      },
    ],
  },
  {
    id: 2,
    name: 'Cherish Kerr',
    thumb: '/img/profile/profile-2.webp',
    last: 'Today 15:20',
    status: 'Offline',
    unread: 2,
    messages: [
      {
        text: 'Hi!',
        time: '19:20',
        type: 'response',
        attachments: [],
      },
      {
        text: 'I was planning on making some kind of vegetable.',
        time: '19:21',
        type: 'response',
        attachments: [],
      },
      {
        text: "I don't know what should make but I wouldn't mind eating some corn and potatoes.",
        time: '19:21',
        type: 'response',
        attachments: [],
      },
      {
        text: "If you don't want vegetable then just make yourself a peanut butter and jelly sandwich.",
        time: '19:22',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Pastry sweet roll carrot cakecake macaroon gingerbread cookie.',
        time: '21:10',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Jujubes candy jelly-o topping lemon drops.',
        time: '21:10',
        type: 'message',
        attachments: [],
      },
      {
        text: '???',
        time: '19:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'That makes no sense!',
        time: '19:21',
        type: 'response',
        attachments: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Kirby Peters',
    thumb: '/img/profile/profile-3.webp',
    last: 'Yesterday 12:20',
    status: 'Online',
    unread: 0,
    messages: [
      {
        text: 'Did you hear the good news?',
        time: '12:20',
        type: 'response',
        attachments: [],
      },
      {
        text: "No, I haven't.",
        time: '12:20',
        type: 'message',
        attachments: [],
      },
      {
        text: 'I got a promotion at my job.',
        time: '12:20',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Did you really?',
        time: '12:21',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Seriously, I am so excited.',
        time: '12:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Well, congratulations.',
        time: '12:21',
        type: 'message',
        attachments: [],
      },
      {
        text: "I'm so happy for you.",
        time: '12:22',
        type: 'message',
        attachments: [],
      },
      {
        text: 'You really deserved this.',
        time: '12:22',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Thank you very much.',
        time: '12:22',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Here is some bread images totally not related to the subject at all!',
        time: '21:46',
        type: 'response',
        attachments: [],
      },
      {
        text: '',
        time: '21:46',
        type: 'response',
        attachments: ['/img/product/large/product-4.webp', '/img/product/large/product-5.webp'],
      },
    ],
  },
  {
    id: 4,
    name: 'Zayn Hartley',
    thumb: '/img/profile/profile-4.webp',
    last: 'Yesterday 12:20',
    status: 'Online',
    unread: 0,
    messages: [],
  },
  {
    id: 5,
    name: 'Luna Wigglebutt',
    thumb: '/img/profile/profile-5.webp',
    last: 'Yesterday 12:20',
    status: 'Offline',
    unread: 0,
    messages: [
      {
        text: 'I really need to start eating healthier.',
        time: '21:45',
        type: 'response',
        attachments: [],
      },
      {
        text: 'What kind of food do you usually eat?',
        time: '21:45',
        type: 'response',
        attachments: [],
      },
      {
        text: 'I try my best to eat only fruits, vegetables, and chicken.',
        time: '21:45',
        type: 'message',
        attachments: [],
      },
      {
        text: "That's basically it.",
        time: '21:45',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Actually, fruits and veggies are really good for you.',
        time: '21:46',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Yes, I know, but what about the chicken?',
        time: '21:46',
        type: 'response',
        attachments: [],
      },
      {
        text: "I mainly eat baked chicken, because there's not a lot of fat.",
        time: '21:46',
        type: 'message',
        attachments: [],
      },
      {
        text: 'That does sound pretty good.',
        time: '21:46',
        type: 'response',
        attachments: [],
      },
    ],
  },
  {
    id: 6,
    name: 'Kathryn Mengel',
    thumb: '/img/profile/profile-6.webp',
    last: 'Tuesday 12:20',
    status: 'Offline',
    unread: 0,
    messages: [
      {
        text: 'Hi!',
        time: '05:20',
        type: 'message',
        attachments: [],
      },
      {
        text: "This Friday, I'm throwing a party.",
        time: '05:21',
        type: 'message',
        attachments: [],
      },
      {
        text: "Oh really? I didn't know that.",
        time: '05:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Are you serious?',
        time: '05:21',
        type: 'message',
        attachments: [],
      },
      {
        text: "I haven't heard anything about it.",
        time: '05:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'What time does it start?',
        time: '05:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'The party starts at 8.',
        time: '05:21',
        type: 'message',
        attachments: [],
      },
      {
        text: "Yeah, I think I'll go.",
        time: '05:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'See you there!',
        time: '05:21',
        type: 'response',
        attachments: [],
      },
    ],
  },
  {
    id: 7,
    name: 'Daisy Hartley',
    thumb: '/img/profile/profile-7.webp',
    last: 'Tuesday 10:20',
    status: 'Offline',
    unread: 0,
    messages: [],
  },
  {
    id: 8,
    name: 'Alicia Shannah',
    thumb: '/img/profile/profile-8.webp',
    last: 'Monday 15:50',
    status: 'Offline',
    unread: 0,
    messages: [],
  },
  {
    id: 9,
    name: 'Gresham Jeanette',
    thumb: '/img/profile/profile-9.webp',
    last: 'Monday 04:45',
    status: 'Offline',
    unread: 0,
    messages: [],
  },
  {
    id: 10,
    name: 'Mickey Fianna',
    thumb: '/img/profile/profile-10.webp',
    last: 'Monday 02:00',
    status: 'Offline',
    unread: 0,
    messages: [],
  },
];

api.onGet(`${SERVICE_URL}/apps/chat`).reply(200, chatData);
api.onPut(`${SERVICE_URL}/apps/chat/addText`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { id, text } = requestData;
  const date = new Date();
  const selectedChat = chatData.find((x) => x.id === id);
  selectedChat.messages.push({
    text,
    time: `${date.getHours()}:${date.getMinutes()}`,
    type: 'message',
    attachments: [],
  });
  // Add item
  chatData = [selectedChat, ...chatData.filter((x) => x.id !== id)];
  return [200, chatData];
});
api.onPut(`${SERVICE_URL}/apps/chat/addAttachments`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { id, attachments } = requestData;
  const date = new Date();
  const selectedChat = chatData.find((x) => x.id === id);
  selectedChat.messages.push({
    text: '',
    time: `${date.getHours()}:${date.getMinutes()}`,
    type: 'message',
    attachments,
  });
  // Add item
  chatData = [selectedChat, ...chatData.filter((x) => x.id !== id)];
  return [200, chatData];
});
api.onPut(`${SERVICE_URL}/apps/chat/read`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { id } = requestData;
  const selectedChat = { ...chatData.find((x) => x.id === id), unread: 0 };

  // Add item
  chatData = chatData.map((chat) => {
    if (chat.id === id) {
      return selectedChat;
    }
    return chat;
  });
  return [200, chatData];
});
