<template>
    <div class="container">
        <h1>{{Season.EpisodeCount}} episodes</h1>
        <div class="row">
            <div class="col-md-4 col-sm-6 col-12 mb-4" v-for="e in Season.Episodes" v-bind:key="e.EpisodeId">
                <Episode v-bind:Episode="e"/>
            </div>
        </div>
    </div>
</template>

<script>
import Episode from "@/components/Episode.vue"
export default {
    name: "EpisodeList",
    components: {
        Episode
    },
    props: ["SeasonId"],
    data: function () {
        return {
            Season: null,
        };
    },
    methods: {
        GetSeason: function () {
            let url = `http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/episodes?SeasonId=${this.SeasonId}`;
            console.log('url:', url);
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        console.log(response);
                    }
                    return response.json();
                }).then((data) => {
                    console.log(`data`);
                    this.Season = data;
                });
        },
    },
    mounted: function () {
        this.GetSeason();
    },
};
</script>

<style scoped>
    a {
        text-decoration: none !important;
        color: black;
    }

    .form-inline .form-group {
        margin-right: 20px;
    }

    .form-inline .form-group label {
        margin-right: 10px;
    }
</style>