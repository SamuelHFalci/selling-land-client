<template lang="pug">
  q-layout.search-layout
    q-page.q-mt-lg
      q-card(v-for="land in lands" :key="land.objectId" @click="$router.push('/imovel/'+land.objectId)").q-mb-md
        .row
          .col-4
            img(:src="land.image._url")
          .col-8.q-pa-md.q-gutter-md
            .text-h4 R$ {{land.preco}}
            .text-light {{land.descricao}}
            p {{land.endereco.localidade}} / {{land.endereco.uf}} - bairro {{land.endereco.bairro}}
            .text-center.q-gutter-x-md
              q-icon(name="fa fa-water" v-if="land.agua")
              q-icon(name="far fa-lightbulb" v-if="land.luz")
</template>

<script>
import Parse from 'parse'
export default {
  data () {
    return {
      lands: []
    }
  },
  mounted () {
    this.getLands()
  },
  methods: {
    async getLands () {
      let params = {
        filter: {
          user: this.$store.state.user.user.objectId,
          tipoArea: 'comercial'
        }
      }
      this.lands = await Parse.Cloud.run('findLands', params)
      console.log(this.lands)
    }
  }
}
</script>

<style>
img {
  max-width: 100%;
}
.search-layout {
  max-width: 80%;
  margin: auto;
}
.q-icon {
  font-size: 2em;
}
.q-card {
  cursor: pointer;
}
</style>
