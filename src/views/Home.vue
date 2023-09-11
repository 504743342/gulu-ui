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
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了最新的 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shandian"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
$blue: #026c9d;
$border-radius: 4px;
$color: #046d9e;
  .topnavAndBanner {
    background: rgb(185,235,250);
    background: linear-gradient(145deg, rgba(185,235,250,1) 0%, rgba(75,179,227,1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
  }
  .features {
    margin: 64px auto;
    width: 400px;
    @media (min-width: 800px) {
      width: 800px;
    }
    @media (min-width: 1200px) {
      width: 1200px;
    }
    >ul {
      display: flex;
      flex-wrap: wrap;
      >li {
        width: 400px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
          "icon title"
          "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
        >svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }
        >h3 {
          grid-area: title;
          font-size: 28px;
        }
        >p {
          grid-area: text;
        }
      }
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