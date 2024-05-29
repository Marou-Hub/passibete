<script setup>
import logo from './assets/images/pas-si-bete.png'
import { onMounted } from 'vue'
import { useDefaultStore } from './stores/index'
const store = useDefaultStore()

onMounted(() => {
  store.loadData()
})


</script>

<template>
  <header>
    <h1>
      <img :src="logo" alt="pas si bête">
      <p>MORENO Juliette</p>
    </h1>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>

</style>
