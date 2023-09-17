<template>
  <button class="king-switch" @click="toggle" :class="{'king-checked':value}" ><span></span></button>
</template>

<script lang="ts" setup>


 const props = defineProps<{ value?: boolean }> ()
 const emit = defineEmits<{
  (e: 'update:value', value: boolean): void
 }> ()
  const toggle = () => {
    emit('update:value', !props.value)
  }
  
</script>

<style lang="scss">
  @use "sass:math";
  $h: 22px;
  $h2: $h - 4px;
  .king-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background: #bfbfbf;
    border-radius: math.div($h, 2);
    position: relative;
    &:focus {
      outline: none;
    }
    &:active {
      > span {width: $h2 + 4px;}
    }
    &.king-checked:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
    &.king-checked {
      background: #1890ff;
      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }
    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      border-radius: math.div($h2, 2);
      background: white;
      transition: all 250ms;
    }
  }

</style>