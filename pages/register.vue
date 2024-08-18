<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
        <form @submit.prevent="register">
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
              Register
            </button>
          </div>
          <div class="text-center">
            <p>
              Already have an account?
              <nuxt-link to="/login" class="text-blue-600 hover:underline">
                Login here
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
      async register() {
        try {
          // Handle registration logic here, e.g., call to backend API
  
          // Redirect to login page after registration
          this.$router.push('/login');
        } catch (error) {
          alert('Registration failed');
        }
      },
    },
    mounted() {
      // Any code you want to run when the component is mounted
    },
  };
  </script>
  