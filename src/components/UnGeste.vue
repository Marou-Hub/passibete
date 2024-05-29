<template>
    <div class="flip-container" >
        <div :class="'flipper ' + geste.nom">
            <div class="front">
                <figure><img :src="store.imagesUrl + geste.image" :alt="geste.nom" :title="geste.nom" />
                    <figcaption>{{geste.nom}}</figcaption>
                </figure>
            </div>
            <div class="back">
                <div>
                    <div>
                        <h2>{{geste.titre}}</h2>
                        <p>{{geste.impact}}</p>
                        <a class="lien-global" href="#" :title="geste.nom">En savoir plus</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useDefaultStore } from '../stores/index.js';

    const props = defineProps({
        geste: Object,
        position: Number
    });

    const store = useDefaultStore();
</script>

<style scoped>

</style>