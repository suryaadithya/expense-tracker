<template>
    <div>
      <!-- Your navigation or any other common layout elements -->
      <nav class="bg-blue-600 p-4 text-white">
        <div class="container mx-auto flex justify-between">
          <nuxt-link to="/" class="font-bold">Home</nuxt-link>
          <nuxt-link to="/login" class="mr-4">Login</nuxt-link>
          <nuxt-link to="/register">Register</nuxt-link>
        </div>
      </nav>
  
      <!-- This is where the page content will be rendered -->
      <NuxtPage/>
    </div>
  </template>
  