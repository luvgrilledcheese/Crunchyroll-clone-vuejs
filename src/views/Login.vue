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
                        v-model="email"
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
                        v-model="password"
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-3"></div>
                <div class="col-9">
                    <button type="submit" class="btn btn-primary" v-on:click.prevent="getToken">Login</button>
                </div>
            </div>
            <div class="form-group row" v-if="errorText!=''">
                <div class="col-3"></div>
                <div id="diverror" class="col-9">
                    <div
                        id="msgerror"
                        class="alert alert-danger"
                        style="display:inline-block;margin:0 auto;"
                        role="alert"
                    >{{errorText}}</div>
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
            email: "",
            password: "",
            errorText: ""
        };
    },
    methods: {
        getToken: function() {
            let tokenURL = 'http://tvshowapi.sv55.cmaisonneuve.qc.ca/token';
            let encodedUserName = encodeURIComponent(this.email);
            let encodedPassword = encodeURIComponent(this.password);
            let bodyContent = `grant_type=password&username=${encodedUserName}&password=${encodedPassword}`;

            fetch(tokenURL, {
                method: "POST",
                body: bodyContent,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (response) {
                if (!response.ok) { throw response; }
                return response.json();
            }).then((data) => {
                console.log(data);
                this.$root.access_token = data.access_token;
                this.$root.isConnected = true;
                console.log("user connected succesfully");
                this.$router.push("/");
            }).catch((error) => {
                error.json().then(errorMessage => {
                    //traiter l'erreur
                    console.error(errorMessage);
                    if (errorMessage.error_description != null)
                        this.errorText = errorMessage.error_description;
                });
                
            });
        }
    }
};
</script>