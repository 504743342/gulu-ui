<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-pingguo"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-caidan"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const toggleMenu = () => { 
      menuVisible!.value = !menuVisible!.value
    }
    return {toggleMenu}
  }
};
</script>

<style lang="scss" scoped>
$color: #61bee7;
.topnav{
  color: $color;
  background: white;
  box-shadow: 0 5px 5px rgba(51,51,51,.1) ;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  >.logo {
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
    >svg {
      width: 32px;
      height: 32px;
    }
  }
  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {
      margin: 0 1em;
    }
  }
  >.toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  @media (max-width: 500px) {
    >.menu{display: none;}
    >.logo{margin: 0 auto;}
    >.toggleAside{display: inline-block}
  }
}
</style>