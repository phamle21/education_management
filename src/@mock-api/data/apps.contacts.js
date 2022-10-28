import { SERVICE_URL } from 'config';
import api from '../api';

const contactsAppData = [
  {
    id: 1,
    name: 'Blaine Cottrell',
    position: 'Project Manager',
    email: 'me@blainecottrell.com',
    phone: '+6443884455',
    group: 'Work',
    thumb: '/img/profile/profile-1.webp',
  },
  {
    id: 2,
    name: 'Kirby Peters',
    position: 'Accounting',
    email: 'contact@kirbypeters.com',
    phone: '+643451134',
    group: 'Work',
    thumb: '/img/profile/profile-2.webp',
  },
  {
    id: 3,
    name: 'Olli Hawkins',
    position: 'Client Relations Lead',
    email: 'olli_hawkins@gmail.com',
    phone: '+648751212',
    group: 'Personal',
    thumb: '/img/profile/profile-3.webp',
  },
  {
    id: 4,
    name: 'Joisse Kaycee',
    position: 'UX Designer',
    email: 'joissekaycee@gmail.com',
    phone: '+649023571',
    group: 'Work',
    thumb: '/img/profile/profile-4.webp',
  },
  {
    id: 5,
    name: 'Zayn Hartley',
    position: 'Frontend Developer',
    email: 'zaynhartley@zaynhartley.com',
    phone: '+642359205',
    group: 'Personal',
    thumb: '/img/profile/profile-5.webp',
  },
  {
    id: 6,
    name: 'Esperanza Lodge',
    position: 'Project Manager',
    email: 'esperanzalodge@msn.com',
    phone: '+649332310',
    group: 'Work',
    thumb: '/img/profile/profile-6.webp',
  },
  {
    id: 7,
    name: 'Kathryn Mengel',
    position: 'Executive Team Leader',
    email: 'kathrynmengel@gmail.com',
    phone: '+644924420',
    group: 'Work',
    thumb: '/img/profile/profile-7.webp',
  },
  {
    id: 8,
    name: 'Cherish Kerr',
    position: 'Development Lead',
    email: 'me@cherish.com',
    phone: '+649371222',
    group: 'Personal',
    thumb: '/img/profile/profile-8.webp',
  },
  {
    id: 9,
    name: 'Winry Rockbell',
    position: 'Mechanics Lead',
    email: 'winry@winryrockbell.com',
    phone: '+643449073',
    group: 'Work',
    thumb: '/img/profile/profile-9.webp',
  },
  {
    id: 10,
    name: 'Elsie Pernilla',
    position: '3D Designer',
    email: 'elsie@elsiepernilla.com',
    phone: '+644429098',
    group: 'Personal',
    thumb: '/img/profile/profile-3.webp',
  },
  {
    id: 11,
    name: 'Gresham Jeanette',
    position: 'Project Manager',
    email: 'Gresham@Jeanette.com',
    phone: '+649073732',
    group: 'Work',
    thumb: '/img/profile/profile-8.webp',
  },
  {
    id: 12,
    name: 'Sixte Tera',
    position: 'UX Designer Lead',
    email: 'me@sixtetera.com',
    phone: '+641084211',
    group: 'Work',
    thumb: '/img/profile/profile-5.webp',
  },
  {
    id: 13,
    name: 'Alicia Shannah',
    position: 'Tester',
    email: 'aliciashannah@msn.com',
    phone: '+647843431',
    group: 'Work',
    thumb: '/img/profile/profile-7.webp',
  },
  {
    id: 14,
    name: 'Emilia Antoine',
    position: 'Tester',
    email: 'hi@emiliaantoine.com',
    phone: '+641294829',
    group: 'Personal',
    thumb: '/img/profile/profile-1.webp',
  },
  {
    id: 15,
    name: 'Mickey Fianna',
    position: 'Developer Intern',
    email: 'mickeyfianna@elsiepernilla.com',
    phone: '+649873209',
    group: 'Personal',
    thumb: '/img/profile/profile-9.webp',
  },
  {
    id: 16,
    name: 'Kathleen Bertha',
    position: 'Client Relations',
    email: 'kathleenbertha@outlook.com',
    phone: '+643452345',
    group: 'Work',
    thumb: '/img/profile/profile-4.webp',
  },
];
api.onGet(`${SERVICE_URL}/apps/contacts`).reply((config) => {
  const { term, sortBy, pageSize, pageIndex } = config.params;

  let dataList = [...contactsAppData];

  if (term && term.length > 1) {
    dataList = contactsAppData.filter(
      (data) =>
        data.name.toLowerCase().includes(term.toLowerCase()) ||
        data.position.toLowerCase().includes(term.toLowerCase()) ||
        data.email.toLowerCase().includes(term.toLowerCase()) ||
        data.phone.toLowerCase().includes(term.toLowerCase()) ||
        data.group.toLowerCase().includes(term.toLowerCase())
    );
  }

  const data = {
    pageSize,
    pageIndex,
    pageCount: Math.ceil(dataList.length / pageSize),
    items: [],
  };

  if (Array.isArray(sortBy) && sortBy.length === 1) {
    dataList.sort((a, b) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < sortBy.length; ++i) {
        if (a[sortBy[i].id] > b[sortBy[i].id]) return sortBy[i].desc ? -1 : 1;
        if (a[sortBy[i].id] < b[sortBy[i].id]) return sortBy[i].desc ? 1 : -1;
      }
      return 0;
    });
  }
  const startRow = pageSize * pageIndex;
  const endRow = startRow + pageSize;
  data.items = dataList.slice(startRow, endRow);

  return [200, { ...data }];
});
api.onPost(`${SERVICE_URL}/apps/contacts`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { item, sortBy, pageSize, pageIndex } = requestData;

  const dataList = [...contactsAppData];
  // Add item
  dataList.push({ ...item, id: dataList.length + 1 });

  const data = {
    pageSize,
    pageIndex,
    pageCount: Math.ceil(dataList.length / pageSize),
    items: [],
  };

  if (Array.isArray(sortBy) && sortBy.length === 1) {
    dataList.sort((a, b) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < sortBy.length; ++i) {
        if (a[sortBy[i].id] > b[sortBy[i].id]) return sortBy[i].desc ? -1 : 1;
        if (a[sortBy[i].id] < b[sortBy[i].id]) return sortBy[i].desc ? 1 : -1;
      }
      return 0;
    });
  }
  const startRow = pageSize * pageIndex;
  const endRow = startRow + pageSize;
  data.items = dataList.slice(startRow, endRow);

  return [200, { ...data }];
});
api.onPut(`${SERVICE_URL}/apps/contacts`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { item, sortBy, pageSize, pageIndex } = requestData;
  let dataList = [...contactsAppData];
  // Update item
  dataList = dataList.map((x) => (x.id === item.id ? item : x));

  const data = {
    pageSize,
    pageIndex,
    pageCount: Math.ceil(dataList.length / pageSize),
    items: [],
  };

  if (Array.isArray(sortBy) && sortBy.length === 1) {
    dataList.sort((a, b) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < sortBy.length; ++i) {
        if (a[sortBy[i].id] > b[sortBy[i].id]) return sortBy[i].desc ? -1 : 1;
        if (a[sortBy[i].id] < b[sortBy[i].id]) return sortBy[i].desc ? 1 : -1;
      }
      return 0;
    });
  }
  const startRow = pageSize * pageIndex;
  const endRow = startRow + pageSize;
  data.items = dataList.slice(startRow, endRow);

  return [200, { ...data }];
});
api.onDelete(`${SERVICE_URL}/apps/contacts`).reply((config) => {
  const { ids, sortBy, pageSize, pageIndex } = config;

  let dataList = [...contactsAppData];
  // Delete item
  dataList = dataList.filter((x) => !ids.includes(x.id));

  const data = {
    pageSize,
    pageIndex,
    pageCount: Math.ceil(dataList.length / pageSize),
    items: [],
  };

  if (Array.isArray(sortBy) && sortBy.length === 1) {
    dataList.sort((a, b) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < sortBy.length; ++i) {
        if (a[sortBy[i].id] > b[sortBy[i].id]) return sortBy[i].desc ? -1 : 1;
        if (a[sortBy[i].id] < b[sortBy[i].id]) return sortBy[i].desc ? 1 : -1;
      }
      return 0;
    });
  }
  const startRow = pageSize * pageIndex;
  const endRow = startRow + pageSize;
  data.items = dataList.slice(startRow, endRow);

  return [200, { ...data }];
});
