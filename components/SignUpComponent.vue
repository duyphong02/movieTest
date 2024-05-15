<template>
    <!-- source: https://gist.github.com/nraloux/bce10c4148380061781b928cdab9b193 -->
    <!-- I have added support for dark mode and improved UI -->
    <div class="h-screen bg-gray-400 dark:bg-gray-900">
        <!-- Container -->
        <div class="mx-auto">
            <div class="flex justify-center px-6 py-12">
                <!-- Row -->
                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                    <!-- Col -->
                    <div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                        style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"></div>
                    <!-- Col -->
                    <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                        <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                        <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                            <div class="mb-4 md:flex md:justify-between">
                                <div class="mb-4 md:mr-2 md:mb-0">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                        for="firstName">
                                        First Name
                                    </label>
                                    <input @blur="Signin1"
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="firstName" v-model="firstName" type="text" placeholder="First Name" />
                                    <span v-if="!nameValid">Ten qua ngan</span>
                                </div>
                                <div class="md:ml-2">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                        for="lastName">
                                        Last Name
                                    </label>
                                    <input @blur="Signin1"
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="lastName" v-model="lastName" type="text" placeholder="Last Name" />
                                    <span v-if="!nameValid">Ten qua ngan</span>

                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                    Email
                                </label>
                                <input @blur="validateEmail"
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email" type="email" v-model="email" placeholder="Email" />
                                <span v-if="!emailValid">Email sai ki tu</span>

                            </div>
                            <div class="mb-4 md:flex md:justify-between">
                                <div class="mb-4 md:mr-2 md:mb-0">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                        for="password">
                                        Password
                                    </label>
                                    <input @blur="validatePassword"
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password" type="password" v-model="password"
                                        placeholder="******************" />
                                    <span v-if="!passwordValid">Mat khau thieu ki tu</span>
                                </div>
                                <div class="md:ml-2">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                        for="c_password">
                                        Confirm Password
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="c_password" type="password" placeholder="******************" />
                                </div>
                            </div>
                            <div class="mb-6 text-center">
                                <button @click="HandleLogin"
                                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Register Account
                                </button>
                            </div>
                            <hr class="mb-6 border-t" />
                            <div class="text-center">
                                <a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                    href="#">
                                    Forgot Password?
                                </a>
                            </div>
                            <div class="text-center">
                                <a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                    href="./index.html">
                                    Already have an account? Login!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            emailValid: true,
            nameValid: true,
            passwordValid: true
        }
    },
    methods: {
        Signin1() {
            if (this.firstName.length && this.lastName.length < 5) {
                this.nameValid = false
            }
            else {
                this.nameValid = true
            }
        },
        validateEmail() {
            const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailValid = mail.test(this.email);
        },
        validatePassword() {
            const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            console.log("pass.test(this.password)",pass.test(this.password));
            this.passwordValid = pass.test(this.password);
        },
        HandleLogin() {
            let userData = {
                firtname:this.firstName,
                lastname:this.lastName,
                email:this.email,
                password:this.password
            }
            this.$store.dispatch("SetUser",userData)
            this.$router.push("/signin")
            
        },
    //     USERDATA() {
    //     this.$store.dispatch('user/USERDATA', { firstName: this.firstName, lastname:this.lastname, password: this.password })
    //     .catch((error) => {
    //       // Xử lý khi đăng ký thất bại (hiển thị thông báo lỗi, ...)
    //       console.error('Đăng ký thất bại:', error);
    //     });
    // }
  }
        
    }

</script>

<style lang="scss" scoped></style>