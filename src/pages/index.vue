<template>
	<div class="MainPage">
		
		<Header v-if = "msg != '#/Joinuser'"/>
		<router-view />
		<Footer />
	</div>
</template>

<script>

import Header from '@/components/Header.vue';

import Footer from '@/components/Footer.vue';

export default {
	name:"main_page",

	components: {
	    
		Header,
		
		Footer
	},
	data () {
    return {
      msg: window.location.hash
    }
  }
}
</script>