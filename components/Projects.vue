<template>
  <!-- PROJECTS SECTION -->
  <section
    id="projects"
    class="projects-section"
  >
    <h4 class="section-title">PROJELERİMİZ</h4>
    <p class="section-desc">
      Arsa, kentsel dönüşüm ve kat karşılığı işlerimiz.
    </p>

    <v-tabs
      v-model="projectsTab"
      align-tabs="center"
      class="mt-3"
    >
      <v-tab :value="0"
        ><span class="text-caption font-weight-medium"> TAMAMLANAN PROJELER </span>
      </v-tab>
      <v-tab :value="1"
        ><span class="text-caption font-weight-medium">
          DEVAM EDEN PROJELER
        </span>
      </v-tab>
    </v-tabs>
    <v-tabs-window
      v-model="projectsTab"
      class="w-100"
    >
      <v-tabs-window-item :value="0">
        <v-card
          elevation="0"
          min-height="500px"
        >
          <div class="project-cards">
            <div
              v-for="project in projects"
              :key="project.id"
              class="project-card"
              @click="showProjectDetail(project)"
            >
              <div class="card-img-wrapper">
                <div class="detail-icon">
                  <Icon
                    icon="flowbite:expand-outline"
                    color="white"
                  />
                </div>
                <img
                  class="card-img"
                  alt=""
                  :src="project.thumbnail"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ project.title.toUpperCase() }}</h5>
                <p class="card-subtitle">{{ project.location }}</p>
              </div>
            </div>
          </div>
        </v-card>
      </v-tabs-window-item>
      <v-tabs-window-item :value="1">
        <v-card
          elevation="0"
          min-height="500px"
          class="d-flex justify-center align-center"
        >
          <div class="d-flex flex-column align-center">
            <Icon
              icon="fa7-solid:person-digging"
              width="50"
              height="50"
              color="#2c304b"
            />
            <span>Devam eden projemiz bulunmamaktadır.</span>
          </div>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </section>
  <v-dialog
    class="project-detail-dialog"
    v-model="dialog"
    transition="dialog-bottom-transition"
    width="100%"
  >
    <v-card>
      <v-card-text>
        <v-row>
          <v-col
            order="2"
            order-md="1"
            cols="12"
            md="6"
          >
            <v-carousel
              show-arrows="hover"
              v-if="selectedProject"
              v-model="carouselIndex"
              class="project-carousel"
              hide-delimiter-background
              hide-delimiters
            >
              <v-carousel-item
                v-for="(image, index) in selectedProject.images"
                :key="index"
                :src="image"
                cover
              ></v-carousel-item>
              <div class="carousel-thumbs">
                <button
                  v-for="(image, index) in selectedProject.images"
                  :key="index"
                  type="button"
                  class="carousel-thumb"
                  :class="{ active: index === carouselIndex }"
                  @click="carouselIndex = index"
                >
                  <img
                    :src="image"
                    alt=""
                  />
                </button>
              </div>
            </v-carousel>
          </v-col>
          <v-col
            order="1"
            order-md="2"
            class="w-100"
            cols="12"
            md="6"
          >
            <div class="d-flex justify-end">
              <v-btn
                elevation="0"
                icon
                variant="text"
                size="30"
                @click="dialog = false"
              >
                <Icon
                  icon="mdi:close"
                  width="20"
                  height="20"
                  color="#2c304b"
                />
              </v-btn>
            </div>
            <!-- Proje Adı -->
            <div
              v-if="selectedProject"
              class="w-100 project-detail-title mb-1"
            >
              {{ selectedProject.title.toUpperCase() }}
            </div>
            <!-- Proje Açık Adresi -->
            <div
              v-if="selectedProject"
              class="w-100 project-detail-fulladdress mb-5"
            >
              {{ selectedProject.fullAddress }}
            </div>
            <div class="d-flex justify-space-between">
              <!-- Konum -->
              <div
                v-if="selectedProject"
                class="d-flex flex-row align-center"
              >
                <Icon
                  icon="line-md:map-marker-filled"
                  :width="mdAndUp ? '40' : '25'"
                  :height="mdAndUp ? '40' : '25'"
                  color="#2c304b"
                />
                <div class="d-flex flex-column ml-1 small-line-height">
                  <span class="project-detail-title">Konum</span>
                  <span class="project-detail-value">{{
                    selectedProject.location
                  }}</span>
                </div>
              </div>
              <!-- Başlangıç Tarihi -->
              <div
                v-if="selectedProject"
                class="d-flex flex-row align-center"
              >
                <Icon
                  icon="clarity:date-solid-badged"
                  :width="mdAndUp ? '40' : '25'"
                  :height="mdAndUp ? '40' : '25'"
                  color="#2c304b"
                />
                <div class="d-flex flex-column ml-1 small-line-height">
                  <span class="project-detail-title">
                    {{
                      smAndUp ? "Başlangıç Tarihi" : "Başlangıç/Bitiş Tarihi"
                    }}</span
                  >
                  <span class="project-detail-value">{{
                    smAndUp
                      ? selectedProject.startDate
                      : `${selectedProject.startDate}/${selectedProject.endDate}`
                  }}</span>
                </div>
              </div>
              <!-- Bitiş Tarihi -->
              <div
                v-if="selectedProject"
                class="d-none d-sm-flex flex-row align-center"
              >
                <Icon
                  icon="clarity:date-solid-badged"
                  :width="mdAndUp ? '40' : '25'"
                  :height="mdAndUp ? '40' : '25'"
                  color="#2c304b"
                />
                <div class="d-flex flex-column ml-1 small-line-height">
                  <span class="project-detail-title">Bitiş Tarihi</span>
                  <span class="project-detail-value">{{
                    selectedProject.endDate
                  }}</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { projects } from "@/data/projects";
import { Icon } from "@iconify/vue";
const { mdAndUp, smAndUp } = useDisplay();
</script>
<script>
export default {
  name: "Projects",
  data() {
    return {
      dialog: false,
      selectedProject: null,
      carouselIndex: 0,
      projectsTab: 0,
    };
  },
  methods: {
    showProjectDetail(project) {
      this.selectedProject = project;
      this.carouselIndex = 0;
      this.dialog = true;
    },
  },
};
</script>
