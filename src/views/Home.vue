<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Desktop msg="Welcome to Key Concepts of Vuejs"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Desktop from '@/components/Desktop.vue'

export default {
  name: 'home',
  components: {
    Desktop
  }
}
</script>
