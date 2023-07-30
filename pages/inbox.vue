<script setup lang="ts"> 
import { useStore } from '../store';

 const store = useStore()
 const selectedEmails = computed(() => store.selectedEmails)
 const isSidebarOpen = computed(() => store.isOpen)
 //const emails = computed(() => store.emails)
const emails =computed(()=>store.inboxEmails) 



 function openSidebar( emailId:string) {
  console.log('here')
      if (isSidebarOpen) {
     
        store.openSidebar(emailId);
      }
    }

 

</script>
<template>

<div class="container container--modifier">

    <div class="container__header">

        <div class="container__checkbox-content">
            
            <input  @change="store.setIsAllChecked" :checked="store.isAllChecked"  type="checkbox" class="container__checkbox" id="emails-check-box" />
            <span class="container__text">Email Selected ({{ selectedEmails.length }})</span>

        </div>

        <div v-if="store.isActionsVisible" class="container__actions">

            <div class="container__action" @click="store.setEmailIsRead">
              <img class="container__icon" src="@/assets/envelop.png"/>
              <span class="container__text">Mark as read(r)</span>
            </div>

            <div class="container__action" @click="store.setEmailIsArchived">
              <img class="container__icon" src="@/assets/delete.png"/>
              <span class="container__text">Archive(a)</span>
            </div>
        </div>
    </div>

    <ul class="container__emails" id="container=big">

        <li v-for="(email,index) in emails" :key="email.id" class="container__email" :disabled="email.isRead" :class="[email.isRead ? 'container__email--disabled':'' , index % 2 ==0 ? 'container__email--bg-color':'' ]">

            <span class="container__email-checkbox">
              <input
                type="checkbox"
                class="container__checkbox"
                :id="email.id"
                :disabled="email.isRead"
                v-model="email.isChecked"
              />
            </span>

            <label @click="openSidebar(email.id)" class="container__text container--text-">{{ email.subject }}</label>

          </li>

    </ul>

</div>
      
</template>


<style scoped>
/* Block styles */
.container {
 display: flex;
 flex-direction: column;
 width:100%;
 color: #000000;
 
}

/* Element styles */
.container__header {
  display: flex;
  justify-content: space-between;
 height: 1.25rem;
 padding: 0 1.5rem;
 margin-bottom:1.5rem;
}

.container__checkbox-content {
  display: flex;
  align-items: center;
 
}

.container__checkbox{
  margin: 0;
  width: 1.25rem;
  height: 1.25rem;
}

.container__text{
  font-size: 0.88rem;
  font-weight: bold;
}

.container__actions {
  display: flex;
}

.container__action {
  display: flex;
  margin-left:2.5rem;
  align-items: center;
}
.container__action:hover{
  cursor: pointer;
}

.container__text {
  margin-left:0.75rem;
}

.container__emails {
  height:40.625rem;
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
.container__email--bg-color{
  background-color:#F3F6FB;
}


</style>
