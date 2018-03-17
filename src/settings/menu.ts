export const MENU: any = [
  {
    title: 'MENU',
    groupTitle : true
  },
  {
    title: 'Configurações',
    icon: {
      class: 'fa fa-wrench',
      bg: '#ea8080',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/default-layout/dashboard',
    badge: {
      text: 'New',
      color: '#fff',
      bg: '#E57373'
    },
    sub: [
      {
        title: 'Empresa',
        routing: '/default-layout/dashboard'
      }
    ]
  },
  {
    title: 'Anúncios',
    icon: {
      class: 'fa fa-th',
      bg: '#E1BEE7',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/anuncios'
  }
];
