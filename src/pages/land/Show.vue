<template lang="pug">
  q-page
    gallery(:images="images" :index="index" @close="index = null")
    .flex.flex-center
      .image(
        v-for="(image, imageIndex) in images"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
        :key="imageIndex"
      )
    p teste
</template>

<script>
import Parse from 'parse'
import VueGallery from 'vue-gallery'
export default {
  components: {
    'gallery': VueGallery
  },
  data () {
    return {
      land: {},
      images: [],
      index: null
    }
  },
  mounted () {
    this.getLands()
  },
  methods: {
    async getLands () {
      this.land = await Parse.Cloud.run('getLandById', { id: this.$route.params.id }).then(land => {
        land.imagens.forEach((image, index) => {
          this.images.push(image)
        })
      })
    }
  },
  props: ['busca']
}
</script>

<style>
img{
  max-width: 100%
}
.search-layout{
  max-width: 80%;
  margin: auto
}
.q-icon{
  font-size: 2em
}
.q-card{
  cursor: pointer;
}
.gallery {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  align-items: center
}
.image {
    min-width: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb
  }
</style>
