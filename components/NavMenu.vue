<script setup lang="ts">
import { useStore } from '../store';

const router = useRouter()
const store = useStore()

  </script>

<template>
    
<div class="nav-menu">
      <!-- Sidebar content -->
    <div class="nav-menu__top">
        <div class="nav-menu__logo">
            <img src="@/assets/logo.png" alt="My Logo" />
        </div>

        <div class="nav-menu__links">
           
            <NuxtLink to="inbox" class="nav-menu__link nav-menu__link--hover" :class="$route.name ==='inbox' ? 'nav-menu__link--active' : ''">
              <span class="nav-menu__link-head">
                <img class="nav-menu__icon" src="@/assets/inbox-01.png"/>  
                <span class="nav-menu__text">Inbox</span>
              </span>
                <span class="nav-menu__count">{{ store.nbrOfInboxEmails }}</span>
            </NuxtLink>
          
             <NuxtLink to="archive" class="nav-menu__link nav-menu__link--hover" :class="$route.name ==='archive' ? 'nav-menu__link--active' : ''">
                <span class="nav-menu__link-head">
                   <img class="nav-menu__icon" src="@/assets/archive.png"/>
                   <span class="nav-menu__text">Archive</span>
                </span>
                 <span class="nav-menu__count">{{ store.nbrOfArchivedEmails }}</span>
             </NuxtLink>
             
        </div>
    </div>

    <NuxtLink to="" class="nav-menu__link nav-menu__logout">
       <span class="nav-menu__link-head">
        <img class="nav-menu__icon" src="@/assets/log-out-04.png"/>
          <span class="nav-menu__text">Logout</span>
       </span>
    </NuxtLink>
        
      
   
</div>
  </template>
  
  
  <style>
  .nav-menu{
   display:flex;
   flex-direction: column;
   min-height: 100%;
   background-color: #F8FAFC;
   border-right: 0.0625rem solid #E5E7EB;
  }
  .nav-menu__top{
    height: 10rem;
    margin-top:1.25rem
  }
  
  .nav-menu__links{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0.625rem;
    gap: 0.75rem;
  }
  .nav-menu__logo{
    margin-bottom:2rem;
    padding-left: 1.5rem;
    height: 1.25rem;
  }
  .nav-menu__link{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    text-decoration: none;
    color:black;
    height: 3rem;
    
  }
  .nav-menu__link--hover:hover{
    border-radius: 3.375rem;
    background-color: #D6E2FB;
  }
  .nav-menu__link--active{
    border-radius: 3.375rem;
    background-color: #D6E2FB;
  }
  .nav-menu__logout{
    margin-top:auto;
    margin-bottom:1.25rem;
  }
  .nav-menu__logout span{
     width: 100%;
  }
  .nav-menu__icon{
    margin-right:0.75rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  .nav-menu__link-head{
    display: flex;
    align-items: center;
  }
  .nav-menu__text, .nav-menu__count{
    color:#4B5563;
    font-weight: bold;
  }
  
  </style>
  

  