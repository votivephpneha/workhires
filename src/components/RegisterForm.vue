<template>
    <div class="wrapper rounded bg-white">

        <div class="h3">Registration Form</div>
        <form v-on:submit.prevent="onSubmit" method="post">
            <div class="forms">
                <div class="row">
                    <div class="col-md-6 ">
                        <label>First Name</label>
                        <input type="text" class="form-control" required v-model="posts.fisrtName" name="fisrtName">
                    </div>
                    <div class="col-md-6 field">
                        <label>Last Name</label>
                        <input type="text" class="form-control" required v-model="posts.lastName" name="lastName">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 field">
                        <label>Birthday</label>
                        <input type="date" class="form-control" required v-model="posts.dob" name="dob">
                    </div>
                    <div class="col-md-6 field">
                        <label>Gender</label>
                        <div class="d-flex align-items-center mt-2">
                            <label class="option">
                                <input type="radio" name="male" v-model="posts.gender" value="male">Male
                                <span class="checkmark"></span>
                            </label>
                            <label class="option ms-4">
                                <input type="radio" name="female" v-model="posts.gender" value="female">Female
                                <span class="checkmark"></span>
                            </label>
                            <label class="option ms-4">
                                <input type="radio" name="female" v-model="posts.gender" value="other">Other
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 field">
                        <label>Email</label>
                        <input type="email" class="form-control" required v-model="posts.email" name="email">
                    </div>
                    <div class="col-md-6 field">
                        <label>Phone Number</label>
                        <input type="tel" class="form-control" required v-model="posts.phoneNumber" name="phoneNumber">
                    </div>
                </div>
                <button class="btn btn-primary mt-3" type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { postRequest } from './ApiFunctions';

export default {
    name: "RegistrationForm",
    data() {
        return {
            posts: {
                fisrtName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                dob: "",
                gender: ""
            }
        }
    },
    methods: {
        async onSubmit() {
            await postRequest('/register', this.posts)
            this.$router.push({ name: 'blog', })

        },
    }
}
</script>
<style>
/* Importing fonts from Google */
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'); */

/* Reseting */
/* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
} */
/* 
body {
    background: linear-gradient(45deg, #ce1e53, #8f00c7);
    min-height: 100vh;
} */

/* body::-webkit-scrollbar {
    display: none;
} */

.wrapper {
    max-width: 800px;
    margin: 80px auto;
    padding: 30px 45px;
    box-shadow: 5px 25px 35px #3535356b;
}

.wrapper label {
    display: block;
    padding-bottom: 0.2rem;
    color: #161515;
    font-size: 1.3rem;
}

.wrapper .forms .row {
    padding: 0.6rem 0;
}

.wrapper .forms .row .form-control {
    box-shadow: none;
}

.wrapper .forms .option {
    position: relative;
    padding-left: 20px;
    cursor: pointer;
}


.wrapper .forms .option input {
    opacity: 0;
}

.wrapper .forms .checkmark {
    position: absolute;
    top: 1px;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid #bbb;
    border-radius: 50%;
}

.wrapper .forms .option input:checked~.checkmark:after {
    display: block;
}

.wrapper .forms .option:hover .checkmark {
    background: #f3f3f3;
}

.wrapper .forms .option .checkmark:after {
    content: "";
    width: 10px;
    height: 10px;
    display: block;
    background: linear-gradient(45deg, #ce1e53, #8f00c7);
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 300ms ease-in-out 0s;
}

.wrapper .forms .option input[type="radio"]:checked~.checkmark {
    background: #fff;
    transition: 300ms ease-in-out 0s;
}

.wrapper .forms .option input[type="radio"]:checked~.checkmark:after {
    transform: translate(-50%, -50%) scale(1);
}

#sub {
    display: block;
    width: 100%;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    color: #333;
}

#sub:focus {
    outline: none;
}

@media(max-width: 768.5px) {
    .wrapper {
        margin: 30px;
    }

    .wrapper .form .row {
        padding: 0;
    }
}

@media(max-width: 400px) {
    .wrapper {
        padding: 25px;
        margin: 20px;
    }
}

.field {
    margin: 0;
    padding: 4px;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
</style>