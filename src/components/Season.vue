<template>
    <router-link :to="{ name: 'EpisodeList', params: { SeasonId: Season.SeasonId } }">
        <div class="card" style="max-width: 250px; min-width: 250px;">
            <img
                v-bind:src="Season.Image"
                v-bind:alt="Season.ShortSeasonName"
                class="card-img-top mx-auto rounded"
                style="max-width: 250px; max-height: 375px; min-width: 250px; min-height: 375px;"
            />
            <div class="card-body text-center">
                <h5 class="card-title">Season {{Season.Number}}</h5>
                <p>{{Season.EpisodeCount}} episodes</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "Season",
    props: {
        Season: Object
    }
};
</script>
