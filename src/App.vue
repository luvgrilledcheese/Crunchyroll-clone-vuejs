<template>
    <div id="app">
        <nav id="nav" class="navbar navbar-expand navbar-light bg-light" style="margin-bottom:20px">
            <router-link class="navbar-brand" to="/">TP3</router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Library</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/SignUp">Sign Up</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/Login">Login</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/Profile">Profile</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/FavoriteShows">Favorite Shows</router-link>
                    </li>
                    <li class="nav-item active">
                        <span class="nav-link" style="cursor:pointer">Logout</span>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "App"
    };
</script>
