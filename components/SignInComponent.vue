<template>
    <div class="flex h-screen bg-indigo-700">
      <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
        </header>
        <div>
          <label class="block mb-2 text-indigo-500" for="username">Email</label>
          <input v-model="email"
            class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="text" name="username">
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password">Password</label>
          <input v-model="password" :type="showPassword ? 'text' : 'password'"
            class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="password" name="password">
          <button @click="toggleShowPassword" class=" focus:outline-none">
            <svg class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
        <div>
          <input @click="login" class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
            type="submit">
        </div>
        <footer>
          <a class="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
          <a class="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        showPassword: false
      }
    },
    methods: {
      login() {
        const user = this.$store.state.user;
        // Kiểm tra tài khoản và mật khẩu
        if (this.email === user.email && this.password === user.password) {
          // Đăng nhập thành công
          this.loginError = '';
          console.log('Đăng nhập thành công');
          console.log(user.username);
          const userJSON = {
            email: this.email,
            password:this.password
          }
          const data = JSON.stringify(userJSON);
          this.$store.dispatch("isLogin", data)
          // Thực hiện các hành động sau khi đăng nhập thành công
          this.$router.push("/home")
        } else {
          // Sai tài khoản hoặc mật khẩu
          this.loginError = 'Sai tên đăng nhập hoặc mật khẩu';
          console.log('Sai tên đăng nhập hoặc mật khẩu');
        }
  
      },
      toggleShowPassword() {
        this.showPassword = !this.showPassword;
      }
    }
  }
  </script>
  
  <style lang="scss" scoped></style>