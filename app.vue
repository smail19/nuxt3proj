<template>
 <NuxtLayout>

  <template #navmenu>
     <NavMenu/>
  </template>

 <template #pages>
  <NuxtPage/>
 </template>

 </NuxtLayout>
</template>

<style>

html{
  height: 100vh;
}

body,#__nuxt{
  height: 100vh;
  margin:0;
  font-family: 'Plus Jakarta Sans';
} 


.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
} 

</style>