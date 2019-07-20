// demo1.js

export default {
  template: `
    <div>
      <p v-if="isShow">121212</p>
			<button @click="increment">click</button>
    </div>
  `,

  data () {
    return {
      isShow: false
    }
  },

  methods: {
    increment () {
			this.isShow = !this.isShow;
    }
  }
}
