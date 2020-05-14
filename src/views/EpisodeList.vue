<template>
    <div class="container" v-if="Season != null">
        <h1>{{ Season.EpisodeCount }} episodes</h1>
        <div class="row">
            <div
                class="col-md-4 col-sm-6 col-12 mb-4"
                v-for="Episode in Season.Episodes"
                v-bind:key="Episode.EpisodeId">
                <router-link
                    v-bind:to="{ name: 'DetailsEpisode', params: { EpisodeId: Episode.EpisodeId } }">
                    <div class="card">
                        <img
                            class="card-img-top mx-auto rounded"
                            v-bind:src="Episode.Image"
                            v-bind:alt="Episode.Title"
                        />
                        <div class="card-body text-center">
                            <h5 class="card-title">{{ Episode.Title }}</h5>
                            <p>Episode {{ Episode.Number }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EpisodeList",
        props: {
            SeasonId: Number
        },
        data: function() {
            return {
                Season: null
            };
        },
        methods: {
            GetDataEpisodes: function() {
                fetch(`${this.$root.$data.srvURL}/api/episodes?SeasonId=${this.SeasonId}`)
                    .then(response => {
                        if (!response.ok) throw response;
                        return response.json();
                    })
                    .then(data => {
                        this.Season = data;
                    })
                    .catch(error => {
                        error.json().then(errorMessage => {
                            console.error(errorMessage);
                        });
                    });;
            }
        },
        mounted: function() {
            this.GetDataEpisodes();
        }
    };
</script>

<style scoped>
    a {
        text-decoration: none !important;
        color: black;
    }
    div.card {
        max-width: 325px;
        min-width: 325px;
    }
    img {
        max-width: 325px;
        max-height: 180px;
        min-width: 325px;
        min-height: 180px;
    }
    h5.card-title {
        max-height: 50px;
    }
</style>
