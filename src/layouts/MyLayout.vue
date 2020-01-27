<template lang="pug">
  q-layout(view='lHh lpR fFf')
    q-header.bg-white.text-grey.q-pa-sm
      q-toolbar
        q-toolbar-title
          img(src='../assets/logo_transparent.png' style='width: 150px; cursor: pointer' @click="$router.push('/')")
        .flex.flex-center.q-gutter-x-md.menu
          a.link--hover(href='/imovel/cadastrar') ANUNCIAR
          a.link--hover(v-if='!$store.state.user.token' href='/login') ENTRAR
          a.link--hover(href='') CADASTRO
          a.link--hover(href='') CONTATO
          q-btn-dropdown(
            no-caps color="primary" flat
            v-if='$store.state.user.token'
          )
            template(v-slot:label)
              q-item
                q-item-section(avatar)
                  q-avatar
                    img()

                q-item-section
                  q-item-label
                    | Olá {{$store.state.user.user.fullName}}
                  q-item-label(caption)
                    | {{$store.state.user.user.userName}}
            q-list
            q-item(clickable @click="$router.push('/imovel/meus-anuncios')")
              q-item-section(avatar)
                q-avatar(icon="fas fa-plus")
              q-item-section
                q-item-label Meus Anuncios
    q-page-container
      router-view
</template>
<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
<style>
.menu > a {
  text-decoration: none;
  color: #444;
  font-size: 15px
}
.menu > a:hover {
  text-decoration: none;
  color: #444;
  font-size: 15px
}
.link--hover {
  line-height: 2.2;
  position: relative
}
.link--hover:after {
  transition: width 0.15s linear;
  will-change: width;
  background: currentColor;
  border-radius: 1px;
  bottom: -4px;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  width: 0
}
.link--hover:hover:after,
.link--hover[aria-selected]:after {
  width: 100%
}
.link--hover:active:after,
.link--hover:focus:after {
  width: 8px
}
</style>
