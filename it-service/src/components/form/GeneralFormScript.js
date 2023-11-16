import { checkSession } from '../../util/helpFuncs';
import { v4 as uuidv4 } from 'uuid';

export default {
  props: ['formType'],
  data() {
    return {
      name: '',
      description: '',
      image: '',

      link: '',
      cooperationTime: 'Less than a year',
      type: 'phone',
      price: 0,

      customer: '',
      mail: '',
      phone: '',
      status: 'registered',
    };
  },
  beforeCreate() {
    const sessionData = checkSession();
    if (sessionData.isValid) {
      this.$store.dispatch('auth/login', sessionData.data);
    } else {
      this.$store.dispatch('auth/logout');
    }

    const isLoggedIn = this.$store.getters['auth/getUserStatus'];
    if (!isLoggedIn) {
      this.$router.push('/auth');
    }
  },
  computed: {
    nameText() {
      if (this.formType === 'web') {
        return 'Website';
      } else if (this.formType === 'company') {
        return 'Company';
      } else if (this.formType === 'order') {
        return 'Appliance';
      } else if (this.formType === 'shop') {
        return 'Model';
      }
    },
    buttonText() {
      if (this.formType === 'web') {
        return 'Add new Website';
      } else if (this.formType === 'company') {
        return 'Add new Company';
      } else if (this.formType === 'order') {
        return 'Add new Order';
      } else if (this.formType === 'shop') {
        return 'Add new Shop Item';
      }
    },
  },
  methods: {
    addItem() {
      const uniqueID = uuidv4();
      const date = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
      
      let dispatchMethod = '';
      let item = {
        id: uniqueID,
        date: date,
        name: this.name,
        description: this.description,
        image: this.image,
        isSpread: false,
      };

      if (this.formType === 'shop') {
        dispatchMethod = 'shop/addShopItem';

        item.price = this.price;
        item.type = this.type;
      } else if (this.formType === 'web') {
        dispatchMethod = 'web/addWebItem';

        item.link = this.link;
      } else if (this.formType === 'company') {
        dispatchMethod = 'company/addCompanyItem';

        item.link = this.link;
        item.cooperationTime = this.cooperationTime;
      } else if (this.formType === 'order') {
        dispatchMethod = 'orders/addOrder';

        item.customer = this.customer;
        item.mail = this.mail;
        item.phone = this.phone;
        item.status = this.status;
      }

      console.log(item);
      this.$store.dispatch(dispatchMethod, item);
      this.clearForm();
    },

    clearForm() {
      this.name = '';
      this.description = '';
      this.image = '';

      this.link = '';

      this.cooperationTime = 'Less than a year';

      this.type = 'phone';
      this.price = 0;

      this.customer = '';
      this.mail = '';
      this.phone = '';
      this.status = 'registered';
    },
  },
};
