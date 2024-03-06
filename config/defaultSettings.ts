import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = ProSettings & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  // navTheme: 'dark',
  // // 拂晓蓝
  // primaryColor: '#1890ff',
  // layout: 'side',
  // contentWidth: 'Fluid',
  // fixedHeader: false,
  // fixSiderbar: true,
  // colorWeak: false,
  // menu: {
  //   locale: true,
  // },
  // title: 'Ant Design Pro',
  // pwa: false,
  // iconfontUrl: '',

  navTheme: 'light',
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  menu: {
    locale: true,
  },
  title: 'Ant Design Pro',
  pwa: false,
  iconfontUrl: '',
  headerHeight: 48,
  splitMenus: false,
};

export type { DefaultSettings };

export default proSettings;
