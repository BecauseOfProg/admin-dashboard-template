<template>
  <v-container
    fluid
    grid-list-md>
    <v-layout column>
      <v-flex
        xs12>
        <v-layout
          row
          wrap>
          <v-flex
            xs12
            md6>
            <v-card>
              <v-card-text>
                <v-layout
                  column
                  wrap>
                  <v-flex xs12>
                    <h3 class="headline mb-0">
                      <v-icon left>mdi-web</v-icon>
                      Trafic global
                    </h3>
                  </v-flex>
                  <v-flex xs12>
                    <!-- TODO : change gradient to unique color -->
                    <v-sparkline
                      :data="globalTrafic.data"
                      type="trend"
                      :gradient="sparklines.gradient"
                      :smooth="false"
                      :line-width="2"
                      stroke-linecap="round"
                      auto-draw
                    ></v-sparkline>
                  </v-flex>
                  <v-flex xs12>
                    <p>
                      <strong>Pages vues par utilisateur : </strong>6
                    </p>
                  </v-flex>
                  <v-flex
                    xs1
                    offset-xs11>
                    <v-tooltip bottom>
                      <v-btn
                        slot="activator"
                        icon>
                        <v-icon color="primary">
                          mdi-chevron-right
                        </v-icon>
                      </v-btn>
                      <span>Détails</span>
                    </v-tooltip>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex
            xs12
            md6>
            <v-card>
              <v-card-text>
                <v-layout
                  column
                  wrap>
                  <v-flex xs12>
                    <h3 class="headline mb-0">
                      <v-icon left>mdi-dropbox</v-icon>
                      Trafic par projet
                    </h3>
                  </v-flex>
                  <v-flex xs12>
                    <v-sparkline
                      :data="globalTrafic.data"
                      type="bar"
                      :gradient="sparklines.gradient"
                      :smooth="false"
                      :line-width="7"
                      stroke-linecap="round"
                      auto-draw
                    ></v-sparkline>
                  </v-flex>
                  <v-flex
                    xs1
                    offset-xs11>
                    <v-tooltip bottom>
                      <v-btn
                        slot="activator"
                        icon>
                        <v-icon color="primary">
                          mdi-chevron-right
                        </v-icon>
                      </v-btn>
                      <span>Détails</span>
                    </v-tooltip>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex
        xs12>
        <v-layout
          row
          wrap>
          <v-flex
            xs12
            md6>
            <v-card>
              <v-card-text>
                <v-layout
                  column
                  wrap>
                  <v-flex xs12>
                    <h3 class="headline mb-0">
                      <v-icon left>mdi-file-document</v-icon>
                      Articles en attente
                    </h3>
                  </v-flex>
                  <v-flex xs12>
                    <v-list
                      v-for="post in waitingPosts"
                      dense>
                      <v-list-tile avatar>
                        <v-list-tile-avatar>
                          <img :src="post.author.avatar"/>
                        </v-list-tile-avatar>
                        <v-list-tile-title>
                          {{ post.title }}
                        </v-list-tile-title>
                      </v-list-tile>
                      <v-divider inset/>
                    </v-list>
                  </v-flex>
                  <v-flex
                    xs1
                    offset-xs11>
                    <v-tooltip bottom>
                      <v-btn
                        slot="activator"
                        icon>
                        <v-icon color="primary">
                          mdi-chevron-right
                        </v-icon>
                      </v-btn>
                      <span>Détails</span>
                    </v-tooltip>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex
            xs12
            md6>
            <v-card>
              <v-card-text>
                <v-layout
                  column
                  wrap>
                  <v-flex xs12>
                    <h3 class="headline mb-0">
                      <v-icon left>mdi-forum</v-icon>
                      Commentaires
                    </h3>
                  </v-flex>
                  <v-flex xs12>
                    <v-list
                      v-for="comment in comments"
                      :key="comment.title">
                      <v-list-tile avatar>
                        <v-list-tile-avatar>
                          <img :src="comment.author.avatar"/>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            {{ comment.title }}
                          </v-list-tile-title>
                          {{ comment.content }}
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider inset/>
                    </v-list>
                  </v-flex>
                  <v-flex
                    xs1
                    offset-xs11>
                    <v-tooltip bottom>
                      <v-btn
                        slot="activator"
                        icon>
                        <v-icon color="primary">
                          mdi-chevron-right
                        </v-icon>
                      </v-btn>
                      <span>Détails</span>
                    </v-tooltip>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex
        xs12>
        <v-layout
          row
          wrap>
          <v-flex
            xs12
            md6>
            <v-card>
              <v-card-text>
                <v-layout
                  column
                  wrap>
                  <v-flex xs12>
                    <h3 class="headline mb-0">
                      <v-icon left>mdi-checkbox-multiple-marked</v-icon>
                      Tâches
                    </h3>
                  </v-flex>
                  <v-flex xs12>
                    <v-layout row wrap>
                      <v-flex
                        v-for="todo in todolists"
                        xs6>
                        <h3>{{ todo.title }}</h3>
                        <v-checkbox
                          v-for="item in todo.items"
                          v-model="todo.values"
                          :value="item.id"
                          :label="item.name"
                          color="primary"
                          class="my-0"/>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex
                    xs1
                    offset-xs11>
                    <v-tooltip bottom>
                      <v-btn
                        slot="activator"
                        icon>
                        <v-icon color="primary">
                          mdi-chevron-right
                        </v-icon>
                      </v-btn>
                      <span>Détails</span>
                    </v-tooltip>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        comments: [
          {
            title: "Waw !",
            content: "Je suis impressionné ! C'est incroyable !",
            article: "arduino-introduction",
            author: {
              name: "Exybore",
              avatar: "https://avatars0.githubusercontent.com/u/12774204?s=460&v=4"
            }
          }
        ],
        todolists: [
          {
            title: "Articles à rédiger",
            values: ["ipad", "happy-new-year"],
            items: [
              {
                name: "L'iPad Pro 2018",
                id: "ipad"
              },
              {
                name: "Les meilleurs LANGAGES de TOUS les TEMPS!",
                id: "best-languages"
              },
              {
                name: "Bonne année 2019 !",
                id: "happy-new-year"
              },
            ]
          }
        ],
        waitingPosts: [
          {
            title: "L'iPad Pro 2018",
            author: {
              name: "Patrick",
              avatar: "https://randomuser.me/api/portraits/men/85.jpg"
            }
          },
          {
            title: "Comment installer Ubuntu sur un Raspberry Pi ?",
            author: {
              name: "Exybore",
              avatar: "https://avatars0.githubusercontent.com/u/12774204?s=460&v=4"
            }
          }
        ],
        globalTrafic: {
          data: [
            0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0
          ]
        },
        projectTrafic: {
          data: [
            0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0
          ]
        },
        sparklines: {
          gradient: [
            "red darken-3",
            "red",
            "red lighten-3"
          ]
        }
      }
    }
  }
</script>
