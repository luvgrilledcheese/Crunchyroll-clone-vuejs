<template>
    <div class="container" v-if="Episode != null">
        <div class="row mb-4">
            <div class="col-5">
                <img v-bind:src="Episode.Image" v-bind:alt="Episode.Title" style="max-width: 450px; min-width: 450px;"/>
            </div>
            <div class="col-7">
                <div class="row">
                    <div class="col-12"><h1></h1></div>
                    <div class="col-12">
                        <h3>{{Episode.Season.ShortSeasonName}}
                            <span> - </span>
                            <span>{{Episode.E00Format}}</span>
                            <span> - </span>
                            <span>{{Episode.Title}}</span>
                        </h3>
                    </div>
                    <div class="col-2">
                        <p>{{Episode.Runtime}}</p>
                    </div>
                    <div class="col-10">
                        <p>{{Episode.Season.TvShow.TVParentalGuideline}}</p>
                    </div>
                    <div class="col-12">
                        <p class="text-justify">{{Episode.Plot}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailsEpisode",
    props: ["EpisodeId"],
    data: function() {
        return {
            Episode: null
        };
    },
    methods: {
        GetEpisode: function() {
            let url = `http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/episode?EpisodeId=${this.EpisodeId}`;
            console.log("url:", url);
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        console.log(response);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(`data`);
                    this.Episode = data;
                });
        }
    },
    mounted: function() {
        this.GetEpisode();
        }
};
</script>

<style>
</style>