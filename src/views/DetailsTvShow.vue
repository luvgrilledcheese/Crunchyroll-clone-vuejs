<template>
    <div class="container" v-if="TvShow != null">
        <div class="row mb-4">
            <div class="col-5">
                <img style="max-width: 450px; min-width: 450px;" v-bind:src="TvShow.Image" v-bind:alt="TvShow.Title">
            </div>
            <div class="col-7">
                <div class="row">
                    <div class="col-11">
                        <h2 >{{TvShow.Title}}</h2>
                    </div>
                    <div class="col-1"></div>
                    <h5 class="col-12">{{TvShow.Year}}</h5>
                    <div class="col-3">
                        <p >{{TvShow.EpisodeCount}} episodes</p>
                    </div>
                    <div class="col-2">
                        <p >{{TvShow.TVParentalGuideline}}</p>
                    </div>
                    <div class="col-7">
                        <p class="text-right">
                            <span v-for="g in TvShow.Genres" v-if="TvShow.Genres[TvShow.Genres.length - 1] != g">{{g.Name}}, </span>
                            <span v-else>{{g.Name}}</span>
                        </p>
                    </div>
                    <div class="col-2">
                        <p >Studio</p>
                    </div>
                    <div class="col-10">
                        <p >{{TvShow.Studio.Name}}</p>
                    </div><div class="col-12 text-justify">
                        <p >{{TvShow.Plot}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-3 mb-4" v-for="r in TvShow.Roles">
                <div class="card" style="min-width: 160px; max-width: 160px;">
                    <img v-bind:src="r.Image" v-bind:alt="r.Name" class="card-img-top mx-auto rounded role-img" style="min-width: 160px; max-width: 160px; min-height: 240px; max-height: 240px;">
                    <div class="card-body text-center" style="min-height: 140px;">
                        <p class="card-title small" style="font-weight: bold;">{{r.Name}}</p>
                        <p class="small">{{r.Character}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="s in TvShow.Seasons">
                <div class="card" style="max-width: 250px; min-width: 250px;">
                    <img v-bind:src="s.Image" v-bind:alt="s.ShortSeasonName" class="card-img-top mx-auto rounded" style="max-width: 250px; max-height: 375px; min-width: 250px; min-height: 375px;">
                    <div class="card-body text-center">
                        <h5 class="card-title">Season {{s.Number}}</h5>
                        <p>{{s.EpisodeCount}} episodes</p>
                    </div>
                </div>
            </div>
        </div>
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
            let url = `http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/tvshow?TvShowId=${this.TvShowId}`;
            console.log('url:', url);
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        console.log(response);
                    }
                    return response.json();
                }).then((data) => {
                    console.log(`data`);
                    this.TvShow = data;
                });
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
