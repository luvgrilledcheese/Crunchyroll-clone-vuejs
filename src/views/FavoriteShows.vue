<template>
    <div class="container">
        <div class="row">
            <h1 id="errorMsg"></h1>
            <div class="col-lg-3 col-md-4 col-12 mb-4" v-for="t in TvShows" v-bind:key="t.TvShowId">
                <TvShow v-bind:TvShow="t"/>
            </div>
        </div>
    </div>
</template>

<script>
import TvShow from "@/components/TvShow.vue";
    export default {
        name: "FavoriteShows",
        components: {
            TvShow
        },
        data: function(){
            return {
                TvShows: null
            }
        },
        methods: {
            getFavoris: function() {
                let bearerToken = 'bearer ' + this.$root.access_token;
                let url = 'http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/favoriteTvShows';
                fetch(url, {
                    method: "GET",
                    headers: {
                        'Authorization' : bearerToken,
                    }
                }).then(function (response) {
                if (!response.ok) { throw response; }
                return response.json();
                }).then((data) => {
                    console.log(data);
                    this.TvShows = data;
                    if (data.length == 0){
                        document.getElementById("errorMsg").classList.add("text-danger");
                        document.getElementById("errorMsg").innerHTML = "You must add a TvShow to your favorites first!";
                    }
                }).catch((error) => {
                    console.log("ca ne fonctionne pas")
                    document.getElementById("errorMsg").classList.add("text-danger");
                    document.getElementById("errorMsg").innerHTML = "Something went wrong <br />" + error.statusText;
                });
            }
        },
    mounted: function() {
        this.getFavoris();
    }
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
