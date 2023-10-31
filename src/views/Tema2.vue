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

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-down")
      .col-md-4.col-lg-3.col-10.mb-2.col-lg-md-0
        img(src='@/assets/curso/temas/tema2/tema2-3.png', alt='')
      .col-md-8.col-lg-9.col-12
        p En el marco de la gestión de salud ambiental, las características normativas en la gestión del riesgo en Colombia, buscan atender antes, durante y después de una emergencia, con el objeto de contribuir en la seguridad, el bienestar, la calidad de vida de las personas y al desarrollo sostenible, en tal sentido se han formulado políticas públicas, normas generales, guías, entre otros, en el siguiente enlace se presentan algunas de ellas.
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema2/ico-web.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Normatividad
                  p En el siguiente enlace se puede consultar las diferentes leyes y decretos en el Portal Único del Estado Colombiano.  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://portal.gestiondelriesgo.gov.co/Paginas/Normatividad.aspx" target="_blank")
                    span Enlace web
                    i.fas.fa-file-code

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Instrumentos procedimentales para la prevención del riesgo

    .row.justify-content-center.align-items-center.mb-2 
      .col-lg-8.col-12.mb-2
        p.mb-3(data-aos="fade-down") La prevención de riesgo hace referencia a la medidas y acciones de intervención restrictiva o prospectiva dispuestas con anticipación con el fin de evitar que se genere riesgo. Puede enfocarse a evitar o neutralizar la amenaza o la exposición y la vulnerabilidad ante la misma en forma definitiva para impedir que se genere nuevo riesgo. Los instrumentos esenciales de la prevención son aquellos previstos en la planificación, la inversión pública y el ordenamiento ambiental territorial, que tienen como objetivo reglamentar el uso y la ocupación del suelo de forma segura y sostenible (Numeral 18, artículo 4, Ley 1523 de 2012).
        p.mb-3(data-aos="fade-down") En cuanto a los instrumentos procedimentales para la prevención del riesgo, de conformidad con la #[b Ley 1523 de 2015], corresponden a los instrumentos de planificación, mediante los cuales las entidades públicas y privadas, deberán:

        .bloque-texto-d.color-primario.p-4.mb-4(data-aos="fade-down")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular Identificar, priorizar, formular, programar y hacer seguimiento a las acciones necesarias para conocer y reducir las condiciones de riesgo (actual y futuro) de sus instalaciones y de aquellas derivadas de su propia actividad u operación que pueden generar daños y pérdidas a su entorno, así como dar respuesta a los desastres que puedan presentarse, permitiendo además su articulación con los sistemas de gestión de la entidad, los ámbitos territoriales, sectoriales e institucionales de la gestión del riesgo de desastres y los demás instrumentos de planeación estipulados en la Ley 1523 de 2012 para la gestión del riesgo de desastres.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 (Artículo 2.3.1.5.2.1, Decreto 2171 de 2015)
      .col-lg.col-10
        img(src='@/assets/curso/temas/tema2/tema2-2.png', alt='')

    p.text-center.mb-5(data-aos="fade-down") Se puede conocer a continuación los instrumentos de planificación, según lo dispuesto por la #[b Ley 1523 de 2012:] 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-left")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico1.png' alt='')
        h4.text-center Artículo 32. Plan de Gestión del Riesgo
        p.text-center Los tres niveles de gobierno formularán e implementarán planes de gestión del riesgo para priorizar, programar y ejecutar acciones por parte de las entidades del sistema nacional, en el marco de los procesos de conocimiento del riesgo, reducción del riesgo y de manejo del desastre, como parte del ordenamiento territorial y del desarrollo, así como para realizar su seguimiento y evaluación.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico2.png' alt='')
        h4.text-center Artículo 33. Plan Nacional de Gestión del Riesgo de Desastres
        p.text-center Es el instrumento que define los objetivos, programas, acciones, responsables y presupuestos, mediante las cuales se ejecutan los procesos de conocimiento del riesgo, reducción del riesgo y de manejo de desastres, en el marco de la planificación del desarrollo nacional.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico3.png' alt='')
        h4.text-center Artículo 34. Elaboración y evaluación del plan
        p.text-center La Unidad Nacional para la Gestión del Riesgo de Desastres, es la instancia encargada de elaborar el plan nacional de gestión del riesgo con los insumos provenientes de los tres comités nacionales de gestión del riesgo y de los consejos territoriales.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico4.png' alt='')
        h4.text-center Artículo 35. Estrategia Nacional para la Respuesta a Emergencias
        p.text-center La estrategia nacional para la respuesta a emergencias es el marco de actuación de las entidades del sistema nacional de gestión del riesgo. Se refiere a todos los aspectos que deben activarse por las entidades en forma individual y colectiva con el propósito de ejecutar la respuesta a emergencias de manera oportuna y efectiva.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico5.png' alt='')
        h4.text-center Artículo 36. Elaboración de la Estrategia Nacional para la Respuesta a Emergencias
        p.text-center La Unidad Nacional para la Gestión del Riesgo de Desastres, es la instancia encargada de elaborar la estrategia nacional para la respuesta a emergencias con los insumos provenientes de los tres comités nacionales de gestión del riesgo y de los consejos territoriales.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico6.png' alt='')
        h4.text-center Artículo 37. Planes departamentales, distritales y municipales de gestión del riesgo y estrategias de respuesta
        p.text-center Las autoridades departamentales, distritales y municipales formularán un plan de gestión del riesgo de desastres y una estrategia para dar respuesta a emergencias de su respectiva jurisdicción, en armonía con el plan de gestión del riesgo y la estrategia de respuesta nacionales. El plan y la estrategia, y sus actualizaciones, serán adoptados mediante decreto expedido por el gobernador o alcalde.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico1.png' alt='')
        h4.text-center Artículo 38. Incorporación de la gestión del riesgo en la inversión pública
        p.text-center Todos los proyectos de inversión pública que tengan incidencia en el territorio deben incorporar un análisis de riesgo de desastres, cuyo nivel de detalle estará definido en función de la complejidad y naturaleza del proyecto en cuestión. Este análisis deberá ser considerado desde las etapas primeras de formulación, a efectos de prevenir la generación de futuras condiciones de riesgo.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico2.png' alt='')
        h4.text-center Artículo 39. Integración de la gestión del riesgo en la planificación territorial y del desarrollo
        p.text-center Los planes de ordenamiento territorial, de manejo de cuencas hidrográficas y de planificación del desarrollo en los diferentes niveles de gobierno, deberán integrar el análisis del riesgo en el diagnóstico biofísico, económico y socio ambiental y, considerar, el riesgo de desastres, como un condicionante para el uso y la ocupación del territorio, procurando evitar la configuración de nuevas condiciones de riesgo.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico3.png' alt='')
        h4.text-center Artículo 40. Incorporación de la gestión del riesgo en la planificación
        p.text-center Los distritos, áreas metropolitanas y municipios en un plazo no mayor a un (1) año, posterior a la fecha en que se sancione la presente ley, deberán incorporar en sus planes de desarrollo y de ordenamiento territorial las consideraciones sobre desarrollo seguro y sostenible derivadas de la gestión del riesgo, de conformidad con los principios de la presente ley.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico4.png' alt='')
        h4.text-center Artículo 41. Ordenamiento territorial y planificación del desarrollo
        p.text-center Los organismos de planificación contemplarán las recomendaciones específicas sobre gestión de riesgos, en especial, lo relativo a la incorporación del riesgo de desastre como un determinante ambiental que debe ser considerado en los planes de desarrollo y de ordenamiento territorial, de tal forma que se aseguren asignaciones de fondos para la ejecución de proyectos de gestión del riesgo de desastres en cada territorio.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico5.png' alt='')
        h4.text-center Artículo 42. Análisis específicos de riesgo y planes de contingencia
        p.text-center Las entidades encargadas de la prestación de servicios públicos, que desarrollen actividades que puedan significar riesgo de desastre para la sociedad, así como las que específicamente determine la Unidad Nacional para la Gestión del Riesgo de Desastres, deberán realizar un análisis de los posibles efectos de eventos naturales y con base en este análisis diseñará e implementarán medidas de mejoramiento.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico6.png' alt='')
        h4.text-center Artículo 43. La Cooperación Internacional en la Gestión del Riesgo
        p.text-center La cooperación internacional en materia de gestión del riesgo de desastres, que sean explícitamente requeridas por el Gobierno Nacional, deberán ejercerse teniendo como objetivo central el fortalecimiento del sistema nacional y de las entidades públicas, privadas y comunitarias que lo integran. La ayuda humanitaria deberá proveerse teniendo en cuenta los principios de calidad, oportunidad, pertinencia y eficacia.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-ico1.png' alt='')
        h4.text-center Artículo 44. El Control en la Gestión del Riesgo de Desastres
        p.text-center El Estado a través de sus órganos de control ejercerán procesos de monitoreo, evaluación y control en la gestión de riesgo de desastre, empleando para tales fines los medios establecidos por la ley, y la sociedad a través de los mecanismos de veeduría ciudadana.

    .cajon.color-secundario.p-4.mb-4(data-aos="fade-down-left")
      p.mb-0 Es de agregar, que entre la información que define los referidos instrumentos de planificación del desarrollo y para la gestión, corresponden a: “Planes de Ordenación y Manejo de Cuencas Hidrográficas (POMCA), Planes de Ordenación y Manejo de Unidades Ambientales Costeras (POMIUAC), Planes de Ordenamiento Territorial (POT), Planes Municipales de Gestión del Riesgo (PMGRD), Estrategias Municipales de Respuesta (EMRE), Planes Territoriales y Sectoriales de Cambio Climático, entre otros de acuerdo con los requerimientos de la entidad.” (Literal d, artículo 2.3.1.5.2.1,1, Decreto 2171 de 2015).

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Fundamentos técnicos básicos en riesgos

    p.mb-4(data-aos="fade-down") En el marco del conocimiento del riesgo y en la gestión de salud ambiental, los fundamentos técnicos básicos en riesgo que más son evaluados son la #[b amenaza] y la #[b vulnerabilidad], se puede profundizar en cada uno de estos conceptos a continuación: 

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Amanezas y vulnerabilidades</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig-5a.svg', alt='La figura 5, muestra que los fundamentos técnicos básicos en riesgo, que más son evaluados son; la amenaza y la vulnerabilidad.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-5b.svg', alt='La figura 5, muestra que los fundamentos técnicos básicos en riesgo, que más son evaluados son; la amenaza y la vulnerabilidad.')

    p.mb-4(data-aos="fade-down") El CONPES #[b 3550 de 2008], con el fin de dimensionar la complejidad e integralidad para abordar la salud ambiental, presenta una propuesta de componentes de salud ambiental, para que sean tenidos en cuenta por las entidades que tienen competencia en el mejoramiento de la calidad ambiental, incluida las acciones de inspección, vigilancia y control, para conocerlas se recomienda leer con atención el siguiente documento.
    
    .tarjeta.color-acento-contenido.p-3.mb-5(data-aos="fade-down-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/tema1/doc3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Normatividad
              p En el siguiente enlace se puede consultar las diferentes leyes y decretos en el Portal Único del Estado Colombiano.  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3550.pdf" target="_blank")
                span Enlace web
                i.fas.fa-file-code


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
