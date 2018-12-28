<template>
  <v-app>
    <!-- TODO : sublists -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="minidrawer"
      permanent
      absolute
      app>
      <v-toolbar flat color="grey lighten-3">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://avatars0.githubusercontent.com/u/12774204?s=460&v=4">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Exybore</v-list-tile-title>
              <span class="subheading">Administrateur</span>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile
          @click=""
          v-for="item in menu"
          :key="item.title"
          avatar>
          <v-list-tile-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title>
            {{ item.title }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      dense>
      <v-btn
        @click="minidrawer = !minidrawer"
        icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-avatar>
        <img src="https://cdn.becauseofprog.fr/logos/bop-transparent.png"/>
      </v-avatar>
      <v-toolbar-title>
        Panel administrateur
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: true,
      minidrawer: false,
      menu: [
        {
          title: "Dépôts",
          icon: "mdi-dropbox",
          link: ""
        },
        {
          title: "Sites",
          icon: "mdi-web",
          link: ""
        },
        {
          title: "Publications",
          icon: "mdi-file-document",
          link: ""
        },
        {
          title: "Utilisateurs",
          icon: "mdi-account-multiple",
          link: ""
        },
        {
          title: "Trafic",
          icon: "mdi-trending-up",
          link: ""
        },
        {
          title: "Tâches",
          icon: "mdi-checkbox-multiple-marked",
          link: ""
        },
        {
          title: "Personnalisation",
          icon: "mdi-palette",
          link: ""
        },
        {
          title: "Paramètres",
          icon: "mdi-settings",
          link: ""
        },
      ]
    }
  }
}
</script>
