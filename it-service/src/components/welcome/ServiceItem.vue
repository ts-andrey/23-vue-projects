<template>
  <li class="serviceItem">
    <base-card>
      <div class="wrapper">
        <h3>{{ name }}</h3>
        <span class="icon" v-if="icon === 'web'"><SiteIcon /></span>
        <span class="icon" v-if="icon === 'repair'"><RepairIcon /></span>
        <span class="icon" v-if="icon === 'services'"><ServicesIcon /></span>
        <span class="icon" v-if="icon === 'shop'"><ShopIcon /></span>
        <span class="icon" v-if="icon === 'assembly'"><AssemblyIcon /></span>
        <p>{{ description }}</p>
        <ul v-if="childrenData">
          <li v-for="child in childrenData">
            <h4>{{ child.name }}</h4>
            <span class="icon" v-if="child.icon === 'laptop'"><LaptopIcon /></span>
            <span class="icon" v-if="child.icon === 'pc'"><PCIcon /></span>
            <span class="icon" v-if="child.icon === 'phone'"><PhoneIcon /></span>
            <span class="icon" v-if="child.icon === 'services'"><ServicesIcon /></span>
            <span class="icon" v-if="child.icon === 'shop'"><ShopIcon /></span>
            <span class="icon" v-if="child.icon === 'software'"><SoftwareIcon /></span>
            <span class="icon" v-if="child.icon === 'tablet'"><TabletIcon /></span>
            <span class="icon" v-if="child.icon === 'network'"><NetworkIcon /></span>
          </li>
        </ul>
      </div>
    </base-card>
  </li>
</template>

<script>
import AssemblyIcon from '../icons/AssemblyIcon.vue';
import LaptopIcon from '../icons/LaptopIcon.vue';
import NetworkIcon from '../icons/NetworkIcon.vue';
import PCIcon from '../icons/PCIcon.vue';
import PhoneIcon from '../icons/PhoneIcon.vue';
import RepairIcon from '../icons/RepairIcon.vue';
import ServicesIcon from '../icons/ServicesIcon.vue';
import ShopIcon from '../icons/ShopIcon.vue';
import SiteIcon from '../icons/SiteIcon.vue';
import SoftwareIcon from '../icons/SoftwareIcon.vue';
import TabletIcon from '../icons/TabletIcon.vue';
export default {
  components: {
    AssemblyIcon,
    LaptopIcon,
    NetworkIcon,
    PCIcon,
    PhoneIcon,
    RepairIcon,
    ServicesIcon,
    ShopIcon,
    SiteIcon,
    SoftwareIcon,
    TabletIcon,
  },
  props: ['name', 'description', 'icon', 'childrenData'],
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
  font-size: 24px;
  margin-bottom: 1rem;
}

p {
  position: relative;
  margin-top: 2rem;
}

p::before {
  content: '';
  position: absolute;
  top: -0.7rem;
  left: 0;
  border-top: 1px dotted var(--color-main--light);
  width: 100%;
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
  align-self: flex-start;
  padding: 0;
  list-style: circle;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
}

li li {
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 90%;
}

li li h4 {
  margin-right: 1rem;
}
</style>
