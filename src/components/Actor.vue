<template>
    <div class="card" style="min-width: 160px; max-width: 160px;">
        <img
            v-bind:src="Actor.Image"
            v-bind:alt="Actor.Name"
            class="card-img-top mx-auto rounded role-img"
            style="min-width: 160px; max-width: 160px; min-height: 240px; max-height: 240px;"
        />
        <div class="card-body text-center" style="min-height: 140px;">
            <p class="card-title small" style="font-weight: bold;">{{Actor.Name}}</p>
            <p class="small">{{Actor.Character}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Actor",
    props: {
        Actor : Object
    }
}
</script>

<style>

</style>