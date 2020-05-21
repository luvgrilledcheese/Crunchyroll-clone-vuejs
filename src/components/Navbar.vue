<template>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">TP3</a>

        <div class="navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Library</router-link>
                </li>
                <li class="nav-item active"
                    v-if="this.$root.access_token == null">
                    <router-link class="nav-link" to="/SignUp">Sign Up</router-link>
                </li>
                <li class="nav-item active"
                    v-if="this.$root.access_token == null">
                    <router-link class="nav-link" to="/Login">Login</router-link>
                </li>
                <li class="nav-item active"
                    v-if="this.$root.access_token != null">
                    <router-link class="nav-link" to="/Profile">Profile</router-link>
                </li>
                <li class="nav-item active"
                    v-if="this.$root.access_token != null">
                    <router-link class="nav-link" to="/FavoriteShows">Favorite Shows</router-link>
                </li>
                <li class="nav-item active"
                    v-on:click="logout"
                    v-if="this.$root.access_token != null">
                    <span class="nav-link" style="cursor:pointer">Logout</span>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        logout: function () {
            this.$root.access_token = null;
            console.log("user disconnected succesfully");
            if (this.$route.path != "/") {
                this.$router.push("/");
            }
        },
    },
};
</script>

<style scoped></style>
