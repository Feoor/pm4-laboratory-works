export default {
  name: 'BaseComponent',
  inheritAttrs: false,
  template: `
    <div v-bind="$attrs">
        <h2>This is a base component</h2>
        <p>Hello, World!</p>
    </div>
  `
}