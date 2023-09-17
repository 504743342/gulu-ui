import Dialog from './Dialog.vue';
import {VNode, createApp, h} from 'vue';

interface Options {
  title?: VNode;
  content?: string;
  closeOnClickOverlay?: boolean;
  ok?: () => boolean;
  cancel?: () => void;
}

export const openDialog = (options: Options) => {
  const {title, content, closeOnClickOverlay, ok, cancel} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount();
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible: boolean) => {
            if (newVisible === false) {
              close();
            }
          },
          closeOnClickOverlay,
          ok, cancel
        },
        { title, content }
      );
    }
  });
  app.mount(div);
};