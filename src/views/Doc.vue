<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$lightbgc: #e8f7ff;
$deepbgc: blue;
$text: #87CEFA;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  >nav {
    flex-shrink: 0;
  }
  >.content {
    flex-grow: 1;
    padding-top: 55px;
    padding-left: 151px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  >aside {
    flex-shrink: 0;
  }
  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
  aside{
    box-shadow: 5px 0 5px rgba(51, 51, 51, 0.1);
    background: white;
    width: 150px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: 1;

    >h2 {
      margin-bottom: 4px;
      padding: 0 16px;
    }
    >ol {
      >li {
        > a {
          display: block;
          padding: 4px 16px;
          text-decoration: none;
          &:hover {
            background: $lightbgc;
          }
        }
        .router-link-active {
          position: relative;
          background: $lightbgc;
          color: $text;
          &::after {
            content: "";
            display: block;
            animation: bdrolate 0.8s;
            position: absolute;
            top: 0;
            right: 0;
            width: 3px;
            height: 32px;
            background: $deepbgc;
          }
        }
      }
    }
    @keyframes bdrolate {
      0% {
        transform: rotateX(90deg);
      }
      100% {
        transform: rotateX(0deg);
      }
    }
  }
  main {
    overflow: auto;
  }
</style>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';
export default {
  components: {Topnav},
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    return {menuVisible}
  }
}
</script>