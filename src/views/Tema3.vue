<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Modelo de vigilancia y control sanitario para la gestión de los riesgos asociados al uso y consumo de bienes y servicios

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-lg.col-10.mb-2
        img(src='@/assets/curso/temas/tema3/tema3-1.png', alt='') 
      .col-lg-8.col-12
        p.mb-3(data-aos="fade-down") Colombia mediante la #[b Resolución 1229 de 2013], establece el modelo de inspección, vigilancia y control sanitario, el cual incorpora el análisis y gestión del riesgo asociado al uso y consumo de bienes y servicios, a lo largo de todas las fases de las cadenas productivas, buscando no afectar la salud humana, ello en cumplimiento con las recomendaciones de la #[b Organización Mundial de la Salud (OMS)] y de la #[b Organización Mundial del Comercio (OMC)], con el fin de proteger la salud y vida de las personas y conservar el ambiente.
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-down-left")
          .row 
            .col-lg-9.mb-2
              p.mb-0 Las disposiciones de la mencionada #[b Resolución 1229 de 2013], deben ser aplicadas “a todos los bienes y servicios de uso y consumo humano y serán de obligatorio cumplimiento por parte de los sujetos responsables de desarrollar el modelo a que refiere esta resolución, cuyas actividades productivas influyan directa o indirectamente en la salud de la población.” (Artículo 2, Resolución 1229 de 2013).
            .col-lg-3.col-10
              img(src='@/assets/curso/temas/tema3/y1.png', alt='')

    p.mb-4(data-aos="fade-down") Según el artículo 4, Resolución 1229 de 2013, los sujetos de inspección y control sanitario pueden definirse de la siguiente manera: 

    .titulo-segundo.color-primario.mb-4(data-aos="fade-right")
      h3 Los sujetos de inspección, vigilancia y control sanitario

    p.mb-4(data-aos="fade-down") Son las personas naturales y jurídicas, organizaciones e instituciones obligadas a proteger la salud pública y garantizar la seguridad sanitaria a través de su desempeño, ya sea en condición de usuario / consumidor; proveedor / productor o autoridad sanitaria: 

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0.text-center Autoridades sanitarias.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.mb-0.text-center Autoridad sanitaria competente en inspección, vigilancia y control sanitario.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.mb-0.text-center Proveedor / productor.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.mb-0.text-center Usuario / consumidor. 

    .tarjeta.color-acento-contenido.p-3.mb-5(data-aos="fade-down-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/tema2/ico-web.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Resolución 1229 de 2013
              p En el siguiente documento, Resolución 1229 de 2013, se relacionan los aspectos técnicos para el modelo de inspección, vigilancia y control sanitario. 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%201229%20de%202013.PDF" target="_blank")
                span Enlace web
                i.fas.fa-file-code

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Objetos de inspección

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Ahora bien, en el marco del modelo de inspección, vigilancia y control sanitario se hace referencia a todos los bienes y servicios de uso y consumo humano originados de cadenas productivas, estén o no reguladas por estándares de calidad, incluyendo condiciones sanitarias y riesgos ambientales generados en los procesos de producción y uso. Comprendiendo todas las categorías establecidas en las normas vigentes, y las demás que sean definidas y adicionadas por este Ministerio de acuerdo a las actualizaciones o modificaciones sobre la materia. (Artículo 3, Resolución 1229 de 2013).
    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Modelo

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El modelo operativo de inspección, vigilancia y control sanitario en salud ambiental, se basa en el principio de previsión y centra el desarrollo de las acciones con un enfoque preventivo con el objetivo de contar con la capacidad anticipatoria para eliminar, reducir o mitigar riesgos antes de producirse un daño a la salud pública, generados por condiciones sanitarias asociados a la producción de bienes y servicios. 
          br
          br
          | Bajo este enfoque preventivista, se deben plantear las acciones de promoción de la salud, mejores prácticas y el fomento de una cultura sanitaria en la ciudadanía. Así mismo, incluye procesos de acompañamiento y auditoría para asegurar el control previo a bienes y servicios, el desarrollo de acciones que deban implementarse como cautelares y el control de la gestión del modelo.
    
    .tarjeta.color-acento-contenido.p-3.mb-5(data-aos="fade-down-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/tema1/doc3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Modelo Operativo de Inspección, Vigilancia y Control Sanitario
              p En el documento que se propone a continuación se encuentra el “Modelo Operativo de Inspección, Vigilancia y Control Sanitario para Salud Ambiental. Ministerio de Salud y Protección Social”, para que se realice la revisión total del mencionado modelo operativo. 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/RID/modelo-operativo-ivc-t.pdf" target="_blank")
                span Enlace web
                i.fas.fa-file-code

    .titulo-segundo.color-primario.mb-4(data-aos="fade-right")
      h3 Para la inspección, vigilancia y control de alimentos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta inspección sanitaria se basa en identificar aquellas Enfermedades Transmitidas por los Alimentos (ETA) en los establecimientos, sin dejar de lado los alimentos que cuentan con infracciones o incumplimientos de la normatividad sanitaria vigente, en las etapas y peligros de mayor riesgo. Algunos factores de riesgo de ETA son comunes a muchos países o a ciertos tipos de alimentos y procesos de elaboración, mientras que otros son únicos según el origen, la naturaleza o los métodos de manipulación o elaboración relativos a ciertos productos.

    .tarjeta.color-acento-contenido.p-3.mb-5(data-aos="fade-down-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/tema1/doc3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Inocuidad de los alimentos
              p Para la inocuidad de alimentos, se cuenta con el Modelo de Inspección, Vigilancia y Control Sanitario, el cual tiene en cuenta las disposiciones de la Resolución 1229 de 2013. Se puede consultar a continuación la totalidad del modelo.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.invima.gov.co/documents/20143/1402493/28.+Manual+de+IVC+de+Alimentos+y+Bebidas+basado+en+el+riesgo+para+Las+ETS.pdf" target="_blank")
                span Enlace web
                i.fas.fa-file-code

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-7.mb-2.mb-md-0
        p Teniendo en cuenta que la vigilancia de los alimentos está basada en el análisis de riesgo, que a nivel nacional es conocido como el #[b Sistema de Medidas Sanitarias y Fitosanitarias (MSF)], y en concordancia con lo dispuesto por el CONPES 3550 de 2008 sobre articular acciones con otros sectores, el documento denominado “Lineamientos sectoriales construcción de la Política Integral de salud ambiental para todos del Ministerio de Salud y Protección Social” del año 2011, propone como podría ser la vinculación de los procesos de planeación y la coordinación con CONASA y COTSA (algunos sectores nacionales y territoriales que tienen competencias directas en la intervención desde la granja, la industria, el transporte, la transformación de la materia prima en alimento, entre otros) y deja abierto para que se vinculen otros sectores y actores públicos y privados. 
      .col-md-5
        img(src="@/assets/curso/temas/tema3/tema3-5.png")

    .tarjeta.color-acento-contenido.p-3.mb-5(data-aos="fade-down-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/tema1/doc3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Lineamientos sectoriales construcción de la Política Integral de salud ambiental para todos
              p Se debe leer con atención el documento “Lineamientos sectoriales construcción de la Política Integral de salud ambiental para todos” anteriormente mencionado.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/RBC/lineamientos-sectoriales-construccion-politica-integral-salud-ambiental-para-todos-.pdf" target="_blank")
                span Enlace web
                i.fas.fa-file-code

    .cajon.color-secundario.p-4.mb-4(data-aos="fade-down-left")
      p.mb-0 No se debe olvidar, que el Plan Decenal de Salud Pública 2022-2031, incluyó en sus metas lo relacionado con la calidad del aire pues es el componente que más genera enfermedades en la población, al igual que la calidad del agua para consumo humano, que también tiene un gran peso a nivel poblacional, de ahí la necesidad de trabajar políticas articuladas (más limpias para que se tenga control en las emisiones generadas por fuentes fijas y móviles) y no limitarse a la atención de los casos clínicos.

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Protocolos

    p.mb-5(data-aos="fade-down") Cuando las disposiciones definidas mediante leyes, decreto y otros actos administrativos no son muy claras, ya sea porque están muy generales en sus disposiciones, se hace necesario explicarlas o ampliarlas, utilizando otros actos administrativos, entre los que se encuentran las resoluciones, protocolos, guía técnica, entre otros, para el componente ambiental agua, se presentan los siguientes documentos:

    .tarjeta.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="fade-down-left")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/doc3.svg")

        .col-md.col-lg-6
          h4 Protocolo de Autocontrol persona prestadora del servicio público de acueducto y los procesos de supervisión por parte de la autoridad sanitaria
          p.mb-4 En el Protocolo de Autocontrol persona prestadora del servicio público de acueducto y los procesos de supervisión por parte de la autoridad sanitaria, se puede encontrar el formato de registro de actividades de control realizada al interior del sistema de suministro de agua para consumo humano, el formato de registro de los resultados de análisis de muestras de agua para consumo humano de control y el formato de control diario de operación.
          
          a.boton.color-acento-botones.texto-blanco(href="https://www.minvivienda.gov.co/sites/default/files/2020-08/protocolo-autocontrol-persona-prestadora_msps-mvct.pdf" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-4.mb-2.mb-md-0
        img(src="@/assets/curso/temas/tema3/tema3-6.png")
      .col-md-8
        p Es importante tener claridad frente a dos conceptos esenciales: 
        ul.lista-ul.ms-3.ms-md-4
          li
            span #[b • Protocolos:] conjunto de definiciones, criterios, reglas, técnicas y procedimientos estandarizados necesarios para la correcta organización y desarrollo de acciones sanitarias, bien sean públicas o privadas, y la adecuada consecución final de las mismas dentro de los términos que sean definidos por la autoridad competente para la ejecución desde políticas, estrategias y programas, hasta servicios y productos. (parágrafo 2, artículo 11, Resolución 1229 de 2013).
          li
            span #[b • Medidas sanitarias:] conjunto de disposiciones de salud pública con intencionalidad cautelar, correctiva o sancionatoria, que son aplicadas por la autoridad sanitaria para prevenir, mitigar, controlar o eliminar características de algo que origine riesgos, o afecte o pueda afectar la salud de la población.” (parágrafo 3, artículo 11, Resolución 1229 de 2013).

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Guías e instrumentos para la inspección vigilancia y control sanitario

    p.mb-4(data-aos="fade-down") Entre las guías e instrumentos utilizados por la autoridad sanitaria para realizar las acciones de inspección, vigilancia y control sanitario a los objetos de inspección, vigilancia y control de interés para salud ambiental se encuentra el acta. En el siguiente recurso se podrá conocer la definición de actas y sus tipos:

    .titulo-segundo.color-primario.mb-4(data-aos="fade-right")
      h3 ¿Qué es un acta?
    p.mb-4(data-aos="fade-down") Instrumento que permite consolidar la información frente a las acciones de inspección, vigilancia y control sanitario, en concordancia con las normas vigentes, dicha acta se diligencia en el momento de efectuar la visita sanitaria.

    .titulo-segundo.color-primario.mb-4(data-aos="fade-right")
      h3 Acta general de inspección, vigilancia y control sanitario
    p.mb-4(data-aos="fade-down") Fundamentada en el enfoque de riesgo y la conforman los aspectos generales definidos por la #[b Ley 09 de 1979]. Este instrumento debe ser utilizado para realizar la inspección y vigilancia sanitaria a los objetos de IVC de interés para salud ambiental los cuales no cuenten con normatividad específica para realizar la vigilancia sanitaria, como por ejemplo viviendas (atención de quejas o eventos), papelerías, misceláneas, entre otros.  
      
    .titulo-segundo.color-primario.mb-4(data-aos="fade-right")
      h3 Actas específicas para la inspección y vigilancia sanitaria
    p.mb-4(data-aos="fade-down") Se encuentran centradas en la actividad económica principal del objeto de IVC sanitario y la normatividad sanitaria específica aplicable a estos objetos de IVC sanitario. Durante la visita de inspección se aplicarán actas específicas con enfoque de riesgo para aquellos objetos de IVC sanitario que cuenten con normatividad propia para la inspección y vigilancia de aspectos particulares.

    .tarjeta.color-acento-contenido.p-3.mb-5(data-aos="fade-down-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/tema1/doc3.svg")
        .col
          .row.justify-content-between.align-items-center.mb-3
            .col.mb-3.mb-sm-0
              h3.mb-1 Formato de acta
              p En el siguiente enlace se puede consultar el formato de acta.  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://historico.santander.gov.co/intra/index.php/antico/viewdownload/530-formatos/10073-acta-general-de-inspeccion-vigilancia-y-control-sanitario" target="_blank")
                span Enlace web
                i.fas.fa-file-code
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Resolución 82 de 2009
              p Para el caso de los formularios utilizados en las visitas de inspección por parte de la autoridad sanitaria a los sistemas de suministro de agua para consumo humano, hacen parte de la Resolución 82 de 2009.  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.ins.gov.co/Normatividad/Resoluciones/RESOLUCI%C3%93N%20082%20DE%202009.pdf" target="_blank")
                span Enlace web
                i.fas.fa-file-code

    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Gestión de la salud ambiental a nivel nacional y territorial

    p.mb-4(data-aos="fade-down") En el marco de la gestión de la salud ambiental a nivel nacional, aparte de avanzar con reglamentar aspectos ambientales y que para tal efecto han emitido normas, políticas sectoriales, políticas intersectoriales, planes, programas y proyectos, entre otros; también las entidades públicas vienen trabajando en la elaboración de un sistemas de información  para salud ambiental, como es la #[b Política Integral de Salud Ambiental (PISA)], si bien es cierto que actualmente existen diferentes sistemas de información por sector, también es cierto que ninguno de ellos se articula, ni están teniendo en cuenta los aspectos ambientales de forma coordinada para poder establecer una completa coordinación. 

    p.text-center.mb-5(data-aos="fade-down") #[b Los sistemas de información que actualmente están en operación son:]

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-4.mb-2.mb-md-0
        img(src="@/assets/curso/temas/tema3/tema3-7.png")
      .col-md-8
        LineaTiempoD.color-acento-botones.mb-5(data-aos="fade-down-right")
          div(numero="1" titulo="Sistema de Vigilancia de la calidad del agua potable (SIVICAP)") 
            p Administrado por el Instituto Nacional de Salud. Este sistema es cargado con los resultados de las acciones de Inspección, Vigilancia y Control del agua potable que realizan las Entidades Territoriales de Salud en los acueductos ubicados tanto en zona urbana como rural.
          div(numero="2" titulo="Sistema Único de Información (SUI)") 
            p Administrado por la Superintendencia de Servicios Públicos Domiciliarios. Este sistema es cargado con resultados obtenidos mediante la inspección y vigilancia que realiza la superintendencia a los acueductos.
          div(numero="3" titulo="El Sistema de Información Ambiental de Colombia (SIAC)") 
            p Es el conjunto integrado de actores, políticas, procesos, y tecnologías involucradas en la gestión de información ambiental del país, para facilitar la generación de conocimiento, la toma de decisiones, la educación y la participación social para el desarrollo.
          div(numero="4" titulo="El SUISA (Sistema Unificado de Información en Salud Ambiental)") 
            p Definido como un sistema de gestión del conocimiento, que recoge la información que producen los sectores para el análisis de los determinantes sociales y ambientales y sus efectos sobre la salud de la población, que apoya la toma de decisiones intersectoriales, aporta la gestión intersectorial y el conocimiento y comunicación del riesgo. trabaja temática en salud ambiental como agua, aire, clima, químicos y seguridad vial, entre otros.

    .cajon.color-secundario.p-4.mb-4(data-aos="fade-down-left")
      p.mb-0 También a los establecimientos objeto de inspección, vigilancia y control, la autoridad sanitaria les solicita que tengan desarrollado e implementado el plan de saneamiento. Este plan lo conforma: el Programa de limpieza y desinfección, el Programa de Residuos sólidos, el Manejo Integral de Plagas y el Programa de agua para consumo humano.

    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Escenarios de intersectorial nacionales territoriales para la gestión de la salud ambiental y seguridad sanitaria

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-8.mb-2.mb-md-0
        p De conformidad con lo planteado en el numeral 2 de este contenido, relacionado con el análisis de riesgo, y específicamente lo establecido para articular las competencias de los ministerios, en los siguientes espacios para la gestión de la salud ambiental tanto en el ámbito nacional y territorial, se encuentran procesos de planeación y coordinación derivados del CONPES 3550 de 2008, que se puede revisar leyendo el siguiente documento.
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/doc3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Conpes 3550 de 2008
                  p A continuación, se puede consultar el documento: estrategia de entornos saludables, plan de acción intersectorial.  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/plan-de-accion-intersectorial.pdf" target="_blank")
                    span Enlace web
                    i.fas.fa-file-code
      .col-md-4
        img(src="@/assets/curso/temas/tema3/tema3-8.png")




</template>

<script>
export default {
  name: 'Tema3',
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
