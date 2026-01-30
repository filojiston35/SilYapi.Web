<template>
  <!-- SCROLLER -->
  <div
    class="scroller"
    id="scroller"
  >
    <div>
      <Header />
      <div
        v-show="isSplashVisible"
        class="splash-screen"
        :class="{ 'is-fading': isSplashFading }"
      >
        <img
          src="/images/colorful-logo.svg"
          alt=""
        />
      </div>
      <!-- SHOWCASE SECTION -->
      <section
        id="mainpage"
        class="showcase-section"
      >
        <!-- BACKGROUND -->
        <video
          id="showcaseVideo"
          ref="showcaseVideo"
          preload="auto"
          autoplay="autoplay"
          loop
          muted
          playsinline
        >
          <p>Your user agent does not support the HTML5 Video element.</p>
          <source
            src="/videos/showcase.webm"
            type="video/webm"
          />
          <source
            src="/videos/showcase.mp4"
            type="video/mp4"
          />
        </video>
        <div class="overlay"></div>
      </section>
      <!-- INTRO SECTION -->
      <section
        id="intro"
        class="intro-section"
      >
        <div class="text">
          <h3>SİL Baştan YAPI'yoruz</h3>
          <p>
            1982 yılından itibaren gelen tecrübe ile şirketimizin bünyesinde
            bulunan mühendis ,mimar ve iç mimarlarımız sizlerin yaşam alanlarını
            güvenle inşa ediyor.
          </p>
          <a href="#">
            KENTSEL DÖNÜŞÜM TALEP FORMU
            <i class="fa-solid fa-chevron-right ml-1"></i>
            <i class="fa-solid fa-chevron-right"></i>
            <i class="fa-solid fa-chevron-right"></i>
          </a>
        </div>
        <!-- social media icons -->
        <div class="social">
          <!-- email -->
          <div>
            <a
              href="mailto:info@silyapiinsaat.com"
              target="_blank"
            >
              <v-icon size="30">mdi-email-outline</v-icon>
            </a>
          </div>
          <!-- instagram -->
          <div>
            <a
              href="https://www.instagram.com/silyapiinsaat/"
              target="_blank"
            >
              <v-icon size="28">mdi-instagram</v-icon>
            </a>
          </div>
          <!-- whatsapp -->
          <div>
            <a
              href="https://wa.me/905321234567"
              target="_blank"
            >
              <v-icon size="28">mdi-whatsapp</v-icon>
            </a>
          </div>
        </div>
      </section>
      <!-- ABOUTUS SECTION -->
      <AboutUs />
      <!-- WHAT WE DO SECTION -->
      <section
        id="whatwedo"
        class="whatwedo-section"
      >
        <h4 class="section-title">NELER YAPIYORUZ ?</h4>
        <p class="section-desc">
          Sizlerin konforlu ve güvenli bir yaşam sürebilmesi için çalışıyoruz
        </p>
        <div class="section-cards">
          <div>
            <i class="fa-solid fa-city"></i>
            <span id="completedResidence"> 200 </span>
            <span>Tamamlanan Mesken</span>
          </div>
          <div>
            <i class="fa-solid fa-helmet-safety fa-2x"></i>
            <span id="experience"> 40 </span>
            <span>Yıllık Deneyim</span>
          </div>
          <div>
            <i class="fa-solid fa-person-digging fa-2x"></i>
            <span id="builtArea"> 50000 </span>
            <span>İnşaa Edilan Alan</span>
          </div>
        </div>
      </section>
      <!-- SAMPLE 1 SECTION -->
      <section
        id="sample1"
        class="sample1-section"
      >
        <h4 class="section-title">1982’den Beri Sil Baştan İnşa Ediyoruz</h4>
        Güçlü mühendislik, yenilikçi mimarlık ve sağlam yapılarla geleceği
        şekillendiriyoruz. Güvenli ve estetik yaşam alanları için, deneyim ve
        kaliteyi bir araya getiriyoruz.
      </section>
      <!-- BRANDS SECTION -->
      <section
        id="brands"
        class="brands-section"
      >
        <h4 class="section-title">MARKALAR</h4>
        <p class="section-desc">
          Güvenilir ve kaliteli yapılar için seçtiğimiz markalar
        </p>
        <img
          src="/images/brands.png"
          alt=""
        />
      </section>
      <!-- SAMPLE 2 SECTION -->
      <section
        id="sample2"
        class="sample2-section"
      >
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <h4 class="section-title">Vizyonumuz</h4>
            Kuruluşundaki milli amacın gereklerini yerine getirerek; küresel
            pazarda paydaşları için yarattığı değerler ile sürdürülebilir
            büyümesini koruyan, rekabet gücü ile tercih edilen, güven duyulan,
            çevreye ve insana duyarlı bir teknoloji firması olmak.
          </v-col>
          <v-col
            cols="12"
            class="divider"
          >
            <hr />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <h4 class="section-title">Misyonumuz</h4>
            Elektronik teknolojileri ve sistem entegrasyonu alanında; Türk
            Silahlı Kuvvetleri başta olmak üzere, yurt içi ve dışındaki
            müşterilerine katma değeri yüksek, yenilikçi ve güvenilir ürün ve
            çözümler sunmak ve Türkiye’nin teknolojik alanda dışa bağımlılığını
            azaltıp, küresel hedeflerine marka bilinirliğini artırarak ulaşan,
            halkına gurur veren bir savunma şirketi olmak.
          </v-col>
        </v-row>
      </section>
      <!-- SERVICES SECTION -->
      <section
        id="services"
        class="services-section"
      >
        <h4 class="section-title">HİZMETLERİMİZ</h4>
        <p class="section-desc">
          Silyapı inşaat olarak 40 yılı aşan tecrübemizle sizlere Kentsel
          dönüşüm, Proje hizmetleri ve Mimarlık hizmetleri veriyoruz.
        </p>
        <div class="d-flex flex-wrap justify-content-center">
          <div class="card">
            <img
              class="card-img-top"
              src="/images/service2.png"
            />
            <div class="card-body">
              <h5 class="card-title">Kentsel Dönüşüm</h5>
              <p class="card-text">
                Kentsel Dönüşüm: Güvenle Geleceğe 1982 yılından bu yana inşaat
                sektöründe edindiğimiz deneyimle, kentsel dönüşüm projelerinde
                güvenli, sağlam ve modern yaşam alanları inşa ediyoruz. Depreme
                dayanıklı, estetik ve sürdürülebilir yapılarla şehirlerimizi
                geleceğe taşıyor, sizlere huzurlu bir yaşam sunuyoruz
              </p>
              <div class="card-action">
                <a href="#"
                  >DETAYLAR <i class="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="/images/service2.png"
            />
            <div class="card-body">
              <h5 class="card-title">Proje Hizmetleri</h5>
              <p class="card-text">
                Proje Hizmetleri: Güçlü Temeller, Güvenli Yapılar İnşaat
                projelerinin başarısı, doğru planlama ve titizlikle hazırlanmış
                projelerle başlar. 1982 yılından bu yana sektörde edindiğimiz
                bilgi ve deneyimle, statik, mimari, elektrik ve inşaat için
                gereken tüm projeleri profesyonel ekibimizle hazırlıyoruz.
              </p>
              <div class="card-action">
                <a href="#"
                  >DETAYLAR <i class="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- CONTACT US -->
      <section
        id="contactus"
        class="contactus-section"
      >
        <div>
          <h4 class="section-title">İLETİŞİM FORMU</h4>
          <h6 class="section-desc my-2">
            İletişim formumuzu doldurarak bizimle iletişime geçebilirsiniz.
          </h6>
          <v-row>
            <v-col
              cols="12"
              lg="6"
              xl="4"
              class="my-1"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.8718994262895!2d28.86230031571861!3d41.00617692750249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb4a1141a37f%3A0x3e185f3859e9541a!2sBah%C3%A7elievler%20Merkez%2C%20Talatpa%C5%9Fa%20Cd%20No%3A49%2C%2034180%20Bah%C3%A7elievler%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1672382649918!5m2!1str!2str"
                width="100%"
                height="350"
                style="border: 3px"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </v-col>
            <v-col
              cols="12"
              class="divider d-flex justify-content-center d-lg-none"
            >
              <hr />
            </v-col>
            <v-col
              cols="12"
              lg="6"
              xl="3"
              class="d-flex my-1"
            >
              <div class="contact-container">
                <h5 class="header">İLETİŞİM BİLGİLERİ</h5>
                <h6 class="sub-header">
                  İstanbul içi tüm ilçelere hizmet vermekteyiz.
                </h6>
                <div class="phone">
                  <div class="title">
                    <v-icon size="20">mdi-map-marker</v-icon>
                    <span>Adres:</span>
                  </div>
                  <span class="description">
                    Talatpaşa Caddesi bahar sokak No:49 Daire:13 Bahçelievler
                    /İstanbul
                  </span>
                </div>
                <div class="email">
                  <div class="title">
                    <v-icon size="20">mdi-email</v-icon>
                    <span>Email:</span>
                  </div>
                  <span class="description"> silyapiinsaat@gmail.com </span>
                </div>
                <div class="phone">
                  <div class="title">
                    <v-icon size="20">mdi-phone</v-icon>
                    <span>Telefon:</span>
                  </div>
                  <span class="description"> +90 535 873 44 76 </span>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              class="divider d-flex justify-content-center d-lg-none"
            >
              <hr />
            </v-col>
            <v-col
              cols="12"
              xl="5"
              class="pl-xl-5 my-1 contactus-form-wrapper"
            >
              <div class="contactus-form">
                <div class="title mb-1">BİZ SİZİ ARAYALIM</div>
                <v-form
                  method="POST"
                  action=""
                  id="contactForm"
                >
                  <v-row>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="contactModel.name"
                        label="Adınız"
                        variant="outlined"
                        density="comfortable"
                        hide-details
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="contactModel.lastName"
                        label="Soyadınız"
                        variant="outlined"
                        density="comfortable"
                        hide-details
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="contactModel.name"
                        label="Eposta Adresiniz"
                        variant="outlined"
                        density="comfortable"
                        hide-details
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="contactModel.name"
                        label="Telefon Numaranız"
                        variant="outlined"
                        density="comfortable"
                        hide-details
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        id="remark"
                        label="Mesajınız"
                        v-model="contactModel.remark"
                        variant="outlined"
                        density="comfortable"
                        counter="100"
                        maxlength="100"
                        :hint="$t('public.this_field_required')"
                        :rules="requiredFieldRule"
                        required
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-btn
                        color="primary"
                        type="submit"
                        block
                      >
                        GÖNDER
                        <v-icon size="20">mdi-check</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </div>
      </section>
      <footer
        id="footer"
        class="footer"
      >
        <img
          class="logo"
          src="/images/logo-white.svg"
          alt=""
        />
        <div>Sil Yapı İnşaat</div>
      </footer>
    </div>
    <!-- SCROLLER END -->
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import AboutUs from "@/components/AboutUs.vue";
export default {
  layout: "default",
  head() {
    return {
      title: "Anasayfa",
    };
  },
  data: () => {
    return {
      isSplashVisible: true,
      isSplashFading: false,
      timers: [],
      contactModel: {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        remark: "",
      },
    };
  },
  mounted() {
    this.handleWindowLoad = this.handleWindowLoad.bind(this);
    if (document.readyState === "complete") {
      this.handleWindowLoad();
    } else {
      window.addEventListener("load", this.handleWindowLoad);
    }
  },
  beforeDestroy() {
    window.removeEventListener("load", this.handleWindowLoad);
    this.clearTimers();
    this.setBodyOverflow("auto");
  },
  watch: {
    isSplashVisible(isVisible) {
      this.setBodyOverflow(isVisible ? "hidden" : "auto");
    },
  },
  methods: {
    setBodyOverflow(value) {
      document.body.style.overflowY = value;
    },
    addTimer(timerId) {
      this.timers.push(timerId);
    },
    clearTimers() {
      this.timers.forEach((timerId) => clearTimeout(timerId));
      this.timers = [];
    },
    playShowcaseVideo() {
      const rVideo = this.$refs.showcaseVideo;
      if (!rVideo || typeof rVideo.play !== "function") {
        return;
      }

      rVideo.pause();
      rVideo
        .play()
        .then((res) => {
          console.log("playing start", res);
        })
        .catch((err) => {
          console.log("error playing", err);
        });
    },
    handleWindowLoad() {
      this.playShowcaseVideo();

      const fadeTimer = setTimeout(() => {
        this.isSplashFading = true;
        const hideTimer = setTimeout(() => {
          this.isSplashVisible = false;
          this.isSplashFading = false;
        }, 500);
        this.addTimer(hideTimer);
      }, 1000);
      this.addTimer(fadeTimer);
    },
  },
  components: {
    Header,
  },
};
</script>
