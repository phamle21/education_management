import { SERVICE_URL } from 'config';
import api from '../api';

let guid = 0;
const createId = () => {
  guid += 1;
  return String(guid);
};

let tasksData = [
  {
    id: createId(),
    status: 'Active',
    title: 'Look into a new email marketing service',
    detail: 'Tootsie roll liquorice cake jelly beans pudding gummi bears chocolate cake donut.',
    tags: [
      {
        title: 'Urgent',
        bg: 'outline-danger',
      },
      {
        title: 'Project',
        bg: 'outline-primary',
      },
    ],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Active',
    title: 'Rename existing sections and tasks to fit your project needs',
    detail: 'Gummi bears chocolate cake donut. Jelly-o sugar plum fruitcake bonbon bear claw cake cookie chocolate bar.',
    tags: [
      {
        title: 'Urgent',
        bg: 'outline-danger',
      },
      {
        title: 'List',
        bg: 'outline-success',
      },
    ],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Active',
    title: 'Learn how to perform magic tricks',
    detail: 'Pie powder tart chupa chups bonbon donut biscuit chocolate cake pie topping.',
    tags: [
      {
        title: 'Urgent',
        bg: 'outline-danger',
      },
      {
        title: 'Personal',
        bg: 'outline-warning',
      },
    ],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Active',
    title: 'Meeting with the new design team',
    detail: 'Chocolate apple pie powder tart chupa chups bonbon. Donut biscuit cake pie topping.',
    tags: [
      {
        title: 'List',
        bg: 'outline-success',
      },
      {
        title: 'Personal',
        bg: 'outline-warning',
      },
    ],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Active',
    title: 'Editing all the titles and descriptions of pages',
    detail: 'Chups bonbon donut biscuit chocolate apple pie powder tart biscuit chocolate cake pie pudding gummi.',
    tags: [
      {
        title: 'Project',
        bg: 'outline-primary',
      },
    ],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Done',
    title: 'Build a tree house for the team',
    detail: 'Sweet roll apple pie tiramisu bonbon sugar plum muffin. Lollipop sweet roll gingerbread halvah sesame snaps powder.',
    tags: [
      {
        title: 'Project',
        bg: 'outline-primary',
      },
    ],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Done',
    title: 'Purchase a better mouse',
    detail: 'Brownie topping apple pie pie toffee wafer cookie bonbon chupa chups tart brownie.',
    tags: [
      {
        title: 'Project',
        bg: 'outline-primary',
      },
    ],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Active',
    title: 'Make a reservation for valentines day dinner',
    detail: 'Sweet jujubes fruitcake cookie topping jelly beans ice cream candy canes brownie.',
    tags: [
      {
        title: 'Personal',
        bg: 'outline-warning',
      },
    ],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Active',
    title: 'Get familiar with the selected plugins and search for alternatives if necessary',
    detail: 'Candy jelly beans cupcake. Jelly sesame snaps marshmallow lollipop.',
    tags: [],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Active',
    title: 'Progress on team goals and objectives',
    detail: 'Dessert sweet chocolate fruitcake. Toffee candy cake. Pie gummies dessert oat cake sweet roll.',
    tags: [
      {
        title: 'Lists',
        bg: 'outline-success',
      },
      {
        title: 'Personal',
        bg: 'outline-warning',
      },
    ],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Done',
    title: 'Assemble the design and dev team for the new project',
    detail: 'Tootsie roll liquorice cake jelly beans pudding candy.',
    tags: [
      {
        title: 'Project',
        bg: 'outline-primary',
      },
      {
        title: 'Urgent',
        bg: 'outline-danger',
      },
    ],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Done',
    title: 'Create javascript structure for applications',
    detail: 'Brownie topping apple pie gummi bears wafer brownie toffee wafer cookie bonbon sweet roll.',
    tags: [
      {
        title: 'Project',
        bg: 'outline-primary',
      },
    ],
    deleted: false,
  },
  {
    id: createId(),
    status: 'Done',
    title: 'Learn to make a pie as good as my mom',
    detail: 'Cheesecake chocolate bear claw apple pie soufflé.',
    tags: [
      {
        title: 'Personal',
        bg: 'outline-warning',
      },
    ],
    deleted: true,
  },
  {
    id: createId(),
    status: 'Done',
    title: 'Build a giant sand castle',
    detail: 'Cheesecake oat cake croissant topping lemon drops macaroon.',
    tags: [
      {
        title: 'Personal',
        bg: 'outline-warning',
      },
    ],
    deleted: true,
  },
  {
    id: createId(),
    status: 'Done',
    title: 'Make a todo list',
    detail: 'Tiramisu bear claw jelly-o marshmallow topping jelly beans ice cream candy canes cake.',
    tags: [
      {
        title: 'Personal',
        bg: 'outline-warning',
      },
    ],
    deleted: true,
  },
];
api.onGet(`${SERVICE_URL}/apps/tasks`).reply(200, tasksData);

api.onPut(`${SERVICE_URL}/apps/tasks`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { item } = requestData;
  if (tasksData.find((x) => x.id === item.id)) {
    tasksData = tasksData.map((x) => (x.id === item.id ? item : x));
    // Update item
    return [200, tasksData];
  }
  tasksData.push({ ...item, id: createId() });
  return [200, tasksData];
});

api.onPost(`${SERVICE_URL}/apps/tasks`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { item } = requestData;

  // Add item
  tasksData = [{ ...item, id: createId() }, ...tasksData];
  return [200, tasksData];
});

api.onDelete(`${SERVICE_URL}/apps/tasks`).reply((config) => {
  const { id } = config;
  // Delete item
  tasksData = [...tasksData.filter((x) => id !== x.id)];
  return [200, tasksData];
});
