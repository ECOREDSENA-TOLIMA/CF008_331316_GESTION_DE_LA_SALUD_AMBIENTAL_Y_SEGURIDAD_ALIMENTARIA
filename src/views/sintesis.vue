<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El componente formativo Normativa vigente para la gestión de la salud ambiental aborda la complejidad de la contaminación ambiental y otros factores externos que afectan la salud pública. Controlar adecuadamente estos factores es esencial para reducir la tasa de mortalidad en el país. Para lograrlo, es crucial conocer las leyes, decretos y políticas públicas relacionadas con la gestión de la salud ambiental.
    p.mb-5 El objetivo de este componente formativo es proporcionar una comprensión integral de las medidas adoptadas por el Ministerio de Salud y otras entidades responsables para mitigar los riesgos en el ámbito de la salud pública. A continuación, se presenta un esquema de los temas tratados en este componente: 

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="En la síntesis del componente Normativa vigente para la gestión de la salud ambiental aborda la complejidad de la contaminación ambiental y otros factores externos que afectan la salud pública y la normatividad existente.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
