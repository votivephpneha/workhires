<template>
  <div
    class="HomePage"
    @scroll="onScroll()"
  >
      <Banner />
      <Featuredservices />
      <Discoverservices />
      <Clients />
      <Talant />
      <Highestrated />
      <Workgame />
  </div>
</template>
<script>


import Banner from '@/components/Banner.vue';
import Featuredservices from '@/components/Featuredservices.vue';
import Discoverservices from '@/components/Discoverservices.vue';
import Clients from '@/components/Clients.vue';
import Talant from '@/components/Talant.vue';
import Highestrated from '@/components/Highestrated.vue';
import Workgame from '@/components/Workgame.vue';


export default {
  name:"HomePage",

  components: {
    Banner,
    Featuredservices,
    Discoverservices,
    Clients,
    Talant,
    Highestrated,
    Workgame
  }
}
</script>