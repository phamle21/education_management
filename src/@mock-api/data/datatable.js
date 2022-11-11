import { SERVICE_URL } from 'config';
import api from '../api';

const datatableData = [
  { id: 1, name: 'Anadama', sales: '675', stock: '115', category: 'Whole Wheat', tag: '' },
  { id: 2, name: 'Anpan', sales: '1395', stock: '208', category: 'Sourdough', tag: 'Done' },
  { id: 3, name: 'Bagel', sales: '1436', stock: '180', category: 'Whole Wheat', tag: 'Sale' },
  { id: 4, name: 'Bammy', sales: '512', stock: '57', category: 'Multigrain', tag: '' },
  { id: 5, name: 'Bara Brith', sales: '1485', stock: '150', category: 'Multigrain', tag: '' },
  { id: 6, name: 'Barmbrack', sales: '985', stock: '68', category: 'Whole Wheat', tag: 'Done' },
  { id: 7, name: 'Bazin', sales: '1279', stock: '247', category: 'Sourdough', tag: '' },
  { id: 8, name: 'Bialy', sales: '653', stock: '249', category: 'Multigrain', tag: '' },
  { id: 9, name: 'Biscotti', sales: '904', stock: '77', category: 'Whole Wheat', tag: '' },
  { id: 10, name: 'Blaa', sales: '1224', stock: '51', category: 'Sourdough', tag: 'New' },
  { id: 11, name: 'Boule', sales: '1007', stock: '162', category: 'Sourdough', tag: '' },
  { id: 12, name: 'Česnica', sales: '967', stock: '166', category: 'Multigrain', tag: '' },
  { id: 13, name: 'Cholermüs', sales: '1244', stock: '83', category: 'Whole Wheat', tag: 'Sale' },
  { id: 14, name: 'Cornbread', sales: '2524', stock: '214', category: 'Sourdough', tag: '' },
  { id: 15, name: 'Crisp Bread', sales: '1398', stock: '75', category: 'Whole Wheat', tag: '' },
  { id: 16, name: 'Crumpet', sales: '1049', stock: '103', category: 'Sourdough', tag: '' },
  { id: 17, name: 'Damper', sales: '779', stock: '195', category: 'Multigrain', tag: '' },
  { id: 18, name: 'Dorayaki', sales: '1106', stock: '69', category: 'Whole Wheat', tag: '' },
  { id: 19, name: 'Farl', sales: '958', stock: '170', category: 'Multigrain', tag: '' },
  { id: 20, name: 'Flatbrød', sales: '377', stock: '114', category: 'Sourdough', tag: '' },
  { id: 21, name: 'Fougasse', sales: '2920', stock: '136', category: 'Sourdough', tag: '' },
  { id: 22, name: 'Himbasha', sales: '1112', stock: '305', category: 'Multigrain', tag: '' },
  { id: 23, name: 'Kalach', sales: '401', stock: '38', category: 'Sourdough', tag: '' },
  { id: 24, name: 'Kifli', sales: '291', stock: '130', category: 'Multigrain', tag: 'Sale' },
  { id: 25, name: 'Kulcha', sales: '545', stock: '180', category: 'Whole Wheat', tag: '' },
  { id: 26, name: 'Lángos', sales: '2253', stock: '224', category: 'Whole Wheat', tag: 'Done' },
  { id: 27, name: 'Lefse', sales: '934', stock: '52', category: 'Sourdough', tag: '' },
  { id: 28, name: 'Mantou', sales: '592', stock: '276', category: 'Multigrain', tag: '' },
  { id: 29, name: 'Matzo', sales: '203', stock: '191', category: 'Sourdough', tag: '' },
  { id: 30, name: 'Melonpan', sales: '693', stock: '146', category: 'Sourdough', tag: '' },
  { id: 31, name: 'Michetta', sales: '863', stock: '92', category: 'Whole Wheat', tag: '' },
  { id: 32, name: 'Mohnflesserl', sales: '555', stock: '111', category: 'Whole Wheat', tag: '' },
  { id: 33, name: 'Naan', sales: '994', stock: '21', category: 'Multigrain', tag: '' },
  { id: 34, name: 'Pan Dulce', sales: '2061', stock: '224', category: 'Sourdough', tag: '' },
  { id: 35, name: 'Panbrioche', sales: '1410', stock: '77', category: 'Multigrain', tag: '' },
  { id: 36, name: 'Pane Ticinese', sales: '1323', stock: '39', category: 'Whole Wheat', tag: 'New' },
  { id: 37, name: 'Panettone', sales: '219', stock: '291', category: 'Multigrain', tag: '' },
  { id: 38, name: 'Paratha', sales: '304', stock: '232', category: 'Sourdough', tag: '' },
  { id: 39, name: 'Peg Bread', sales: '416', stock: '65', category: 'Multigrain', tag: '' },
  { id: 40, name: 'Piadina', sales: '1051', stock: '98', category: 'Whole Wheat', tag: '' },
  { id: 41, name: 'Pistolet', sales: '1323', stock: '23', category: 'Multigrain', tag: '' },
  { id: 42, name: 'Qistibi', sales: '386', stock: '104', category: 'Whole Wheat', tag: '' },
  { id: 43, name: 'Rewena', sales: '2383', stock: '309', category: 'Multigrain', tag: '' },
  { id: 44, name: 'Rice Bread', sales: '1279', stock: '266', category: 'Sourdough', tag: '' },
  { id: 45, name: 'Rieska', sales: '1323', stock: '23', category: 'Sourdough', tag: '' },
  { id: 46, name: 'Roti', sales: '853', stock: '60', category: 'Whole Wheat', tag: '' },
  { id: 47, name: 'Rugbrød', sales: '771', stock: '114', category: 'Multigrain', tag: '' },
  { id: 48, name: 'Rye Bread', sales: '603', stock: '171', category: 'Sourdough', tag: '' },
  { id: 49, name: 'Saj Bread', sales: '1224', stock: '49', category: 'Whole Wheat', tag: 'New' },
  { id: 50, name: 'Samoon', sales: '853', stock: '294', category: 'Multigrain', tag: '' },
  { id: 51, name: 'Shirmal', sales: '304', stock: '23', category: 'Sourdough', tag: '' },
  { id: 52, name: 'Spelt Bread', sales: '2524', stock: '271', category: 'Sourdough', tag: '' },
  { id: 53, name: 'Teacake', sales: '757', stock: '85', category: 'Multigrain', tag: '' },
  { id: 54, name: 'Tiger Bread', sales: '934', stock: '49', category: 'Whole Wheat', tag: 'New' },
  { id: 55, name: 'Tunnbröd', sales: '1724', stock: '41', category: 'Multigrain', tag: '' },
  { id: 56, name: 'Vánočka', sales: '1801', stock: '173', category: 'Whole Wheat', tag: 'Done' },
  { id: 57, name: 'Vienna Bread', sales: '2668', stock: '240', category: 'Sourdough', tag: '' },
  { id: 58, name: 'Yufka', sales: '917', stock: '126', category: 'Sourdough', tag: '' },
  { id: 59, name: 'Zopf', sales: '750', stock: '119', category: 'Whole Wheat', tag: '' },
  { id: 60, name: 'Zwieback', sales: '686', stock: '64', category: 'Whole Wheat', tag: '' },
];

api.onGet(`${SERVICE_URL}/datatable`).reply((config) => {
  const { term, sortBy, pageSize, pageIndex } = config.params;

  let dataList = [...datatableData];

  if (term && term.length > 1) {
    dataList = datatableData.filter(
      (data) =>
        data.name.toLowerCase().includes(term.toLowerCase()) ||
        data.tag.toLowerCase().includes(term.toLowerCase()) ||
        data.sales.toLowerCase().includes(term.toLowerCase()) ||
        data.stock.toLowerCase().includes(term.toLowerCase()) ||
        data.category.toLowerCase().includes(term.toLowerCase())
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
api.onPost(`${SERVICE_URL}/datatable`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { item, sortBy, pageSize, pageIndex } = requestData;

  const dataList = [...datatableData];
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
api.onPut(`${SERVICE_URL}/datatable`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { item, sortBy, pageSize, pageIndex } = requestData;
  let dataList = [...datatableData];
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
api.onDelete(`${SERVICE_URL}/datatable`).reply((config) => {
  const { ids, sortBy, pageSize, pageIndex } = config;

  let dataList = [...datatableData];
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
