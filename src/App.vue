<template>
    <div id="app">
        <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">TP3</a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

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
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div style="min-height:20px;"></div>
        <router-view /><!--équivalent de RenderBody, c'est ici que la vue va être placée-->
    </div>
</template>