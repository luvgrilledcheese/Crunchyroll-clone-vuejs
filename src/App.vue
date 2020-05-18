<template>
    <div id="app">
        <navbar />
        <div style="min-height:20px;"></div>
        <router-view /><!--équivalent de RenderBody, c'est ici que la vue va être placée-->
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar.vue"
    export default {
        name: "App",
        components: {
            Navbar
        }
    };
</script>