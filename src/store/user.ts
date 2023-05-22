import { acceptHMRUpdate, defineStore } from 'pinia'
import { User, Notification, Message } from '../types'

export const useStore = defineStore('state', () => {

  const state = reactive({
    notifications: [] as Notification[],
    user: null as User | null,
    messages: [] as Message[],
})

  const setState = (newState:any)=>{
    Object.assign(state, newState)
  }

  const addMessage = (message:Message[])=>{
    state.messages.unshift(...message)
    return state.messages
  }
  
  return {
    state,
    setState,  
    addMessage
  }


})


if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore as any, import.meta.hot))
