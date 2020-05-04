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
                </select>
            </div>
            <div class="form-group mb-4">
                <label for="StudioId">Studio:</label>
                <select id="StudioId"  v-model="StudioFilter" class="form-control" style="min-width:240px;">
                    <option value=""></option>
                </select>
            </div>
        </form>
        <div class="row">
            <div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                    <!--<router-link :to="{ name: 'DetailsTvShow', params: { TvShowId: XYZ.TvShowId } }">-->
                        <div class="card rounded">
                            <img class="card-img-top" />
                            <div class="card-body text-center" style="max-heigth:210px;">
                                <h4 class="card-title" style="min-height:50px;max-height:50px;">
                                </h4>
                                <!--afficher SeasonCount suivi du mot "season" si SeasonCount est égal à 1-->
                                <div></div>
                                <!--afficher SeasonCount suivi du mot seasons si SeasonCount est plus grand que 1-->
                                <div></div>
                            </div>
                        </div>
                    <!--</router-link>-->
                </div>
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
export default {
    name: "Home",
    data: function() {
        //définit les données de la vue.  Dans ce cas-ci, un tableau de pokemons, habitats, espèces (species) et poketypes
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
