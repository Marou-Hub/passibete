<template>
    <aside>
      <ul class="tags">
        <li @click="store.filtre('Tous')">
          Tous
        </li>
        <!-- On boucle sur l'ensemble des tags -->
        <li v-for="tag in store.tags" @click="store.filtre(tag.nom)">
          {{tag.nom}}
        </li>
      </ul>
    </aside>
</template>

<script setup>
import {useDefaultStore} from "@/stores/index.js";

const store = useDefaultStore();

</script>