import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css' // Using the default Vite CSS. Replace with your own global styles.
import router from './router'
import App from './App.vue'
import { useAuthStore } from './authentication/auth'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)

// Initialize authentication before mounting the app
async function initializeApp() {
    try {
        const authStore = useAuthStore()
        await authStore.initializeAuth()
    } catch (error) {
        console.warn('Firebase authentication initialization failed:', error)
        // Continue loading the app even if Firebase fails
    }
    app.mount('#app')
}

initializeApp()