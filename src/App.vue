<template>
  <div id="app">
    <mall msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
    import mall from './components/mall.vue'

    export default {
        name: 'app',
        components: {
            mall
        }
    }
</script>

<style lang="less">
    * {
        padding: 0;
        margin: 0;
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>