<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible"
          :closeOnClickOverlay="false"
          :ok="f1" :cancel="f2">
    <template v-slot:title>
      <h4>你打开了Dialog</h4>
    </template>
    <template v-slot:content>
      <strong>文本框第一行</strong>
      <div>文本框第二行</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {

    }
    return {visible, toggle, f1, f2}
  }
};
</script>

<style lang="scss" scoped>

</style>