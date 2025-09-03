/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@bytemd/vue-next' {
  import { DefineComponent } from 'vue'
  export const Editor: DefineComponent<any, any, any>
  export const Viewer: DefineComponent<any, any, any>
}

declare module '@bytemd/plugin-*' {
  const plugin: () => any
  export default plugin
}