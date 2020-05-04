<template>
    <div class="container">
        <h2 style="text-align:center">Login</h2>
        <form>
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" placeholder="Email"/>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="password" placeholder="Password" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </div>
            <div id="diverror" class="row" style="display:none">
                <div id="msgerror" class="alert alert-danger" style="display:inline-block;margin:0 auto;" role="alert">
                Une erreur s'est produite.
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    methods: {
        //est appellée lorsque le bouton Login est cliqué
        Login : function () {
            //appeller la méthode /token pour obtenir un bearer token et
            //permettre l'accès aux méthodes protégées par authentification
        }
    }
};
</script>
