import { LocalStorage } from 'quasar';

const token = LocalStorage.has('token') ? LocalStorage.getItem('token') : null;

export default ({ Vue }) => {
  Vue.prototype.$config = {
    token
  };
}