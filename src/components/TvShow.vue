<template>
    <router-link :to="{ name: 'DetailsTvShow', params: { TvShowId: TvShow.TvShowId } }">
        <div class="card round ed">
            <img class="card-img-top" :src="TvShow.Image" />
            <div class="card-body text-center" style="max-heigth:210px;">
                <h4 class="card-title" style="min-height:50px;max-height:50px;">{{TvShow.Title}}</h4>
                <!--afficher SeasonCount suivi du mot "season" si SeasonCount est égal à 1-->
                <div v-if="TvShow.SeasonCount === 1">1 season</div>
                <!--afficher SeasonCount suivi du mot seasons si SeasonCount est plus grand que 1-->
                <div v-else>{{TvShow.SeasonCount}} seasons</div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "TvShow",
    props: {
        TvShow : Object
    }
};
</script>

<style scoped>

</style>