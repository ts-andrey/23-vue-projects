export default [
  {
    name: 'Repair',
    description:
      'Our company is able to repair any kind of modern gadjets. And you can even check the status of your order (waiting for spare parts, in repairing process, ready to take):',
    icon: 'repair',
    link:'repair',
    childrenData: [
      { name: 'PC', icon: 'pc' },
      { name: 'Laptop', icon: 'laptop' },
      { name: 'Tablet', icon: 'tablet' },
      { name: 'Phones', icon: 'phone' },
      { name: 'Appliances', icon: 'appliance' },
      { name: 'Gadgets', icon: 'gadget' },
    ],
  },
  {
    name: 'Custom assembling',
    description: `If you are unsure about assembling your computer - we can help you and build you PC for your specifical needs and budget:`,
    icon: 'assembly',
    link:'contacts',
    childrenData: [
      { name: 'cheap', icon: 'cheap' },
      { name: 'gaming', icon: 'gaming' },
      { name: 'mining', icon: 'mining' },
      { name: 'work', icon: 'work' },
    ],
  },
  {
    name: 'Company service',
    description: 'We provide our professional services to the companies',
    icon: 'service',
    link:'contacts',
    childrenData: [
      { name: 'Software: install/fix', icon: 'software' },
      { name: 'PC: install/repair', icon: 'pc' },
      { name: 'Network: build/ajdust', icon: 'network' },
    ],
  },
  {
    name: 'Websites',
    description:
      'Our company can build any site for your needs:',
    icon: 'web',
    link:'web',
    childrenData: [
      { name: 'buisness website', icon: 'spa' },
      { name: 'blog', icon: 'blog' },
      { name: 'forum', icon: 'forum' },
      { name: 'web-shop', icon: 'shop' },
      { name: 'custom-app', icon: 'custom' },
      { name: 'API', icon: 'api' },
      { name: 'server', icon: 'server' },
      { name: 'widget', icon: 'widget' },
    ],
  },
  {
    name: 'Shop',
    description: 'You can checkout our stock and get some computer components, phones, notebooks, etc...',
    icon: 'shop',
    link:'shop',
    childrenData: [
      { name: 'PC', icon: 'pc' },
      { name: 'Laptop', icon: 'laptop' },
      { name: 'Tablet', icon: 'tablet' },
      { name: 'Phones', icon: 'phone' },
    ],
  },
  {
    name: 'Customer Service',
    description: 'Our company also offers home service for individuals',
    icon: 'service',
    link:'contacts',
    childrenData: [
      { name: 'Software: install/fix', icon: 'software' },
      { name: 'PC: install/repair', icon: 'pc' },
      { name: 'Network: build/ajdust', icon: 'network' },
    ],
  },
];
