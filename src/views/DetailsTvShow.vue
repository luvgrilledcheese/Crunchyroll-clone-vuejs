<template>
    <div class="container" v-if="TvShow != null">
        <div class="row mb-4">
            <div class="col-5">
                <img style="max-width: 450px; min-width: 450px;" v-bind:src="TvShow.Image" v-bind:alt="TvShow.Title">
            </div>
            <div class="col-7">
                <div class="row">
                    <div class="col-8">
                        <h2 >{{TvShow.Title}}</h2>
                    </div>
                    <div class="col-4" v-if="this.$root.access_token != null" style="text-align: right;">
                        <div>
                            <button class="btn btn-danger" id="RemoveFavorite" v-if="this.favoris" v-on:click="RemoveFavoris">Remove Favorite</button>
                            <button class="btn btn-success" id="AddFavorite" v-if="!this.favoris" v-on:click="AddFavoris">Add Favorite</button>
                        </div>
                    </div>
                    <h5 class="col-12">{{TvShow.Year}}</h5>
                    <div class="col-3">
                        <p >{{TvShow.EpisodeCount}} episodes</p>
                    </div>
                    <div class="col-2">
                        <p >{{TvShow.TVParentalGuideline}}</p>
                    </div>
                    <div class="col-7">
                        <p class="text-right">
                            <span v-for="g in TvShow.Genres" v-if="TvShow.Genres[TvShow.Genres.length - 1] != g" v-bind:key="g.GenreId">{{g.Name}}, </span>
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
            <div class="col-lg-2 col-md-2 col-sm-3 mb-4" v-for="r in TvShow.Roles" v-bind:key="r.RoleId">
                <Actor v-bind:Actor="r"/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="s in TvShow.Seasons" v-bind:key="s.SeasonId">
                <Season v-bind:Season="s"/>
            </div>
        </div>
    </div>
</template>

<script>
import Actor from "@/components/Actor.vue";
import Season from "@/components/Season.vue";
export default {
    name: "DetailsTvShow",
    components: {
        Actor,
        Season
    },
    props: ["TvShowId"],
    data: function () {
        return {
            TvShow: null,
            favoris: null,
            btnFavoris: "Add Favorite"
        };
    },
    methods: {
        GetTvShow: function () {
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
        GetFavoris: function() {
            let bearerToken = 'bearer ' + this.$root.access_token;
            let url = `http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/userfavorites?TvShowId=${this.TvShowId}`;
            fetch(url, {
                method: "GET",
                headers: {
                    'Authorization' : bearerToken,
                }
            }).then(function (response) {
            if (!response.ok) { throw response; }
            return response.json();
            }).then((data) => {
                this.favoris = data;
                console.log("this.favoris: " + this.favoris);
            }).catch((error) => {
                console.log("GetFavoris ne fonctionne pas");
            });
        },
        AddFavoris: function() {
            let bearerToken = 'bearer ' + this.$root.access_token;
            let url = `http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/userfavorites?TvShowId=${this.TvShowId}`;
            fetch(url, {
                method: "POST",
                headers: {
                    'Authorization' : bearerToken,
                }
            })
            this.favoris = true;
        },
        RemoveFavoris: function() {
            let bearerToken = 'bearer ' + this.$root.access_token;
            let url = `http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/userfavorites?TvShowId=${this.TvShowId}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    'Authorization' : bearerToken,
                }
            })
            this.favoris = false;
        }
    },
    mounted: function () {
        this.GetTvShow();
        this.GetFavoris();
    },
};
</script>

<style scoped>
a {
    text-decoration: none !important;
    color: black;
}
</style>
