<template>
  <!-- SERVICES SECTION -->
  <section
    id="services"
    class="services-section"
  >
    <h4 class="section-title">HİZMETLERİMİZ</h4>
    <p class="section-desc my-2">
      Silyapı inşaat olarak 40 yılı aşan tecrübemizle sizlere Kentsel dönüşüm,
      Proje hizmetleri ve Mimarlık hizmetleri veriyoruz.
    </p>
    <v-row>
      <v-col
        cols="12"
        lg="6"
      >
        <v-card
          elevation="0"
          class="service-card"
        >
          <v-card-text class="d-flex flex-wrap">
            <v-col
              cols="5"
              class="d-none d-md-flex"
            >
              <img
                src="/images/kentsel-donusum.png"
                class="rounded-lg"
              />
            </v-col>
            <v-col
              cols="12"
              md="7"
            >
              <div class="card-title">Kentsel Dönüşüm</div>
              <div class="card-description">
                Kentsel Dönüşüm: Güvenle Geleceğe 1982 yılından bu yana inşaat
                sektöründe edindiğimiz deneyimle, kentsel dönüşüm projelerinde
                güvenli, sağlam ve modern yaşam alanları inşa ediyoruz.
                <br />
                <br />
                Depreme dayanıklı, estetik ve sürdürülebilir yapılarla
                şehirlerimizi geleceğe taşıyor, sizlere huzurlu bir yaşam
                sunuyoruz
              </div>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        lg="6"
      >
        <v-card
          elevation="0"
          class="service-card"
        >
          <v-card-text class="d-flex flex-wrap">
            <v-col
              cols="5"
              class="d-none d-md-flex"
            >
              <img
                src="/images/proje-hizmetleri.png"
                class="rounded-lg"
              />
            </v-col>
            <v-col
              cols="12"
              md="7"
            >
              <div class="card-title">Proje Hizmetleri</div>
              <div class="card-description">
                Proje Hizmetleri: Güçlü Temeller, Güvenli Yapılar İnşaat
                projelerinin başarısı, doğru planlama ve titizlikle hazırlanmış
                projelerle başlar.
                <br />
                <br />
                1982 yılından bu yana sektörde edindiğimiz bilgi ve deneyimle,
                statik, mimari, elektrik ve inşaat için gereken tüm projeleri
                profesyonel ekibimizle hazırlıyoruz.
              </div>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        lg="6"
      >
        <v-card
          elevation="0"
          class="service-card"
        >
          <v-card-text class="d-flex flex-wrap">
            <v-col
              cols="5"
              class="d-none d-md-flex"
            >
              <img
                src="/images/anahtar-teslim.png"
                class="rounded-lg"
              />
            </v-col>
            <v-col
              cols="12"
              md="7"
            >
              <div class="card-title">Anahtar Teslim İnşaat</div>
              <div class="card-description">
                Bir yapının hayata geçmesi yalnızca inşa etmekle değil, sürecin
                tamamını doğru yönetmekle mümkündür.
                <br />
                <br />
                1982 yılından bu yana edindiğimiz tecrübe ile, projelendirmeden
                ruhsat süreçlerine, kaba inşaattan ince işçiliğe kadar tüm
                aşamaları tek elden yürütüyoruz. Zamanında teslim, kaliteli
                malzeme ve yüksek işçilik standartlarıyla hayallerinizdeki
                yapıyı anahtar teslim olarak sizlere sunuyoruz.
              </div>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  name: "Services",
};
</script>
