<template lang="pug">
  q-page.flex.flex-center
    .q-pa-md
      q-form(
        @submit="saveLand"
        @reset="onReset"
      )
        .row.q-gutter-md.justify-center.q-mb-lg
            q-btn(type="submit" color="primary" label="Salvar" style="min-width: 50%")
        .row.q-gutter-md
          .q-col-sm-3.q-gutter-md
            q-input(
              outlined
              bg-color="white"
              v-model="land.endereco.cep"
              input-debounce="0"
              @keyup="buscaCep"
              mask="##.###-###"
              unmasked-value
              label="Cep"
            )
            q-input(outlined v-model="land.endereco.localidade" label="Cidade")
            q-input(outlined v-model="land.endereco.logradouro" label="Logradouro")
            q-input(outlined v-model="land.endereco.bairro" label="Bairro")
          .q-col-sm-3.q-gutter-md
            q-input(outlined v-model="land.endereco.uf" label="Estado")
            q-input(outlined v-model="land.tamanho" label="Tamanho M²")
            q-input(outlined v-model="land.preco" label="Valor R$")
            q-select(outlined v-model="land.tipoArea" label="Tipo de Região" :options="selectOptions" emit-value map-options)
          .q-col-sm-3.q-gutter-md
            q-uploader(@added="addImgPrincipal" label="Imagem Principal")
          .q-col-sm-3.q-gutter-md
            q-uploader(@added="addImgOutras" label="Outras Imagens" multiple)
</template>

<script>
import Parse from 'parse'
export default {
  name: 'PageIndex',
  data () {
    return {
      land: {
        endereco: {
          cep: '',
          localidade: '',
          bairro: '',
          uf: ''
        },
        image: null,
        imagens: []
      },
      images: [],
      selectOptions: [
        { label: 'Area Comercial', value: 'comercial' },
        { label: 'Area Residencial', value: 'residencial' }
      ]
    }
  },
  mounted () {
    // let params = {
    //   id: 'Wllou4wn98'
    // }
    // Parse.Cloud.run('getLandById', params).then(data => {
    //   this.land = data
    // })
  },
  methods: {
    async addImgPrincipal (files) {
      if (files) {
        this.land.image = await new Parse.File('teste', files[0]).save()
      }
    },
    async addImgOutras (files) {
      if (files) {
        files.forEach(async file => {
          this.land.imagens.push(await new Parse.File('teste', file).save())
        })
      }
    },
    buscaCep (val) {
      // clear timeout variable
      clearTimeout(this.timeout)
      let self = this
      this.timeout = setTimeout(async function () {
        if (self.land.endereco.cep && self.land.endereco.cep.length === 8) {
          let params = {
            cep: self.land.endereco.cep,
            selectedFile: null
          }
          let endereco = await Parse.Cloud.run('getAddressByCep', params)
          self.land.endereco = endereco
        }
      }, 1000)
    },
    async onReset () {
    },
    async saveLand () {
      // let imagem = await new Parse.File('teste', file[0]).save()
      let params = this.land
      params['user'] = this.$store.state.user.user.userName
      // let params = this.land
      Parse.Cloud.run('saveLand', params).then(data => {
      })
    }
  }
}
</script>
