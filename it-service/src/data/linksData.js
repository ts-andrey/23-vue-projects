export default [
  { name: 'Home', link: '/' },
  { name: 'Repair', link: '/repair' },
  { name: 'Service', link: '/service' },
  { name: 'Websites', link: '/web' },
  { name: 'Shop', link: '/shop' },
  { name: 'Login', link: '/auth', isConditional: true },
  { name: 'Contacts', link: '/contacts' },
  { name: 'Admin', link: '/admin', isProtected: true },
];
