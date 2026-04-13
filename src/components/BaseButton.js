export default {
  name: 'BaseButton',
  inheritAttrs: false,
  template: `
    <div>
        <button v-bind="$attrs" class="btn-base">Click Me!</button>
    </div>
  `
}