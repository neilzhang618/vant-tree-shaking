<template>
  <div id="app">
    <van-button type="primary" @click="sayHello">主要按钮</van-button>
    <van-switch v-model="checked" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      checked: true,
    }
  },
  watch: {
    checked(val) {
      console.log('index switch clicked', val)
    }
  },
  methods: {
    sayHello() {
      alert('hello')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
