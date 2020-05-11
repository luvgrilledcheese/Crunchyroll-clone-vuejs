<template>
    <div class="container">
        <div v-if="this.$root.access_token == null">
            <h2 class="text-danger">
                Cette page est réservée aux utilisateurs connectés.
            </h2>
        </div>
        <div v-else>
            <h2 style="text-align:center">Profile</h2>
            <form id="profile">
                <div class="form-group row">
                    <label for="email" class="col-3 col-form-label"
                        >Email</label
                    >
                    <div class="col-9">
                        <input
                            type="email"
                            class="form-control"
                            v-model="email"
                            id="email"
                            placeholder="Email"
                            required
                            maxlength="100"
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-3 col-form-label"
                        >Password</label
                    >
                    <div class="col-9">
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Password"
                            minlength="4"
                            maxlength="15"
                            v-model="password"
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="passwordconfirm" class="col-3 col-form-label"
                        >Password Confirmation</label
                    >
                    <div class="col-9">
                        <input
                            type="password"
                            class="form-control"
                            id="passwordconfirm"
                            placeholder="Password"
                            minlength="4"
                            maxlength="15"
                            v-model="passwordconfirm"
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-3 col-form-label">User Roles</label>
                    <div class="col-9">
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="admin"
                                value="Admin"
                                v-model="UserRoles"
                                disabled
                            />
                            <label class="form-check-label" for="admin">
                                Admin
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="donator"
                                value="Donator"
                                v-model="UserRoles"
                                disabled
                            />
                            <label class="form-check-label" for="donator">
                                Donator
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="member"
                                value="Member"
                                v-model="UserRoles"
                                disabled
                            />
                            <label class="form-check-label" for="member">
                                Member
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-3"></div>
                    <div class="col-9">
                        <button
                            v-on:click="UpdateProfile"
                            type="submit"
                            class="btn btn-primary"
                        >
                            Update Profile
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
                            role="alert"
                        >
                            {{ errorText }}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    data: function() {
        return {
            email: "",
            password: "",
            passwordconfirm: "",
            UserRoles: [],
            errorText: ""
        };
    },
    methods: {
        UpdateProfile: function() {
            this.errorText = "";
            if (this.password != this.passwordconfirm) {
                document
                    .getElementById("passwordconfirm")
                    .setCustomValidity(
                        "Doit être identique à Password Confirmation"
                    );
            }
            let valid = document.getElementById("profile").checkValidity();
            if (valid) {
                fetch(`${this.$root.$data.srvURL}/api/user`, {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${this.$root.access_token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                })
                    .then(response => {
                        if (!response.ok) throw response;
                        return response.json();
                    })
                    .then(result => {
                        this.$router.push("/");
                    })
                    .catch(error => {
                        error.json().then(errorMessage => {
                            console.error(errorMessage);
                            if (errorMessage.error_description != null)
                                this.errorText = errorMessage.error_description;
                        });
                    });
            }
        },
        GetProfileData: function() {
            this.errorText = "";
            fetch(`${this.$root.$data.srvURL}/api/user`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${this.$root.access_token}`,
                    Accept: "application/json"
                }
            })
                .then(response => {
                    if (!response.ok) throw response;
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    this.UserRoles = data.UserRoles;
                    this.email = data.Email;
                })
                .catch(error => {
                    this.errorText = error;
                });
        }
    },
    mounted: function() {
        this.GetProfileData();
    }
};
</script>

<style></style>
