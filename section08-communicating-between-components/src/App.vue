<template>
  <div class="container">
    <vue-header></vue-header>
    <hr>
    <div class="row">
      <vue-servers></vue-servers>
      <vue-server-details></vue-server-details>
    </div>
    <hr>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

export default {
  components: {
    'vue-header': Header,
    'vue-servers': Servers,
    'vue-server-details': ServerDetails,
    'vue-footer': Footer
  }
}
</script>