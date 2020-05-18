<template>
    <router-link :to="{ name: 'DetailsEpisode', params: { EpisodeId: Episode.EpisodeId } }">
    <div class="card">
        <img v-bind:src="Episode.Image" v-bind:alt="Episode.Title" class="card-img-top mx-auto rounded">
        <div class="card-body text-center">
            <h5>{{Episode.Title}}</h5>
            <p>Episode {{Episode.Number}}</p>
        </div>
    </div>
    </router-link>
</template>

<script>
export default {
    name: "Episode",
    props: {
        Episode : Object
    }
};
</script>

<style>

</style>