<template>
  <div id="app">
    <van-badge :content="count">
      <div class="child" />
    </van-badge>
    <van-switch v-model="checked" />
  </div>
</template>

<script>

export default {
  name: 'App2',
  data() {
    return {
      checked: true,
      count: 5,
    }
  },
  watch: {
    checked(val) {
      console.log('subpage switch clicked', val)
      this.count++
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

.child {
  width: 36px;
  height: 36px;
  background: #f2f3f5;
  border-radius: 4px;
}
</style>
