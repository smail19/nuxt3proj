<script setup lang="ts">
import { useStore } from '../store';


const store = useStore()

function closeSidebar(){
     store.closeSidebar()
}
const email = computed(()=> store.clickedEmail)

</script>

<template>
  <div class="container">
    <div class="container__header">

<div class="container__close">
    <img src="@/assets/x-close.png" @click="closeSidebar"/>
    <span class="container__text">Close(Esc)</span>
</div>

<div class="container__actions">

    <div class="container__action">
      <img class="container__icon" src="@/assets/envelop.png"/>
      <span class="container__text" @click="store.setEmailIsReadById(email.id)">Mark as read(r)</span>
    </div>

    <div class="container__action" @click="store.setEmailIsArchivedById(email.id)">
      <img class="container__icon" src="@/assets/delete.png"/>
      <span class="container__text">Archive(a)</span>
    </div>
</div>
</div>

      <div>
        <h1 class="container__title">{{ email.subject }}</h1>
        <p class="container__text-content">{{ email.content }}</p>
      </div>
  
  </div>
</template>


<style scoped>

.container{
    display:flex;
    flex-direction:column;
    min-width:47rem;
    max-height:100%;
    background: #FFFFFF; 
    align-items: center;
    overflow: hidden;
    flex-wrap: wrap;

}

.container__text-content{
  width: 43rem;
  margin:0;
  font-size: 0.88rem;
  height: 3.375rem;
}
.container__title{
  font-size: 1.25rem;
  width: 43rem;
  margin-bottom: 1.25rem;
  margin-top: 0;
}

.container__header {
  display: flex;
  justify-content: space-between;
  height: 1.25rem;
  width:43rem;
  padding: 0 2rem;
  margin: 2rem 0;
}
.container__close {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.container__checkbox{
  margin: 0;
  width: 1.25rem;
  height: 1.25rem;
}

.container__text{
  font-size: 0.88rem; 
  margin-left:0.75rem;
}


.container__actions {
  display: flex;
 
}

.container__action {
  display: flex;
  margin-left:2.5rem;
  align-items: center;
  cursor: pointer;
}

</style>