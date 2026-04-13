export default {
  emits: ['update-count'],
  template: `
    <button @click="$emit('update-count', 1)">Click Me!</button>
  `,
}