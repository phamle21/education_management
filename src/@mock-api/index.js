import api from './api';
import './data/apps.chat';
import './data/apps.contacts';
import './data/apps.events';
import './data/apps.mailbox';
import './data/apps.tasks';
import './data/datatable';
import './data/notifications';
import './data/products';
import './data/users';

api.onAny().passThrough();
