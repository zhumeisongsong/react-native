import type { Action } from './types';

type Tab = '首页' | '购物车' | 'map' | 'notifications' | 'info';

module.exports = {
  switchTab: (tab: Tab): Action => ({
    type: 'SWITCH_TAB',
    tab,
  }),
};
