<template>
  <div>
    <div class="king-tabs">
      <div class="king-tabs-nav" ref="container">
        <div class="king-tabs-nav-item"
             v-for="(t, index) in titles"
             :ref="el => { if ( t===selected ) selectedItem = el as HTMLDivElement }"
             @click="select(t)"
             :class="{selected: t===selected}"
             :key="index">{{t}}
        </div>
        <div class="king-tabs-nav-indicator" ref="indicator"></div>
      </div>
    </div>
    <div class="king-tabs-content">
      <component class="king-tabs-content-item" :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Tab from './Tab.vue';
import {computed, onMounted, ref, useSlots, watchEffect} from 'vue';
 const props = defineProps<{selected?: string}>() 
 const emit = defineEmits<{
   (e: 'update:selected', value: string): void
 }>()

  const selectedItem = ref<HTMLDivElement>(null)
  const indicator = ref<HTMLDivElement>(null)
  const container = ref<HTMLDivElement>(null)

  onMounted(() => {
    watchEffect(() => {
      const {width} = selectedItem.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const {left: left1} = container.value.getBoundingClientRect()
      const {left: left2} = selectedItem.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    },{
      flush: 'post'
    })
  })
  const slots = useSlots()
  const defaults = slots.default()
  defaults.forEach((tag) => {
    //@ts-ignore
    if(tag.type.name !== Tab.name ) {
      throw new Error('Tabs 子标签必须是 Tab')
    }
  })
  const titles = defaults.map((tag) => {
    return tag.props.title
  })
  const current = computed(() => {
    return defaults.filter((tag) => {
      return tag.props.title === props.selected
    })[0]
  })
  const select = (title: string) => {
    emit('update:selected', title)
  }

</script>

<style lang="scss" scoped>
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;

  .king-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      position: relative;
      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
        &.selected {
          color: $blue;
        }
      }
      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        transition: all 250ms;
        bottom: -1px;
        width: 100px;
      }
    }
    &-content {
      padding: 8px 0;
    }
  }
</style>