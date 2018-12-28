import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import fr from 'vuetify/es5/locale/fr'

Vue.use(Vuetify, {
  theme: {
    primary: '#b71c1c',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'mdi',
  lang: {
    locales: { fr },
    current: 'fr'
  },
})
