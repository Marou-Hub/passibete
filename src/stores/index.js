import {defineStore} from 'pinia'
import Axios from 'axios'

export const useDefaultStore = defineStore({
    id: 'default',
    state: () => ({
        apiGestes: 'https://ntrugeon.lpmiaw.univ-lr.fr/passibete/public/api/gestes',
        apiTags: 'https://ntrugeon.lpmiaw.univ-lr.fr/passibete/public/api/tags',
        imagesUrl: 'https://ntrugeon.lpmiaw.univ-lr.fr/passibete/public/images/',
        gestesDepart: [],
        gestes: [],
        tags: []
    }),
    getters: {},
    actions: {
        loadData() {
            Axios.get(this.apiGestes)
                .then(response => response.data)
                .then((donneesGestes) => {
                    this.gestesDepart = donneesGestes['hydra:member']
                    // gestes est une copie de gestesDepart
                    this.gestes = [...this.gestesDepart]
                    return Axios.get(this.apiTags)
                })
                .then(response => response.data)
                .then((donneesTags) => {
                  console.log(donneesTags)
                    this.tags = donneesTags['hydra:member']
                })
        },
        filtre(nom) {
            // permet de filtrer les gestes par tag
            this.gestes = [...this.gestesDepart]
            if (nom !== 'Tous') {
                this.gestes = this.gestes.filter(g => g.tags.some(t => t.nom === nom))
            }
        },
    }
})
