<template lang="pug">
  q-page
    .flex.flex-center#homeland
      q-card#search
        q-card-section
          q-form(@submit="onSubmit" @reset="onReset").q-gutter-md
            .q-gutter-md.row
              q-input(
                outlined
                bg-color="white"
                v-model="busca.cep"
                input-debounce="0"
                @keyup="buscaCep"
                mask="##.###-###"
                unmasked-value
                label="Cep"
              ).col-sm-2
              q-input(
                outlined
                bg-color="white"
                v-model="busca.uf"
                label="Estado"
              ).col-sm-1
              q-input(
                outlined
                bg-color="white"
                v-model="busca.localidade"
                label="Cidade"
              ).col-sm-3
              q-input(
                outlined
                bg-color="white"
                v-model="busca.bairro"
                label="Bairro"
              ).col-sm-3
            router-link(:to="{name: 'buscar', params: {busca} }")
              q-btn(label="Procurar" type="submit" color="primary")
            q-btn(label="limpar" type="reset" color="primary" flat).q-ml-sm
    #patrocinio
      h3 patrocionio
</template>
<style scoped>
#homeland {
  max-width: 100%;
  background-image: url("../assets/homeland.jpg");
  background-size: cover;
  height: 86vh;
}
#search{
  min-width: 80%;
  background: rgba(255,255,255,.8)
}
</style>
<script>
import Parse from 'parse'
// import VueCropper from '../components/VueCropper'
export default {
  components: {
    // VueCropper
  },
  data () {
    return {
      timeout: null,
      busca: {
        cep: null,
        estado: null,
        bairro: null,
        localidade: null
      }
    }
  },
  methods: {
    buscaCep (val) {
      // clear timeout variable
      clearTimeout(this.timeout)
      let self = this
      this.timeout = setTimeout(async function () {
        if (self.busca.cep && self.busca.cep.length === 8) {
          let params = {
            cep: self.busca.cep,
            selectedFile: null
          }
          let endereco = await Parse.Cloud.run('getAddressByCep', params)
          self.busca = endereco
        }
      }, 1000)
    },
    abortFilterFn () {
      // console.log('delayed filter aborted')
    },
    onSubmit () {
      this.$router.push('/buscar?' + this.busca)
    },
    onReset () {
      this.busca = {}
    }
  }
}
</script>
