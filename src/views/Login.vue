<template>
    <div class="container">
        <h2 style="text-align:center">Login</h2>
        <form id="frmLogin">
            <div id="grpEmail" class="form-group row">
                <label for="email" class="col-3 col-form-label">Email</label>
                <div class="col-9">
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Email"
                        required
                        maxlength="100"
                    />
                </div>
            </div>
            <div id="grpPassword" class="form-group row">
                <label for="password" class="col-3 col-form-label">Password</label>
                <div class="col-9">
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password"
                        required
                        minlength="4"
                        maxlength="15"
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-3"></div>
                <div class="col-9">
                    <button type="submit" v-on:click="Login" class="btn btn-primary">
                        Login
                    </button>
                </div>
            </div>
            <div class="form-group row" v-if="errorText != ''">
                <div class="col-3"></div>
                <div id="diverror" class="col-9">
                    <div
                        id="msgerror"
                        class="alert alert-danger"
                        style="display:inline-block;margin:0 auto;"
                        role="alert">
                        {{errorText}}
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: function() {
            return {
                errorText: ""
            };
        },
        methods: {
            //est appellée lorsque le bouton Login est cliqué
            Login: function() {
                //appeller la méthode /token pour obtenir un bearer token et
                //permettre l'accès aux méthodes protégées par authentification
                //sauvegarder le bearer token dans localStorage
                this.errorText = "";
                let valid = document.getElementById("frmLogin").checkValidity();
                if (valid) {
                    console.log("formulaire validé");
                }
            }
        }
    };
</script>
