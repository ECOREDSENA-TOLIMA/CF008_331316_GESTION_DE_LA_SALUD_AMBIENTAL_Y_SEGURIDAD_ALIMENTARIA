<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión del riesgo

    p.text-center.mb-4(data-aos="fade-down") #[b En el marco del análisis de riesgo que consiste: ]

    .bloque-texto-f.color-primario.pt-4.px-5(data-aos="fade-down-right")
      .bloque-texto-f__comillas
        i.fas.fa-quote-left
        i.fas.fa-quote-right
      p.text-regular.bloque-texto-f__texto En la determinación de consecuencias y probabilidades del riesgo, permitiendo su reconocimiento y comprensión y el detalle de las amenazas, los elementos expuestos y el riesgo. El análisis del riesgo es un examen detallado para conocer sus características, cualidades o su estado y extraer conclusiones considerando las partes que lo constituyen; haciendo una diferenciación de la magnitud y gravedad de las consecuencias a nivel interno de las instalaciones de la actividad y del área de influencia de probable afectación.
      .bloque-texto-f__autor.mb-3
        h4.mb-0 (Numeral 1.2.2, art. 2.3.1.5.2.1.1, Decreto 2157 de 2017)
        
    p.mb-4(data-aos="fade-down") Desde este análisis del riesgo y de acuerdo como lo que propone el documento denominado “Lineamientos Sectoriales - construcción de la Política Integral” (Ministerio de Salud y Protección Social, 2011), y en el marco de la gestión de la salud ambiental, se hace necesario que se articulen las acciones de inspección, vigilancia y control, con las funciones de salud pública, con el fin de cumplir las metas del Plan Decenal de Salud Pública 2022-2031 y los Objetivos de Desarrollo Sostenible (ODS). Además, dicha articulación permite integrar la prevención y la promoción, que son pilares importantes de la Atención Primaria en Salud (APS) y la Atención Primaria Ambiental (APA), con la acción intersectorial, encaminada a coadyuvar a la modificación sustancial de las causas estructurales de orden político, económico, social y ambiental que afectan o condicionan la salud humana, tanto a nivel nacional como territorial.

    p.text-center.mb-4(data-aos="fade-down") #[b En este orden de ideas, la estructura de una gestión de riesgos debe contemplar algunos aspectos específicos que se pueden conocer a continuación:]

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Aspectos específicos en la gestión del riesgo</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig-4a.svg', alt='La figura 4, muestra los aspectos especificos dentro de la estructura de la gestión del riesgo.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-4b.svg', alt='La figura 4, muestra los aspectos especificos dentro de la estructura de la gestión del riesgo.')


    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-8.col-md-10
        .tarjeta.color-primario.p-3
          p Ahora bien, en el marco de la gestión de salud pública, es importante aclarar el concepto de gestión del riesgo, haciendo clic en el siguiente botón:
          div.text-center.mb-4
            a.boton.color-acento-botones.me-3.mb-2(@click="modal1 = true")
              span Gestión del riesgo
              i.fas.fa-file

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1  Características normativas





    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Gestión del riesgo
          p Proceso que permite a la entidad territorial identificar, analizar e intervenir riesgos colectivos en salud, así como la percepción de la población frente a las amenazas y vulnerabilidades, y afrontar la incertidumbre, que consiste en disminuir o mantener la ocurrencia de eventos negativos para la salud en niveles socialmente aceptables a través de estrategias de prevención o mitigación.” (numeral 13.1.6, artículo 13, Resolución 518 de 2015).
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/tema2-1.png')


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
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
