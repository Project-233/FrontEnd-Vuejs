<template>
<div class="test">
    <input type="text">
    <hr>
    <h2>Hello, {{ man }}</h2>
</div> 
</template>

<script>

// @ is an alias to /src
// import Desktop from '@/components/Foo.vue'

export default {
  name: 'test',
/*
  props: {
    man: String
  },
*/
  data(){
	return {
	   man: 'Denys'
	}
  }
/*
  components: {
    Foo
  }
*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
