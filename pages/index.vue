<script setup lang="ts">

 definePageMeta({
     layout:'custom',
  });
  import { useRouter } from 'vue-router';
 
//   // Trigger the fade-in animation when the component is mounted
//   onMounted(() => {
//     // Implement your animation logic here
//   });
  //await navigatTo()
  const router = useRouter();
  
  function redirectToInbox() {
    router.push('/inbox');
  }
  </script>

<template>
    <div class="index-page">
      <h1 class="index-page__title">Welcome to Alwasaet!</h1>
      <div class="index-page__description-container">
          <p class="index-page__description">Alwasaet is a technology-enabled learning provider launched with a vision to use high-end technology and a radical approach to revolutionize the traditional form of education</p>
      </div>
      <!-- Beautiful button for login -->
      <button class="index-page__login-button" @click="redirectToInbox">Login</button>
    </div>
  </template>
  
  
  
  <style>
  .index-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    opacity: 0;
    background-color:#FFFFFF;
    margin-top:100px;
    transform: translateY(20px);
    animation: fadeIn 1s ease-out forwards;
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .index-page__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .index-page__description-container {
  width: 33%;
  text-align: center;
  margin-bottom: 1.5rem; 
  padding: 0.5rem;
}
  
  .index-page__description {
    font-size: 1.7rem;
    color: #181717;
  }
  
  .index-page__login-button {
    
    width:20%;
    
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background-color: #f89100;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .index-page__login-button:hover {
    background-color: rgba(248, 145, 0, 0.5);
  }
  </style>