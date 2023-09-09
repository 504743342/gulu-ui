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
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {h, ref} from 'vue';
import {openDialog} from '../lib/openDialog';

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
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        closeOnClickOverlay: true,
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        }
      })
    }
    return {visible, toggle, f1, f2, showDialog}
  }
};
</script>

<style lang="scss" scoped>

</style>