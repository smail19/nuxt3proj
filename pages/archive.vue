<script setup lang="ts">
import {useStore} from '../store'


const store = useStore()
const archivedEmails = store.archivedEmails
</script>

<template>
    <div>
        <ul class="container__emails">

<li v-for="email in archivedEmails" :key="email.id" class="container__email" >

   

    <label class="container__text">{{ email.subject }}</label>

  </li>

</ul>

</div>
</template>

<style scoped>
.container {
 display: flex;
 flex-direction: column;
 width:100%;
 color: #121829;
}

/* Element styles */

.container__checkbox{
  margin: 0;
  width: 1.25rem;
  height: 1.25rem;
}

.container__text{
  font-size: 0.88rem;
  font-weight: bold;
}


.container__text {
  margin-left:0.75rem;
}

.container__emails {
  height: 40.625rem;
  list-style: none;
  padding:0;
  margin:0;
  overflow-y: auto;
  
}
.container__email{
  height: 1.25rem;
  display: flex;
  padding-left:1.5rem;
  padding-top: 1.25rem;
  padding-bottom:1.25rem; 
  border-top: 0.0625rem solid #E5E7EB;
 
}
.container__email:hover{
  background-color:#D1E2FF;
}
.container__email--disabled{
  opacity: 0.5;
}


</style>