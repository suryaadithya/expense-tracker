<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="username" class="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div class="mb-6">
            <button
              type="submit"
              class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </div>
          <div class="text-center">
            <p>
              Don't have an account?
              <nuxt-link to="/register" class="text-blue-600 hover:underline">
                Register here
              </nuxt-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          // Handle login logic here, e.g., call to backend API
  
          // Save JWT token or perform any other necessary actions
          // For demonstration, we'll simulate successful login:
          localStorage.setItem('token', 'fake-jwt-token');
  
          // Redirect to a dashboard or home page after successful login
          this.$router.push('/');
        } catch (error) {
          alert('Login failed');
        }
      },
    },
    mounted() {
      // Any code that needs to run when the component is mounted
    },
  };
  </script>
  