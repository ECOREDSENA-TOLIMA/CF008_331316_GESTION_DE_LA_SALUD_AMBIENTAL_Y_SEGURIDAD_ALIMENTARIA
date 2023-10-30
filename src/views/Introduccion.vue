<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-down") Bienvenido a este componente formativo denominado “#[b Normativa vigente para la gestión de la salud ambiental]” para comenzar el recorrido por el mismo, se debe revisar la información que se presenta a continuación:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="Normativa vigente para la gestión de la salud ambiental" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Normativa vigente para la gestión de la salud ambiental
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
