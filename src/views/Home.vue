<template>
    <div class="container">
        <form class="form-inline">
            <div class="form-group mb-4">
                <label for="Title">Title:</label>
                <input id="Title" v-model="TitleFilter" class="form-control"
                       placeholder="Title filter" type="text"
                       style="min-width:240px;"/>
            </div>
            <div class="form-group mb-4">
                <label for="GenreId">Genre:</label>
                <select class="form-control" id="GenreId" style="min-width:240px;" v-model="GenreFilter">
                    <option value=""></option>
                    <option v-for="g in Genres" v-bind:value="g.GenreId" v-bind:key="g.GenreId">{{g.Name}}</option>
                </select>
            </div>
            <div class="form-group mb-4">
                <label for="StudioId">Studio:</label>
                <select id="StudioId"  v-model="StudioFilter" class="form-control" style="min-width:240px;">
                    <option value=""></option>
                    <option v-for="s in Studios" v-bind:value="s.Name" v-bind:key="s.GenreId">{{s.Name}}</option>
                </select>
            </div>
        </form>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-12 mb-4" v-for="t in TvShows" v-bind:key="t.TvShowId">
                <TvShow v-bind:TvShow="t"/>
            </div>
        </div>
    </div>
</template>

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

<script>
import TvShow from "@/components/TvShow.vue";
export default {
    name: "Home",
    components: {
        TvShow
    },
    data: function() {
        return {
            Genres: null,
            Studios: null,
            TvShows: null,
            GenreFilter: "",
            TitleFilter: "",
            StudioFilter: "",
        };
    },
    watch: {
        GenreFilter: function () {
            this.RefreshDataSeries();
        },
        TitleFilter: function (val) {
            this.RefreshDataSeries();
        },
        StudioFilter: function (val) {
            this.RefreshDataSeries();
        }
    },
    methods: {
        RefreshDataGenres: function() {
            fetch('http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/genres')
                .then((response) => {
                    if (!response.ok) {
                        console.log(response);
                    }
                    return response.json();
                }).then((data) => {
                    console.log(data);
                    this.Genres = data;
                });
        },
        RefreshDataStudios: function() {
            fetch('http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/studios')
                .then((response) => {
                    if (!response.ok) {
                        console.log(response);
                    }
                    return response.json();
                }).then((data) => {
                    console.log(data);
                    this.Studios = data;
                });
        },
        RefreshDataSeries: function() {
            let url = `http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/tvshows?TitleFilter=${this.TitleFilter}&StudioFilter=${this.StudioFilter}&GenreFilter=${this.GenreFilter}`;
            console.log('url:', url);
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        console.log(response);
                    }
                    return response.json();
                }).then((data) => {
                    console.log(`data`);
                    this.TvShows = data;
                });
        }
    },
    mounted: function() {
        this.RefreshDataGenres();
        this.RefreshDataStudios();
        this.RefreshDataSeries();
    }
};
</script>


//exemple prof: http://tvshowclient.sv55.cmaisonneuve.qc.ca/#/DetailsTvShow/17
//api:          http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/tvshow?TvShowId=17

// 3 users
// admin@site.com     admin
// donator@site.com   donator
// member@site.com    member