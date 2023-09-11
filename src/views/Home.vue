<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <router-link to="/doc">
          开始
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-kuaijin-copy"></use>
          </svg>
        </router-link>
        <a>
          GitHub
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github-fill"></use>
          </svg>
        </a>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-Vue"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-typescript"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shandian"></use>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
$blue: #026c9d;
$border-radius: 4px;
$color: #046d9e;
  .topnavAndBanner {
    background: rgb(185,235,250);
    background: linear-gradient(145deg, rgba(185,235,250,1) 0%, rgba(75,179,227,1) 100%);
  }
  .features {
    >svg {
      width: 64px;
      height: 64px;
    }
  }
  .banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >.actions {
      margin-top: 40px;
      padding: 8px 0;
      a {
        margin: 0 8px;
        background: $blue;
        color: white;
        display: inline-block;
        padding: 8px 24px;
        border-radius: $border-radius;
        &:hover {
          text-decoration: none;
        }
        >svg {
          margin-left: 4px;
        }
      }
    }
  }
</style>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';
export default {
  components: {Topnav}
}
</script>