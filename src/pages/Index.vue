<template>
  <q-page class="flex flex-center">
    <q-uploader @added="saveLand">teste</q-uploader>
    <q-btn @click="buscaCep()">Buscar</q-btn>
  </q-page>
</template>

<script>
import Parse from 'parse'
export default {
  name: 'PageIndex',
  data () {
    return {
      cep: null,
      land: {
        endereco: {
          rua: 'Rua Tal',
          numero: 'tal'
        },
        images: {}
      }
    }
  },
  mounted () {
    // Parse.Cloud.run('testando123').then(data => {
    //   console.log(data)
    // })
  },
  methods: {
    buscaCep () {
      let params = {
        cep: this.cep,
        selectedFile: null
      }
      Parse.Cloud.run('getAddressByCep', params).then(data => {
        console.log(data)
      })
    },
    async saveLand (file) {
      let imagem = await new Parse.File('teste', file[0]).save()
      console.log(imagem)
      let params = {
        endereco: {
          rua: 'tal'
        },
        tamanho: 280,
        preco: 75000,
        tipoArea: 'comercial',
        imagem: imagem
      }
      // let params = this.land
      Parse.Cloud.run('saveLand', params).then(data => {
        console.log(data)
      })
    }
  }
}
</script>
