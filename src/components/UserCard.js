export default {
  name: 'UserCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
    },
  },
  template: `
    <div class="user-card">
      <h3>Заголовок: {{ title }}</h3>
      <p>Лайков: {{ likes }}</p>
      <p>Статус: {{ isPublished ? 'Опубликовано' : 'Черновик' }}</p>
    </div>
  `,
  styles: [`
    .user-card {
      width: 300px;
      border: 1px solid white;
      border-radius: 10px;
    }
  
    h3 {
      color: white;
      text-align: center;
    }
  `]
};