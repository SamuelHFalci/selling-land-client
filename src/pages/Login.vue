<template lang="pug">
  q-page
    .row.justify-center
      .col-auto
        q-card.my-login
          q-card-section.bg-grey-1.q-ma-sm
            .row.justify-center
              .col-auto
                img(src='../assets/logo_transparent.png' style='max-width: 200px')
          q-card-section
            .row.justify-center.q-mb-md
              .text-h5.text-center.lema
                | Faça login para anunciar seus imóveis
          q-card-section
            .column
              .col.q-mb-sm
                q-input(v-model='username' placeholder='Nome de usuário' outlined color='orange-5' dense)
              .col
                q-input(v-model='password' type='password' placeholder='Senha' @keyup.enter='login' outlined color='orange-5' dense)
          q-card-section
            .row.justify-center
              .col-auto
                q-btn.q-ma-sm(color='amber-10' loader @click='login' no-caps label='Entrar' style='width: 150px')
          q-card-section
            .row.justify-between
              a.linkLingo.cursor-pointer(flat rounded @click.prevent='showNewAccount' no-caps) Criar Conta
              a.linkLingo.cursor-pointer(flat rounded @click.prevent='showResetPassword' no-caps) Esqueci a senha

          //- q-stepper-navigation
          //-   q-btn(flat @click="step = 2" color="primary" label="Voltar" class="q-ml-sm")
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      await this.$store.dispatch('user/ActionLogin', {
        username: this.username,
        password: this.password
      })
    },
    showResetPassword () {
      this.$router.push('/login/reset-password')
    },
    showNewAccount () {
      this.$router.push('/login/new-account')
    }
  }
}
</script>

<style>
.my-login {
  max-width: 400px;
  margin-top: 80px;
}
</style>
