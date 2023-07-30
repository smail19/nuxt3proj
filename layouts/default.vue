 
<script setup lang="ts">

import {useStore} from '../store'

const store = useStore()
const isSidebarOpen = computed(()=> store.isOpen)

const closeSidebar = () => {
   store.closeSidebar()
};
console.log(window.innerWidth)
console.log(window.innerHeight)
</script>


<template>
  
    <div class="container">

      <transition name="fade">
      <div v-if="isSidebarOpen" class="container__overlay"  @click="closeSidebar" >
      </div>
     </transition>


      <div class="container__navmenu">
        <slot name="navmenu"/>
      </div>
     
      <div class="container__page">
          <div class="container__page-title">
            <h1 class="container__title-text">{{$route.name!.toString().charAt(0).toUpperCase() + $route.name!.toString().slice(1)}}</h1>
          </div>
          <div class="container__page-content">
            <slot name="pages"/>  
          </div>
      </div>

      <transition name="slide-fade">
        <div v-if="isSidebarOpen" class="container__sidebar">
          <SideBar/>
        </div>
      </transition>

    </div>
  

</template>
<style scoped>


.container {
  display: flex;
  height: 100%;
}
/* .container > *{
  flex:1;
} */

.container__navmenu {
  width:16.25rem;
}
.container__page{
  width: 63.8125rem;
}
.container__page-content{

}

.container__sidebar {
  width: 47rem;
  display: block;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 4;
}

.container__page-title{
  
  margin-top: 1.5rem;
  margin-bottom:2rem;
  padding-left: 1.5rem;
  
}
.container__title-text{
  margin: 0;
  display:table;
  height: 2rem;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1.25s;
  
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  width:0px;
}

/* Define the slide animation */
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.container__overlay{
  position:absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
}


</style>
