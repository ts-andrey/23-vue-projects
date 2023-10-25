<template>
  <li class="serviceItem">
    <router-link :to="link">
      <base-card>
        <div class="wrapper">
          <h3>{{ name }}</h3>
          <span class="icon" v-if="icon === 'web'"><WebIcon /></span>
          <span class="icon" v-if="icon === 'repair'"><RepairIcon /></span>
          <span class="icon" v-if="icon === 'service'"><ServiceIcon /></span>
          <span class="icon" v-if="icon === 'shop'"><ShopIcon /></span>
          <span class="icon" v-if="icon === 'assembly'"><AssemblyIcon /></span>
          <p>{{ description }}</p>
          <ul v-if="childrenData">
            <li v-for="child in childrenData">
              <h4>{{ child.name }}</h4>
              <span class="icon" v-if="child.icon === 'laptop'"><LaptopIcon /></span>
              <span class="icon" v-if="child.icon === 'pc'"><PCIcon /></span>
              <span class="icon" v-if="child.icon === 'phone'"><PhoneIcon /></span>
              <span class="icon" v-if="child.icon === 'service'"><ServiceIcon /></span>
              <span class="icon" v-if="child.icon === 'shop'"><ShopIcon /></span>
              <span class="icon" v-if="child.icon === 'software'"><SoftwareIcon /></span>
              <span class="icon" v-if="child.icon === 'tablet'"><TabletIcon /></span>
              <span class="icon" v-if="child.icon === 'network'"><NetworkIcon /></span>
              <span class="icon" v-if="child.icon === 'appliance'"><ApplianceIcon /></span>
              <span class="icon" v-if="child.icon === 'gadget'"><GadgetIcon /></span>
              <span class="icon" v-if="child.icon === 'api'"><APIIcon /></span>
              <span class="icon" v-if="child.icon === 'blog'"><BlogIcon /></span>
              <span class="icon" v-if="child.icon === 'custom'"><CustomIcon /></span>
              <span class="icon" v-if="child.icon === 'forum'"><ForumIconIIcon /></span>
              <span class="icon" v-if="child.icon === 'server'"><ServerIcon /></span>
              <span class="icon" v-if="child.icon === 'spa'"><SPAIcon /></span>
              <span class="icon" v-if="child.icon === 'widget'"><WidgetIcon /></span>
              <span class="icon" v-if="child.icon === 'cheap'"><CheapIcon /></span>
              <span class="icon" v-if="child.icon === 'gaming'"><GamingIcon /></span>
              <span class="icon" v-if="child.icon === 'mining'"><MiningIcon /></span>
              <span class="icon" v-if="child.icon === 'work'"><WorkIcon /></span>
            </li>
          </ul>
        </div>
      </base-card>
    </router-link>
  </li>
</template>

<script>
import AssemblyIcon from '../icons/welcomeMain/AssemblyIcon.vue';
import RepairIcon from '../icons/welcomeMain/RepairIcon.vue';
import WebIcon from '../icons/welcomeMain/WebIcon.vue';

import ApplianceIcon from '../icons/welcomeMore/ApplianceIcon.vue';
import GadgetIcon from '../icons/welcomeMore/GadgetIcon.vue';
import LaptopIcon from '../icons/welcomeMore/LaptopIcon.vue';
import NetworkIcon from '../icons/welcomeMore/NetworkIcon.vue';
import PCIcon from '../icons/welcomeMore/PCIcon.vue';
import PhoneIcon from '../icons/welcomeMore/PhoneIcon.vue';
import SoftwareIcon from '../icons/welcomeMore/SoftwareIcon.vue';
import TabletIcon from '../icons/welcomeMore/TabletIcon.vue';

import ServiceIcon from '../icons/welcomeBasic/ServiceIcon.vue';
import ShopIcon from '../icons/welcomeBasic/ShopIcon.vue';

import APIIcon from '../icons/welcomeWeb/APIIcon.vue';
import BlogIcon from '../icons/welcomeWeb/BlogIcon.vue';
import CustomIcon from '../icons/welcomeWeb/CustomIcon.vue';
import ForumIconIIcon from '../icons/welcomeWeb/ForumIcon.vue';
import ServerIcon from '../icons/welcomeWeb/ServerIcon.vue';
import SPAIcon from '../icons/welcomeWeb/SPAIcon.vue';
import WidgetIcon from '../icons/welcomeWeb/WidgetIcon.vue';

import CheapIcon from '../icons/welcomeBuild/CheapIcon.vue';
import GamingIcon from '../icons/welcomeBuild/GamingIcon.vue';
import MiningIcon from '../icons/welcomeBuild/MiningIcon.vue';
import WorkIcon from '../icons/welcomeBuild/WorkIcon.vue';

export default {
  components: {
    AssemblyIcon,
    RepairIcon,
    WebIcon,

    ApplianceIcon,
    GadgetIcon,
    LaptopIcon,
    NetworkIcon,
    PCIcon,
    PhoneIcon,
    SoftwareIcon,
    TabletIcon,

    ServiceIcon,
    ShopIcon,

    APIIcon,
    BlogIcon,
    CustomIcon,
    ForumIconIIcon,
    ServerIcon,
    SPAIcon,
    WidgetIcon,

    CheapIcon,
    GamingIcon,
    MiningIcon,
    WorkIcon,
  },
  props: ['name', 'description', 'icon', 'childrenData', 'link'],
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
}

h3 {
  text-align: center;
  font-size: 26px;
  margin-bottom: 1rem;
}

p {
  position: relative;
  margin: 30px 0 10px 0;
  font-size: 16px;
}

p::before {
  content: '';
  position: absolute;
  top: -0.7rem;
  left: 0;
  border-top: 1px dotted var(--color-main--light);
  width: 100%;
  transition: all var(--time-animation-duration);
}

.icon {
  display: flex;
  height: 40px;
  width: 40px;
}

.icon svg {
  fill: var(--color-main--light);
}

li ul {
  margin-top: 10px;
  padding: 0;
  list-style: circle;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 20px;
}

li li {
  padding: 5px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 90%;
}

li li h4 {
  font-size: 14px;
  margin: 0 0 7px 0;
}

a {
  text-decoration: none;
  color: inherit;
}

li .card {
  transition: all var(--time-animation-duration);
}
li .card:hover {
  border: 1px dotted var(--color-main--attract);
}

li svg {
  transition: all var(--time-animation-duration);
}

li:hover svg {
  fill: var(--color-main--attract);
}

li:hover p::before {
  border-top: 1px dotted var(--color-main--attract);
}

</style>
