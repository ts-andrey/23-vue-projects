export default [
  {
    name: 'Repair',
    description:
      'Our company is able to repair any kind of modern gadjets. And you can even check the status of your order (waiting for spare parts, in repairing process, ready to take)',
    icon: 'repair',
    children: [
      { name: 'PC', icon: 'pc' },
      { name: 'Laptop', icon: 'laptop' },
      { name: 'Tablet', icon: 'tablet' },
      { name: 'Phones', icon: 'phone' },
    ],
  },
  {
    name: 'Custom assempling',
    description: `If you are unsure about assembling your computer - we can help you and build you PC for your specifical needs and budget`,
    icon: 'PC',
  },
  {
    name: 'Company service',
    description: 'We provide our professional services to the companies',
    icon: 'service',
    children: [
      { name: 'Software: install/fix', icon: 'software' },
      { name: 'PC: install/repair', icon: 'pc' },
      { name: 'Network: build/ajdust', icon: 'network' },
    ],
  },
  {
    name: 'Websites',
    description:
      'Our company can build any site for your needs (buisness website, blog, forum, web-shop, any custom-app, API, etc...)',
    icon: 'web',
  },
  { name: 'Shop', description: 'You can checkout our stock and get some computer components, phones, notebooks, etc...', icon: 'shop' },
];
