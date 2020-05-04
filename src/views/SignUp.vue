<template>
    <div class="container">
        <h2 style="text-align:center">Sign Up</h2>
        <form>
            <div class="form-group row">
                <label for="email" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                    <input type="email" class="form-control" id="email" placeholder="Email"/>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-3 col-form-label">Password</label>
                <div class="col-sm-9">
                    <input type="password" class="form-control" id="password" placeholder="Password" />
                </div>
            </div>
            <div class="form-group row">
                <label for="passwordconfirm" class="col-sm-3 col-form-label">Password Confirmation</label>
                <div class="col-sm-9">
                    <input type="password" class="form-control" id="passwordconfirm" placeholder="Password" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" v-on:click="SignUp" class="btn btn-primary">Sign up</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "SignUp",
    methods: {
        //est appellée lorsque le bouton SignUp est cliqué
        SignUp : function () {
            //appeller la méthode /api/createuser avec les données
        }
    }
};
</script>
