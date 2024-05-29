<template>
  <div id="main">
    <div id="hautContenu"></div>
    <div id="main-content">
      <a name="hautContenu"></a>
      <ul id="ariane" class="breadcrumbs">
          <li><a href="#" title="Retour à l'accueil" class="home">Accueil</a></li>
          <li>10 gestes simples</li>
          <li>{{ tag }}</li>
      </ul>
    </div>
    <div id="ecogestes">
      <div v-for="geste in store.gestes">
        <!-- on veut affichier tous les gestes issus de l'API ici -->
        <RouterLink :to="{name: 'gesteDetail', params: {id:store.id - 1000}}">
          <UnGeste :geste="geste" :position="store.id"/>
        </RouterLink>
        {{ store.increment() }}
      </div>
      <div class="article-accueil">
        <h2>
          <a href="#" title="Et encore..." class="">Et encore...</a>
        </h2>
      </div>
    </div>
    <!-- Tags -->
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useDefaultStore } from '../stores/index.js';
  import UnGeste from './UnGeste.vue';

  const tag = ref('Tous');
  const store = useDefaultStore();
  store.loadData();


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
