import { defineStore } from 'pinia';

export interface Email {
  id:string
  subject:string
  content:string
  isChecked:boolean
  isRead:boolean
  isArchived:boolean
}

export const useStore = defineStore('store', {
    state: () => ({
      isOpen: false,
      isAllChecked:false,
      clickedEmail: {
        id:'',
        subject:'',
        content:'',
        isChecked:false,
        isRead:false,
        isArchived:false,
      },
      emails:
        [
        {
          id:'1' ,
          subject:'Wave hello with video, reactions and more now in huddles' ,
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false,
        },
        {
          id:'2' ,
          subject:'[JIRA](LXQ-2604) Learning path-file-Existing File-two buttons for viewing the file',
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false
        },
        {
          id:'3' ,
          subject:'Wave hello with video, reactions and more now in huddles' ,
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false
        },
        {
          id:'4' ,
          subject:'Wave hello with video, reactions and more now in huddles' ,
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false
        },
        {
          id:'5' ,
          subject:'[JIRA](LXQ-2604) Learning path-file-Existing File-two buttons for viewing the file',
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false
        },
        {
          id:'6' ,
          subject:'Wave hello with video, reactions and more now in huddles' ,
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false
        },
        {
          id:'7' ,
          subject:'[JIRA](LXQ-2604) Learning path-file-Existing File-two buttons for viewing the file',
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false
        },
        {
          id:'8' ,
          subject:'Wave hello with video, reactions and more now in huddles' ,
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false
        },
        {
          id:'9' ,
          subject:'[JIRA](LXQ-2604) Learning path-file-Existing File-two buttons for viewing the file',
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false
        },
        {
          id:'10' ,
          subject:'[JIRA](LXQ-2604) Learning path-file-Existing File-two buttons for viewing the file',
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false
        },
        {
          id:'11' ,
          subject:'Wave hello with video, reactions and more now in huddles' ,
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false
        },
        {
          id:'12' ,
          subject:'Wave hello with video, reactions and more now in huddles' ,
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:false,
        },
        {
          id:'13' ,
          subject:'[JIRA](LXQ-2604) Learning path-file-Existing File-two buttons for viewing the file',
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:true
        },
    
        {
          id:'14' ,
          subject:'Wave hello with video, reactions and more now in huddles' ,
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:true
        },
        {
          id:'15' ,
          subject:'[JIRA](LXQ-2604) Learning path-file-Existing File-two buttons for viewing the file',
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:true
        },
        {
          id:'16' ,
          subject:'Wave hello with video, reactions and more now in huddles' ,
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:true
        },
        {
          id:'17' ,
          subject:'[JIRA](LXQ-2604) Learning path-file-Existing File-two buttons for viewing the file',
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:true
        },
        {
          id:'18' ,
          subject:'Wave hello with video, reactions and more now in huddles' ,
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:true
        },
        {
          id:'19' ,
          subject:'[JIRA](LXQ-2604) Learning path-file-Existing File-two buttons for viewing the file',
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:true
        },
        {
          id:'20' ,
          subject:'Wave hello with video, reactions and more now in huddles' ,
          content:'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafes and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
          isChecked:false,
          isRead:false,
          isArchived:true
        },
       
       ]
      }),

      getters:{

         selectedEmails() : Email[] {
             return this.emails.filter(el => el.isChecked == true && !el.isArchived)
        },

         isActionsVisible():boolean {    
          return this.emails.findIndex(el => el.isChecked == true) == -1 ? false : true
         },

         inboxEmails(): Email[] {
          return this.emails.filter(el => el.isArchived !== true )
         },
        
         archivedEmails(): Email[] {
          return this.emails.filter(el => el.isArchived == true)
         },
         nbrOfInboxEmails(): number {
           return this.inboxEmails.length
         },
    
         nbrOfArchivedEmails(): number {
          return this.archivedEmails.length
         },

      },

      actions: {

        openSidebar(emailId:string) {
          console.log('Iam here bro')
          this.isOpen = true; 
          this.clickedEmail = this.emails.find(el => el.id === emailId) ?? this.clickedEmail;
        },

        closeSidebar() {
          this.isOpen = false;
        },
        
        setIsAllChecked(){
          this.isAllChecked = !this.isAllChecked
          if(this.isAllChecked === true ){
            this.emails = this.emails.map(el => ({...el, isChecked:true}))
          }
          else{
            this.emails = this.emails.map(el => ({...el, isChecked:false}))
          }
        },
        
        setEmailClicked(emailId:string){
          
        },

        setEmailIsRead(){
          this.emails = this.emails.map(el => {
             if(el.isChecked && !el.isRead && !el.isArchived){
               return {...el ,isRead: true};
               } 
             else {
               return {...el,isRead: false}
               }          
              })
        },
     
        setEmailIsReadById(emailId:string){
          this.emails = this.emails.map(el => {
            if(el.id === emailId){
              return {...el ,isRead: !el.isRead};
              } 
            else{
              return {...el}
              }          
             })
        },

        setEmailIsArchived(){
          this.emails= this.emails.map(el => {
             if(el.isChecked){
               return {...el ,isArchived: true};
               } 
             else{
               return {...el}
               }       
              })
        },
        
        setEmailIsArchivedById(emailId: string){
          this.emails = this.emails.map(el => {
            if(el.id === emailId){
              return {...el ,isArchived: true};
              } 
            else{
              return {...el}
              }          
             })
        }
      
      },
});
