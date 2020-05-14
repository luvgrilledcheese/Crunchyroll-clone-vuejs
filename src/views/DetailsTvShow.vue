<template>
    <div class="container" v-if="TvShow != null">
        <!--Complétez le html nécessaire pour l'affichage -->
        <!--Vous devez avoir complété la méthode GetTvShow -->
    </div>
</template>

<script>
export default {
    name: "DetailsTvShow",
    props: ["TvShowId"],
    data: function () {
        return {
            TvShow: null,
        };
    },
    methods: {
        GetTvShow: function () {
            //L'objectif est d'appeller l'api /api/tvshow?TvShowId=X où X est
            //TvShowId reçu en paramètre, soit la propriété this.TvShowId
            //Placez les données reçues dans la propriété this.TvShow
            //Complétez..
            //fetch(...
        },
    },
    mounted: function () {
        this.GetTvShow();
    },
};
</script>

<style scoped>
a {
    text-decoration: none !important;
    color: black;
}
</style>
