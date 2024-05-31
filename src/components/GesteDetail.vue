<template>
    <div id="main">
        <div id="hautContenu"></div>

        <div id="main-content">

            <a name="hautContenu"></a>

            <ul id="ariane" class="breadcrumbs">
                <li><RouterLink to="/" title="Retour à l'accueil" class="home">Accueil</RouterLink></li>
                <li>10 gestes simples</li>
                <li>{{geste.nom}}</li>
            </ul>

            <div id="zone1" class="contenu">
                <div class="complet">
                    <div :class="'bestiaire ' + geste.nom" style="overflow:hidden;">
                        <div class="colonne-texte">
                            <h1>{{geste.titre}}</h1>
                            <div>
                                <p v-html="geste.description"></p>
                            </div>
                        </div>
                        <div class="colonne-illust">
                            <div class="circle-text-dessus">
                                <p v-html="geste.impact"/>
                            </div>
                            <figure><img :src="store.imagesUrl + geste.image" class="imageBestiaire" :alt="geste.titre" :title="geste.titre" />
                                <figcaption>{{geste.titre}}</figcaption>
                            </figure>
                            <h4 class="tags">
                                <span v-for="tag in geste.tags">{{tag.nom}}</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="navig-gestes">
                <ul class="inline-list gestes-navigation">
                    <li><!-- LES GESTES -->
                        <div :class="geste.nom">
                            <a href="#" :title="geste.titre">
                                <figure>
                                    <img :src="store.imagesUrl + geste.image" :alt="geste.titre" :title="geste.titre" />
                                </figure>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import { useDefaultStore } from '../stores/index'
const store = useDefaultStore()


const route  = useRoute()
    

const geste = computed(() => {
    return store.gestes.length === 0 ? null : store.gestes[route.params.id]
})


</script>

<style scoped>

</style>