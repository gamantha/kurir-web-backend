import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login/Login';
import ProposalList from '../components/ProposalList/ProposalList';
import UserList from '../components/UserList/UserList';
import ShippingList from '../components/ShippingList/ShippingList';
import ShippingDetail from '../components/ShippingDetail/ShippingDetail';
import Unauthorized from '../components/Unauthorized/Unauthorized';
import FourOhFour from '../components/FourOhFour/FourOhFour';
import { sysAdminCheck, bothAdmin } from '../helpers/auth';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/proposal',
      name: 'ProposalList',
      component: ProposalList,
      beforeEnter: sysAdminCheck,
    },
    {
      path: '/user',
      name: 'UserList',
      component: UserList,
      beforeEnter: sysAdminCheck,
    },
    {
      path: '/shipping',
      name: 'ShippingList',
      component: ShippingList,
      beforeEnter: bothAdmin,
    },
    {
      path: '/shipping/:ticketNumber',
      name: 'ShippingDetail',
      component: ShippingDetail,
      beforeEnter: bothAdmin,
    },
    {
      path: '/unauthorized',
      name: 'Unauthorized',
      component: Unauthorized,
    },
    {
      path: '*',
      name: 'FourOhFour',
      component: FourOhFour,
    },
  ],
});
