<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normatividad de la gestión de la salud ambiental

    p.mb-3(data-aos="fade-down") Colombia desde el año 1923, hace un siglo, viene realizando acciones para contribuir a la gestión de la salud ambiental, con el fin de proteger y mejorar el medio ambiente, de esta manera emitió el Decreto 1371, cuyo objetivo es prevenir y controlar las enfermedades generadas por las condiciones del ambiente.
    p.mb-5(data-aos="fade-down") Podrá conocer algunos aspectos que se reglamentaron en el decreto 1331 a continuación:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Aspectos reglamentados en el Decreto 1371</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='La figura 1, muestra los aspectos que se reglamentaron en el Decreto 1371.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='La figura 1, muestra los aspectos que se reglamentaron en el Decreto 1371.')

    p.mb-5(data-aos="fade-down") Por otro lado, y a raíz de diferentes problemas sanitarios que presentaron las grandes ciudades, el Congreso de Colombia formula la #[b Ley 9 de 1979], también llamada “#[b Código Sanitario Nacional (CSN)]”, la cual dispone las medidas sanitarias y el inicio de la #[b(style="text-decoration-line: underline;") era del derecho sanitario]; conformada por las áreas de: saneamiento ambiental; atención a las personas y la vigilancia y control sanitarios.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La #[b Ley 9 de 1979], define que, para la protección del medio ambiente, se deben seguir unas normas generales que servirán de base a las disposiciones necesarias para preservar, restaurar y mejorar las condiciones sanitarias relacionadas con la salud humana, además dispone los procedimientos y las medidas que se deben adoptar para la regulación, legalización y control de las descargas de los residuos y materiales que afectan o pueden afectar las condiciones sanitarias del ambiente.

    p.mb-5(data-aos="fade-down") Posteriormente, en el año #[b 1991] se promulga la #[b Constitución Política Nacional de Colombia], que estableció algunas disposiciones las cuales son tenidas en cuenta por las reglamentaciones de los aspectos ambientales. Algunos de los artículos dispuestos en el momento de reglamentar aspectos ambientales son:

    .BGIMG01.mb-5.p-4(data-aos="fade-down-right")
      SlyderB.mb-5(:datos="datosSlyder")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-10.col-lg-8
        .cajon.tarjeta--azul.row.p-4
          .col-10.col-md-3.col-lg-2 
            img(src='@/assets/curso/temas/tema1/tema1-7.svg', alt='')
          .col-12.col-md
            p.mb-0 Es importante recordar que el marco de la Rama Ejecutiva está conformado por diferentes ministerios, los cuales han tenido competencia directa para reglamentar los aspectos ambientales, entre ellos se encuentra: #[b el Ministerio de Salud y Protección Social y el Ministerio de Ambiente y Desarrollo Sostenible.]

    p.mb-4(data-aos="fade-down") Ahora bien, los elementos de política ambiental se encuentran consagrados en la Ley 99 de 1993, por la cual se crea el Ministerio de Ambiente y el Sistema Nacional Ambiental, y establece las competencias a las corporaciones autónomas, los cuales son entes descentralizados claves para la gestión en las regiones y como antecedente importante para la formulación de lineamientos en salud y ambiente. 
    .cajon.color-primario.p-4.mb-4(data-aos="fade-down-left")
      p.mb-0 Es de agregar que cada sector cuenta con su política establecida. Es así que, en el caso de salud ambiental, donde tienen competencias varios sectores con el fin de orientar la gestión para el mejoramiento de la salud ambiental en el territorio urbano y rural, se hace necesario el trabajo articulado para la administración, y la construcción de espacios de coordinación, investigación y acción participativa, en las diferentes líneas de intervención que permitan una alta calidad de vida y de salud para todas las personas.
    
    p.mb-4(data-aos="fade-down") #[span En el marco de la gestión de salud ambiental en Colombia, se han emitidos normas, políticas y CONPES los cuales se enumeran en el siguiente material:]

    .BGIMG02.p-4.mb-5(data-aos="fade-down-left")
      h4.mb-3.text-center(style="color: #755952") CONPES
      p.mb-0.text-center #[b Consejo Nacional de Policia Económica y Social]
      p.text-center #[b República de Colombia]
      .row.justify-content-center
        .col-md-10.col-lg-8.mb-4
          img(src='@/assets/curso/temas/tema1/tema1-8.png', alt='')
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 1
              span #[b CONPES 3550 de 2008.] Lineamientos para la formulación de la Política Integral de Salud Ambiental con énfasis en los componentes de la calidad del aire, calidad del agua y seguridad química.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 2
              span #[b CONPES 3700 de 2011.] Estrategia institucional para la articulación de políticas y acciones en materia de cambio climático en Colombia.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 3
              span #[ Política Nacional de Cambio Climático, año 2017:] Ministerio de Ambiente y Desarrollo Sostenible.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 4
              span #[b CONPES 3718 de 2012.] Espacios públicos.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 5
              span #[b CONPES 3819 de 2014.] Política Nacional para consolidar el sistema de ciudades de Colombia.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 6
              span #[b CONPES 3868 de 2016.] Política de gestión del riesgo asociado al uso de sustancia químicas.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 7
              span #[b CONPES 3874 de 2016.] Política Nacional para la gestión integral de residuos sólidos.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 8
              span #[b CONPES 3859 de 2016.] Política para la adopción e implementación de un catastro multipropósito rural-urbano.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 9
              span #[b CONPES 3870 de 2016.] Programa Nacional para la formulación y actualización de Planes de Ordenamiento Territorial - POT modernos.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 10
              span #[b CONPES 3886 de 2017.] Lineamientos de política y programa nacional de pago por servicios ambientales para la construcción de la paz.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 11
              span #[b CONPES 3818 de 2018.] Estrategia para la implementación de los Objetivos de Desarrollo Sostenible - ODS en Colombia.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 12
              span #[b CONPES 3943 de 2018.] Política para el mejoramiento de la calidad del aire.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 13
              span #[b CONPES 3934 de 2018.] Política de crecimiento verde.
        .col-md-6.mb-2
          ol.lista-ol--cuadro.lista-ol--separador
            li(style="display:flex;")
              .lista-ol--cuadro__vineta.custom
                span 14
              span #[b CONPES 3919 de 2018.] Política Nacional de edificaciones sostenibles.
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-4.col-lg-3
        img(src='@/assets/curso/temas/tema1/tema1-9.png', alt='')
      .col-12.col-md-8.col-lg-9
        p La relación entre salud y ambiente es una de las preocupaciones más significativas. Por ello el sector salud, tiene el deber de contribuir en la protección y el bienestar de las personas que propendan en el desarrollo humano sostenible.
        .cajon.color-secundario.p-4
          p Para ello este sector debe articular acciones con otros semejantes (ambiente, trabajo, agricultura, educación, comercio, servicios públicos, agropecuario, industrial, entre otros), que conlleven a conocer, monitorear y contrarrestar las causas del deterioro ambiental. La salud de las personas depende entre otras causas de las condiciones ambientales y la experiencia, ello quiere decir que la salud no es un resultado único de las acciones realizadas por el sector salud, sino que surge como resultado de los compromisos que asumen las personas, las comunidades los gobiernos y la participación social.

    p.mb-5(data-aos="fade-down") #[span A continuación, podrá consultar los principales factores del medio ambiente que pueden afectar la salud humana:]

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-lg-10.col-md-11.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema1/tema1-10.svg' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Según la Organización Mundial de Salud se estima que la carga global en salud (morbilidad) y el número de defunciones atribuidas a las condiciones del ambiente es del 24 % y el 23 %, respectivamente. 
      .col-lg-10.col-md-11.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema1/tema1-11.svg' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 En Cuanto a los factores contaminantes nocivos para la salud provienen diferentes fuentes como los gases y las partículas, por ello Larsen (2004) presenta evidencias sobre cómo el contaminante más fuertemente asociado a las muertes prematuras, bronquitis y afecciones respiratorias es el material particulado, en especial las partículas de menos de 2.5 micras de diámetro.
      .col-lg-10.col-md-11.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema1/tema1-12.svg' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 Por otra parte, la falta de cobertura de servicio de agua apta para el consumo humano y de sistemas de disposición de agua residual y de residuos sólidos, permite la presencia de enfermedades, entre las cuales están la diarrea, la filariasis linfática, la esquistosomiasis, el tracoma, infección por nemátodos intestinales, entre otras.
      .col-lg-10.col-md-11.col-12
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img.p-md-3(style="place-content: space-evenly;")
            img(src='@/assets/curso/temas/tema1/tema1-13.svg' class="w-lg-50" alt='')
          .tarjeta.color-primario--borde
            .p-4
              p.mb-0 La Organización Mundial de la Salud (OMS) en el año 2002 informó que, a nivel mundial, se le atribuye al agua, saneamiento e higiene el 3.1 % de las muertes (1.7 millones) y 3.7 % de los AVAD (54.2 millones de años).

    p.mb-4(data-aos="fade-down") Entre una de las herramientas que busca contribuir en la articulación de acciones para el mejoramiento de la salud ambiental entre los sectores está el CONPES #[b 3550 de 2008], el cual definió la política integral de salud ambiental, priorizando los componentes de calidad de agua, la calidad del aire y la seguridad química.
    p.mb-5(data-aos="fade-down") #[span Teniendo en cuenta el objetivo de esta unidad y para un mejor entendimiento, se hace necesario la revisión de los siguientes conceptos:]

    LineaTiempoD.color-acento-botones.mb-5(data-aos="fade-down-right")
      div(numero="1" titulo="Norma") 
        p Documento aprobado por una institución reconocida, que prevé, para un uso común y repetido, reglas, directrices o características para los productos o los procesos y métodos de producción conexos y cuya observancia no es obligatoria. También puede incluir prescripciones en materia de terminología, símbolos, embalaje, marcado o etiquetado aplicables a un producto, proceso o método de producción o tratar exclusivamente de ellas (Decreto 1074 de 2015. Ministerio de Comercio, Industria y Turismo, artículo 2.2.1.7.1.7., numeral 55, página 32).
      div(numero="2" titulo="Política pública") 
        p Es un instrumento de planeación orientado a la acción para lograr objetivos prioritarios, fruto de un proceso de concertación intersectorial y co-creación, en el que participa la administración distrital, la ciudadanía, la sociedad civil, los gremios, la academia, entre otros. 
        p Las fases o etapas del ciclo de políticas públicas son:
        ul.lista-ul.ms-3.ms-md-4
          li.mb-0
            span • Preparatorio.
          li.mb-0
            span • Agenda pública.
          li.mb-0
            span • Formulación.
          li.mb-0
            span • Implementación.
          li.mb-0
            span • Seguimiento.
          li.mb-0
            span •	Evaluación. 
      div(numero="3" titulo="Reglamento técnico") 
        p Es el documento en el que se establecen las características de un producto o los procesos y métodos de producción con ellas relacionadas, con inclusión de las disposiciones administrativas aplicables y cuya observancia es obligatoria. También puede incluir prescripciones en materia de terminología, símbolos, embalaje, marcado o etiquetado, aplicables a un producto, proceso o método de producción, o tratar exclusivamente de ellas. (Decreto 1074 de 2015. Ministerio de Comercio, Industria y Turismo, artículo 2.2.1.7.1.7., numeral 82, página 34).
      div(numero="4" titulo="Diferencia: norma técnica y reglamento técnico") 
        p Esta diferencia reside en la observancia. Mientras que la conformidad con las normas es voluntaria, los reglamentos técnicos son de carácter obligatorio; además, tienen diferentes consecuencias para el comercio internacional. Si un producto importado no cumple las prescripciones establecidas en un reglamento técnico, no se autorizará que se ponga a la venta. En el caso de las normas, los productos importados que no estén en conformidad con ellas podrán ponerse en el mercado, pero se verán penalizados si los consumidores prefieren productos que se ajusten a las normas del país.
      div(numero="5" titulo="Expedición de reglamentos técnicos") 
        p Estos deberán estar enmarcados dentro de la defensa de los objetivos legítimos, de conformidad con lo establecido en el Acuerdo sobre obstáculos técnicos al comercio de la Organización Mundial del Comercio (OMC). Se considerarán objetivos legítimos, entre otros, los imperativos de la seguridad nacional, la prevención de prácticas que puedan inducir a error, la protección de la salud o seguridad humana, de la vida, la salud animal o vegetal o del medio ambiente. (Decreto 1074 de 2015, Artículo 2.2.1.7.3.14. Ministerio de Comercio, Industria y Turismo, artículo 2.2.1.7.1.7., numeral 55, página 41).

    p.mb-5(data-aos="fade-down") #[span Se debe revisar en la siguiente figura como se lleva a cabo el proceso de una política pública:]

    .row.justify-content-center.mb-5
      .col-12.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Ciclo de políticas públicas  </i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-2.svg', alt='En la figura 2 se muestra el ciclo de políticas públicas por medio de un gráfico que inicia en la fase preparatoria y termina en la evaluación.')
          figcaption Nota. Tomado de secretaria Distrital de Planeación, sobre la base de Baena, G. Planeación prospectiva estratégica. Teoría, Metodologías y Buenas prácticas en América Latina. 2015
      .col-12.d-block.d-md-none(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Ciclo_de_politicas_piblicas.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Descargar]. Ciclo de políticas públicas 

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Marco conceptual de la salud ambiental

    .tarjeta.color-primario.row.justify-content-center.align-items-center.p-4.mb-5(data-aos="fade-down")
      .col-10.col-md-5.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-14.svg', alt='')
      .col-12.col-md-7.col-lg-8
        p El marco conceptual de la salud ambiental abarca los determinantes de la salud (sociales y ambientales), y las estrategias para abordar la problemática ambiental generada por fenómenos antrópicos y naturales, la carga de enfermedad, el Plan Decenal de Salud Pública 2022-2031 y los Objetivos para el Desarrollo Sostenible (ODS).
        p Para aclarar el concepto de salud ambiental y determinantes sociales en salud se debe hacer clic en los siguientes botones:
        div.text-center.mb-4
          a.boton.color-acento-botones.me-3.mb-2(@click="modal1 = true; showData = 1")
            span Salud ambiental
            i.fas.fa-file
          a.boton.color-acento-botones.me-3(@click="modal1 = true; showData = 2")
            span Determinantes sociales de salud
            i.fas.fa-file
        .tarjeta.color-white.p-4
          p.mb-0 En el marco de un desarrollo sostenible, la salud ambiental como determinante de carácter estructural debe mediar los procesos de desarrollo, bajo una gestión totalmente intersectorial.

    p.mb-3(data-aos="fade-down") #[span Para Corvalán, Kjellstrdm, Smith, (1999) y Neira, (2016), esta correspondencia se explica:]

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular La relación entre el ambiente y la salud se ha reconocido como el resultado de interacciones complejas en diferentes niveles con factores no sólo físicos, químicos y biológicos sino también sociales, culturales y económicos que determinan las formas de ser y de vivir. Por ello, que la relación entre el ambiente y la salud contempla una interacción compleja entre los seres humanos y el ambiente natural, construido y social que los rodea, en el que no sólo el conjunto de estos factores determina la salud humana, sino en el que las prácticas humanas y los modos de vida influencian positiva o negativamente el ambiente.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 Corvalán, Kjellstrdm, Smith, (1999) y Neira, (2016) (p.273)

    p.mb-3(data-aos="fade-down") #[span En la siguiente figura podrá conocer los factores determinantes entre las interacciones de salud y ambiente:]

    .row.justify-content-center.mb-5
      .col-12.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Factores determinantes: interacciones de salud y ambiente</i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-3.svg', alt='En la figura 3 se muestran los factores determinantes de las interacciones de salud y ambiente, los cuales son estructurales e intermedios y los resultados de salud.')
          figcaption Nota. Tomado Ministerio de Salud y Protección Social. (2011). Lineamientos sectoriales construcción de la Política Integral Salud Ambiental para todos.
      .col-12.d-block.d-md-none(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Factores_determinantes.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Descargar]. Factores determinantes: interacciones de salud y ambiente 

    p.mb-4(data-aos="fade-down") En el siguiente contenido se presentan las estrategias fundamentales que utilizan los sectores públicos y privados, las organizaciones sociales y la comunidad, para abordar la problemática ambiental generada por fenómenos antrópicos y naturales: 

    ImagenInfografica.color-acento-botones.d-none.d-md-block.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/info-1b.svg', alt='')
      .tarjeta.color-primario.p-3(x="26%" y="51.5%" numero="1")
        p El manejo y el control de los riesgos específicos, tales como realizar tratamiento del agua para consumo humano, o las alternativas para el uso de plaguicidas.
      .tarjeta.color-primario.p-3(x="50%" y="15%" numero="2")
        p La modificación de los determinantes intermedios y estructurales que inciden sobre la salud, a partir de las estrategias de promoción de la salud, reducción de la pobreza y desarrollo sostenible, orientadas al cumplimiento de los Objetivos de Desarrollo Sostenible (ODS).
      .tarjeta.color-primario.p-3(x="76%" y="51.5%" numero="3")
        p Según el #[b CONPES 3550 de 2008], se presenta como un conjunto de principios y prácticas que aseguran que ningún grupo social soporte una carga desproporcionada de las consecuencias ambientales negativas de operaciones económicas, decisiones políticas y de programas estatales y locales, así como la ausencia u omisión de tales políticas, permitiendo el acceso equitativo a los recursos del país, acceso a informaciones relevantes para las comunidades afectadas, favoreciendo la construcción de modelos democráticos de desarrollo. 
    .d-block.d-md-none.mb-5 
      figure
        img(src='@/assets/curso/temas/tema1/info-1a.svg', alt='')
    
    p.mb-5(data-aos="fade-down") En este sentido, es muy importante conservar la base natural del país como estrategia para asegurar el crecimiento de los sectores agrícola y energético, así como del sector turístico. Las actividades económicas que se realizan en el territorio no sustentables con el ambiente inciden en el deterioro ambiental, así como la mayor variabilidad climática, este último resultado de los procesos de cambio climático genera condiciones de riesgo crecientes sobre las poblaciones y la economía. 

    //- .tarjeta.tarjeta--azul.row.justify-content-center.align-items-center.p-4.mb-4(data-aos="fade-down")
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-md-12.col-lg-10
        .cajon.tarjeta--azul.row.justify-content-center.align-items-center.p-4
          .col-12.col-md
            p.mb-0 Los patrones de energía, consumo, extracción, el desarrollo de actividades productivas, el incremento de la población que demanda mayor prestación de bienes y servicios como el transporte, el comercio, la industria y la tecnología, causan alteraciones en el ambiente conllevando a la degradación de recursos naturales como el agua, el aire, el suelo, la biodiversidad entre otros componentes ambientales, generando pérdida y desequilibrio en los ecosistemas, y efectos en el bienestar y la salud de las personas, siendo hechos que difícilmente pueden revertirse.
          .col-10.col-md-3 
            img(src='@/assets/curso/temas/tema1/tema1-17.svg', alt='')

    p.mb-4(data-aos="fade-down") #[span Lo anterior se contrasta con las siguientes evidencias en el contexto colombiano:]

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        p.mb-0 La carga de enfermedad atribuida a factores ambientales en 2019 representa el 9,6 % del total de la mortalidad del país con 23.619 fallecidos (IHME-GBD, 2021).
      .col-md-6.col-lg.tarjeta--tabla.p-4
        p.mb-0 Para 2016 la carga por factores ambientales fue del 8 % con 17.549 muertes, donde las mayores pérdidas de vida saludable se deben a la contaminación del aire, la cual ocasionó el 13,9 % de la mortalidad por enfermedad isquémica, y el 17,6 % por EPOC.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        p.mb-0 La contaminación del agua la cual generó el 71,6 % de la mortalidad por enfermedad diarreica. Exposiciones a contaminantes químicos (INS, 2018) (Política Integral de Salud Ambiental, PISA, 2022) (Numeral 2.14, Plan Decenal de Salud Pública 2022-2031).
      .col-md-6.col-lg.tarjeta--tabla.p-4
        p.mb-0 Inocuidad de los alimentos (Enfermedades Transmitidas por Alimentos, ETA).

    p.mb-5(data-aos="fade-down") Entre las políticas públicas que ha formulado Colombia, se encuentra el #[b CONPES 3918 de 2018] mediante el cual se dispone a la “Estrategia para la implementación de los Objetivos de Desarrollo Sostenible (ODS) en Colombia”, que tiene incluido compromisos asumidos por el país en el ámbito de las Naciones Unidas, pues fue en ese escenario donde, en 2015, se definió la Agenda 2030 que incorpora 17 Objetivos de Desarrollo Sostenible (ODS) para el logro del mejoramiento de condiciones de vida de la población y el desarrollo sostenible, a continuación se puede conocer a detalle lo definido en dicha agenda: 

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/info-2.png', alt='')
      .tarjeta.color-primario.p-3(x="5%" y="20%" numero="1")
        h4 Fin de la pobreza 
        p Poner fin a la pobreza en todas sus formas en todo el mundo, esta va más allá de la falta de ingresos y recursos para garantizar una vida sostenible. Entre sus manifestaciones se incluyen el hambre y la malnutrición, el acceso limitado a la educación y a otros servicios básicos, la discriminación y la exclusión sociales y la falta de participación en la adopción de decisiones. 
      .tarjeta.color-primario.p-3(x="20.5%" y="20%" numero="2")
        h4 Hambre cero
        p Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrición y promover la agricultura sostenible.
      .tarjeta.color-primario.p-3(x="36%" y="20%" numero="3")
        h4 Salud y bienestar
        p Para lograr el desarrollo sostenible es fundamental garantizar una vida saludable y promover el bienestar para todos a cualquier edad.
      .tarjeta.color-primario.p-3(x="51%" y="20%" numero="4")
        h4 Educación de calidad 
        p Garantizar una educación inclusiva y equitativa de calidad y promover oportunidades de aprendizaje permanente para todos.
      .tarjeta.color-primario.p-3(x="66.5%" y="20%" numero="5")
        h4 Igualdad de genero
        p Lograr la igualdad de género y empoderar a todas las mujeres y las niñas, La igualdad entre los géneros no es solo un derecho humano fundamental, sino la base necesaria para conseguir un mundo pacífico, próspero y sostenible.
      .tarjeta.color-primario.p-3(x="81.7%" y="20%" numero="6")
        h4 Agua limpia y saneamiento
        p El agua libre de impurezas y accesible para todos es parte esencial del mundo en que queremos vivir. Hay suficiente agua dulce en el planeta para lograr este sueño. La escasez de recursos hídricos, la mala calidad del agua y el saneamiento inadecuado influyen negativamente en la seguridad alimentaria, las opciones de medios de subsistencia y las oportunidades de educación para las familias pobres en todo el mundo.
      .tarjeta.color-primario.p-3(x="5%" y="46.5%" numero="7")
        h4 Energía asequible y no contaminante 
        p Garantizar el acceso a una energía asequible, fiable, sostenible y moderna para todos, La energía sostenible es una oportunidad —que transforma vidas, economías y el planeta.
      .tarjeta.color-primario.p-3(x="20.5%" y="46.5%" numero="8")
        h4 Trabajo decente y crecimiento económico 
        p Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos.
      .tarjeta.color-primario.p-3(x="36%" y="46.5%" numero="9")
        h4 Industria, innovación e infraestructura
        p Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible y fomentar la innovación. Las inversiones en infraestructura (transporte, riego, energía y tecnología de la información y las comunicaciones) son fundamentales para lograr el desarrollo sostenible y empoderar a las comunidades en numerosos países.
      .tarjeta.color-primario.p-3(x="51%" y="46.5%" numero="10")
        h4 Reducción de las desigualdades
        p Reducir la desigualdad en los países y entre ellos, existe un consenso cada vez mayor de que el crecimiento económico no es suficiente para reducir la pobreza si este no es inclusivo ni tiene en cuenta las tres dimensiones del desarrollo sostenible: económica, social y ambiental.
      .tarjeta.color-primario.p-3(x="66.5%" y="46.5%" numero="11")
        h4 Ciudades y comunidades sostenibles 
        p Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles. Los problemas que enfrentan las ciudades se pueden vencer de manera que les permita seguir prosperando y creciendo, y al mismo tiempo aprovechar mejor los recursos y reducir la contaminación y la pobreza.
      .tarjeta.color-primario.p-3(x="81.7%" y="46.5%" numero="12")
        h4 Producción y consumo responsable
        p Garantizar modalidades de consumo y producción sostenibles. El consumo y la producción sostenibles consisten en fomentar el uso eficiente de los recursos y la eficiencia energética, infraestructuras sostenibles y facilitar el acceso a los servicios básicos, empleos ecológicos y decentes, y una mejor calidad de vida para todos.
      .tarjeta.color-primario.p-3(x="5%" y="73%" numero="13")
        h4 Acción por el clima
        p Adoptar medidas urgentes para combatir el cambio climático y sus efectos, pues este tiene un impacto negativo en la economía nacional y en la vida de las personas, de las comunidades y de los países. En un futuro las consecuencias serán todavía peores.
      .tarjeta.color-primario.p-3(x="20.5%" y="73%" numero="14")
        h4 Vida submarina 
        p Conservar y utilizar sosteniblemente los océanos, los mares y los recursos marinos para el desarrollo sostenible Los océanos del mundo —su temperatura, química, corrientes y vida— mueven sistemas mundiales que hacen que la Tierra sea habitable para la humanidad.
      .tarjeta.color-primario.p-3(x="36%" y="73%" numero="15")
        h4 Vida de ecosistemas terrestres 
        p Proteger, restablecer y promover el uso sostenible de los ecosistemas terrestres, gestionar sosteniblemente los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras y detener la pérdida de biodiversidad.
      .tarjeta.color-primario.p-3(x="51%" y="73%" numero="16")
        h4 Paz, justicia e instituciones sólidas
        p Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y construir a todos los niveles instituciones eficaces e inclusivas que rindan cuentas.
      .tarjeta.color-primario.p-3(x="66.5%" y="73%" numero="17")
        h4 Alianzas para lograr los objetivos 
        p Fortalecer los medios de implementación y revitalizar la Alianza Mundial para el Desarrollo Sostenible para que una agenda de desarrollo sostenible sea eficaz se necesitan alianzas entre los gobiernos, el sector privado y la sociedad civil.
  
    .d-block.d-md-none.mb-5 
      a.anexo.mb-4(:href="obtenerLink('/downloads/Objetivos_desarrollo_sostenible.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p #[b Descargar]. Objetivos de desarrollo sostenible

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Normas generales sanitarias vigentes

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el marco de la gestión en salud pública, se han emitido normas sanitarias CONPES, mediante dos planes decenales de salud pública los cuales abarcan los siguientes períodos de tiempo: 1) 2012-2021, 2) 2022-2031.
    
    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.col-lg-10
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-down-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/doc3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Normas en el marco de la gestión pública
                  p En el siguiente enlace, Resolución No. 295 de 2023 se presenta el consolidado de algunas normas en el marco de la gestión pública.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%20295%20de%202023.pdf" target="_blank")
                    span Enlace web
                    i.fas.fa-file-code

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Plan Decenal de Salud Pública
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-9
        p El Plan Decenal de Salud Pública es el que plantea los desafíos en materia de salud pública para Colombia. Además, es elaborado "a través de un proceso amplio de participación social y en el marco de la estrategia de atención primaria en salud, en el cual deben confluir las políticas sectoriales para mejorar el estado de salud de la población, incluyendo la salud mental, garantizando que el proceso de participación social sea eficaz, mediante la promoción de la capacitación de la ciudadanía y de las organizaciones sociales. Así mismo se definirán los objetivos, las metas, las acciones, los recursos, los responsables sectoriales, los indicadores de seguimiento, y los mecanismos de evaluación del Plan" (Artículo 6 de la Ley 1438 de 2011).
        p En cumplimiento con dicha disposición se emitió la #[b Resolución 1035 de 2022], la cual adopta el Plan Decenal de Salud Pública 2022-2031, y busca:
      .col-12.col-md-4.col-lg-3
        img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-primario.p-4
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.ps-2.mb-0 Avanzar en la garantía del derecho fundamental a la salud.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-secundario.p-4
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.ps-2.mb-0 Avanzar hacia las mejoras de las condiciones de vida, bienestar y calidad de vida de los habitantes.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-contenido.p-4
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.ps-2.mb-0 Reducir la mortalidad evitable y su impacto en los años de vida perdidos.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-botones.p-4
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.ps-2.mb-0 Avanzar hacia la garantía del goce efectivo de un ambiente sano y la mejora de la salud ambiental. 
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-md-12.col-lg-10
        .cajon.color-secundario.p-4(data-aos="fade-down-left")
          p.mb-0 El referido plan será implementado y ejecutado por las entidades territoriales, las entidades promotoras de salud, las instituciones prestadoras de servicio de salud, entre otras, en coordinación con otros sectores y entidades que realicen acciones y funciones relacionadas con la intervención de los determinantes sociales de la salud (Artículo 2, Resolución 1035 de 2022).  

    p.mb-5(data-aos="fade-down") A continuación, se identifican algunas condiciones de salud, determinantes sociales, ambientales y de consumo dentro del #[b Plan Decenal de Salud Pública 2022-2031:]

    LineaTiempoD.color-acento-botones.mb-5(data-aos="fade-down-right")
      .row(numero="1" titulo="Numeral 2.4. Hogares y servicios públicos")
        .col-md-8.mb-4.mb-md-0
          p Según la Encuesta de Calidad de Vida de 2019, en Colombia el 87,0 % de la población contaba con el servicio de acueducto y el 74,4 % con alcantarillado. El acceso a servicios fue mayor en el área urbana, que en el área rural. El 98,1 % de los hogares recibieron el servicio de energía eléctrica, el 64,5 % gas natural, el 81,8 % accedieron a la recolección de basuras y el 25,2 % de telefonía fija. De acuerdo con la misma fuente, Colombia incremento ese mismo año 0,4 puntos porcentuales (p.p.) la cobertura de energía eléctrica; 0,1 p.p. de gas natural, acueducto y recolección de basuras; y descendió en 0,3 p.p. en alcantarillado, mientras en telefonía fija fue de 4,0 p.p. Este aumento en la cobertura del acueducto influyó en el mejoramiento de la calidad de vida.
        .col-md-4.col-8
          figure
            img(src='@/assets/curso/temas/tema1/tema1-20.png', alt='')
      .row(numero="2" titulo="Numeral 2.5. Calidad del agua")
        .col-md-8.mb-4.mb-md-0
          p De acuerdo con lo reportado por el SIVICAP, en los años 2017 y 2018, bajo el número de departamentos con riesgo alto por el consumo del agua, de 5 en 2017 a 4 en 2018, en el último año Putumayo paso de riesgo alto a medio; mientras que Sucre y Caquetá pasaron de riesgo medio a bajo. Córdoba y Guaviare pasaron de sin riesgo a riesgo bajo y Risaralda y Vichada pasaron de riesgo bajo a medio. Persistieron en el 2018 con riesgo alto los departamentos de Caldas, Vaupés, Huila y Nariño. Mientras para 2019 es de resaltar que ninguno de los departamentos reporta su indicador en alto riesgo de salud por el consumo de agua.
        .col-md-4.col-8
          figure
            img(src='@/assets/curso/temas/tema1/tema1-21.png', alt='')
      .row(numero="3" titulo="2.14.1. Calidad del aire (material particulado, PM10)")
        .col-md-8.mb-4.mb-md-0
          p El promedio en la concentración de material particulado de 10 micras en un periodo de 7 años, el cual se calculó a partir de los registros anuales de las estaciones de monitoreo que tenían datos completos para 2012, 2016 y 2019. Se presenta también el referente normativo de 30 µg/m3 proyectado al año 2030 según Resolución 2254 de 2017. 
          p La e4.col-8tación con mayor PM10 promedio es la de Acopi, localizada en la zona industrial de Yumbo, seguida por la estación Carvajal Sevillana de Bogotá, la estación Medellín Alta en Antioquia, la estación Kennedy en Bogotá y la estación la Jagua Vía en el municipio la Jagua de Ibirico, César. La estación con menor promedio fue la estación en la Cuenca Río Risaralda en el municipio de la Virginia, Risaralda. 
        .col-md-4.col-8
          figure
            img(src='@/assets/curso/temas/tema1/tema1-22.png', alt='')
      .row(numero="4" titulo="Numeral 2.6.2. Inocuidad de los alimentos. Enfermedades Transmitidas por Alimentos (ETA)")
        .col-md-8.mb-4.mb-md-0
          p Estas enfermedades constituyen un importante problema de salud pública, de acuerdo con la OMS, afectaron a 600 millones de personas y causaron 420.000 muertes prematuras en el año 2010. La carga mundial de ETA es comparable con las principales enfermedades infecciosas, este tipo de enfermedades afecta con mayor frecuencia a niños menores de cinco años. Según un estudio del Banco Mundial en 2018, el impacto de los alimentos insalubres cuesta a las economías de ingreso bajo y mediano alrededor de USD 110.000 millones anuales en pérdida de productividad y gastos médicos. Por ende, una mejor gestión de la inocuidad de los alimentos contribuiría de manera significativa al logro de varios de los Objetivos de Desarrollo Sostenible, en particular aquellos relacionados con la pobreza, el hambre y el bienestar.
        .col-md-4.col-8
          figure
            img(src='@/assets/curso/temas/tema1/tema1-23.png', alt='')

    p.text-start.mb-4(data-aos="fade-down") Igualmente, el #[b Plan Decenal de Salud Pública 2022-2031] dispone algunas metas para salud ambiental: 

    .BGIMG01.p-4.mb-5(data-aos="fade-down-right")
      SlyderB.mb-5(:datos="datosSlyder2")

    p.mb-5(data-aos="fade-down") Estas metas, serán analizadas permanentemente por medio del sistema de seguimiento y monitoreo del plan, para tal efecto, se generarán orientaciones y retroalimentación a los territorios, con el ánimo de fortalecer los procesos de toma de decisiones informadas. Paralelamente el #[b Ministerio de Salud y Protección Social], de forma complementaria desarrollará procesos de evaluación, con el fin de permitir enriquecer los procesos de ejecución y/o reorientar de manera oportuna las estrategias para el logro de los fines establecidos. 
    
    //- .tarjeta.color-secundario.row.justify-content-center.align-items-center.p-4.mb-5(data-aos="fade-down")
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.tarjeta--azul.row.justify-content-center.align-items-center.p-4
          .col-10.col-md-4.col-lg-3
            img.p-lg-3(src='@/assets/curso/temas/tema1/tema1-31.png', alt='')
          .col-12.col-md-8.col-lg-9
            p.mb-0 Se debe recordar que la salud pública “es un campo de acción estatal y social de gran relevancia para la garantía del derecho a la salud y por lo tanto sus actuaciones sectoriales y conjuntas con otros actores y sectores deben dar cuenta de lo exigible en el marco de derechos bajo el reconocimiento de su interdependencia e indivisibilidad” (Plan Decenal de Salud Pública 2022-2031).
    

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Código de policía

    p.mb-4(data-aos="fade-down") Fue emitido por la #[b Ley 1801 de 2016], y busca, entre otras funciones, establecer las condiciones para la convivencia en el territorio nacional al propiciar el cumplimiento de los deberes y obligaciones de las personas naturales y jurídicas, así como determinar el ejercicio del poder, la función y la actividad de policía, de conformidad con la Constitución Política y el ordenamiento jurídico vigente (Artículo 1, Ley 1801 de 2016).

    p.text-start.mb-4(data-aos="fade-down") #[span Las medidas correctivas del código de policía son: ]

    TabsB.color-acento-botones.mb-5(data-aos="fade-down-left")
      .py-4.py-md-5(titulo="¿Qué son las medidas correctivas? " :icono="require('@/assets/curso/temas/tema1/tema1-i1.svg')")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-33.png', alt='')
          .col-md-8
            p Son acciones que impone las autoridades de policía a toda persona que incurra en comportamientos contrarios a la convivencia o el incumplimiento de los deberes específicos de convivencia. Dichas medidas correctivas tienen por objeto disuadir, prevenir, superar, resarcir, procurar, educar, proteger o restablecer la convivencia. 
            p Igualmente, no tienen carácter sancionatorio. Por tal razón, deberán aplicarse al comportamiento contrario a la convivencia las medidas correctivas establecidas en este código y demás normas que regulen la materia. 
            p Además, cuando las autoridades de policía impongan una medida correctiva deben informar a la Policía Nacional para que proceda a su registro en una base de datos de orden nacional y acceso público.
      .py-4.py-md-5(titulo="¿Qué medidas correctivas se encuentran en el código de policía?" :icono="require('@/assets/curso/temas/tema1/tema1-i2.svg')")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-34.png', alt='')
          .col-md-8
            p Según la #[b Ley 1801 de 2016] las medidas correctivas que se aplican en el marco de este Código son: 
            ul.lista-ul.ms-3.ms-md-4
              li.mb-0
                span •	Amonestación.
              li.mb-0
                span •	Participación en programa comunitario o actividad pedagógica de convivencia.
              li.mb-0
                span •	Disolución de actividades que involucran aglomeraciones de público no complejas.
              li.mb-0
                span •	Expulsión de domicilio.
              li.mb-0
                span •	Prohibición de ingreso a actividad que involucra aglomeraciones de público complejas o no complejas.
              li.mb-0
                span •	Decomiso. 
              li.mb-0
                span •	Multa general o especial.
              li.mb-0
                span •	Construcción, cerramiento, reparación o mantenimiento de inmueble.
              li.mb-0
                span •	Remoción de bienes.
              li.mb-0
                span •	Reparación de daños materiales de muebles o inmuebles.
              li.mb-0
                span •	Reparación de daños materiales por perturbación a la posesión y tenencia de inmuebles.
              li.mb-0
                span •	Restablecimiento del derecho de servidumbre y reparación de daños materiales.
              li.mb-0
                span •	Restitución y protección de bienes inmuebles.
              li.mb-0
                span •	Destrucción de bien.
              li.mb-0
                span •	Demolición de obra. 
              li.mb-0
                span •	Suspensión de construcción.
              li.mb-0
                span •	Suspensión de actividad que involucre aglomeración de público compleja.
              li.mb-0
                span •	Suspensión temporal de actividad.
              li.mb-0
                span •	Suspensión definitiva de actividad.
              li.mb-0
                span •	Inutilización de bienes. 
      .py-4.py-md-5(titulo="¿Quiénes tienen autoridad frente a dichas medidas?" :icono="require('@/assets/curso/temas/tema1/tema1-i3.svg')")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-35.png', alt='')
          .col-md-8
            p Las autoridades de policía según el artículo 198, Ley 1801 de 2016 son:
            ul.lista-ul.ms-3.ms-md-4
              li.mb-0
                span •	El Presidente de la República.
              li.mb-0
                span •	Los gobernadores.
              li.mb-0
                span •	Los alcaldes distritales o municipales. 
              li.mb-0
                span •	Los inspectores de policía y los corregidores.
              li.mb-0
                span •	Las autoridades especiales de policía en salud, seguridad, ambiente, minería, ordenamiento territorial, protección al patrimonio cultural, planeación, vivienda y espacio público y las demás que determinen la ley, las ordenanzas y los acuerdos.
              li.mb-0
                span •	Los comandantes de estación, subestación y de centro de atención inmediata de policía y demás personal uniformado de la Policía Nacional.
              
              
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-left")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/doc3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ley 1801 de 2016
                  p.text-small En el siguiente documento, Ley 1801 de 2016, se describen algunos aspectos del ambiente y de salud pública, que fueron reglamentados.    
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=80538" target="_blank")
                    span Enlace web
                    i.fas.fa-file-code

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Modelo de Fuerzas Motrices

    p.mb-4(data-aos="fade-down") El Modelo de Fuerzas Motrices (MFM) es un instrumento que adoptó Ministerio de Salud y Protección Social (MSPS), en el marco del Plan Decenal de Salud Pública (2012-2021), con el fin de analizar las condiciones ambientales que afectan la salud humana, es un instrumento de amplio uso para plantear todas las acciones que permitan el manejo de dichas condiciones.

    p.text-start.mb-4(data-aos="fade-down") #[span Para profundizar en el Modelo de Fuerzas Motrices (MFM), se puede revisar con atención el contenido que se propone a continuación:]

    PasosA.color-primario.mb-5(tipo="n" data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-md-7.mb-4.mb-md-0
          p El Modelo de Fuerzas Motrices (MFM) tiene sus bases en los avances conceptuales alcanzados en el marco de las Conferencias Mundiales sobre Desarrollo Sostenible, es decir, las distintas conferencias sobre este tema contribuyeron a la definición de modelos conceptuales para el ambiente y la salud ambiental, como también incorporaron los determinantes sociales que se propusieron para salud pública en los modelos de salud ambiental. 
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-36.png', alt='')
      .row.justify-content-center.align-items-center
        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-37.png', alt='')
        .col-md-7.text-start
          p El Modelo de Fuerzas Motrices es específico para el sector salud e identifica las causas que produce efectos negativos en la salud humana.
          p Las categorías del MFM, corresponden a: Fuerzas motrices, Presión, Estado, Exposición, Efecto, Acción.
          p El MFM apoya las acciones que se deben realizar en el territorio, para abordar los problemas de salud causados por los factores de riesgo ambientales.
      .row.justify-content-center.align-items-center
        .col-md-7.mb-4.mb-md-0
          p Ahora bien, el Modelo Integrado para la Salud Ambiental, (#[em Integrative Model for Environmental Health] (IMEH)), propuesto por Dixon y Dixon en el 2002 ha sido utilizado para analizar los problemas de salud, para revisar los riesgos y los problemas ambientales, este hace énfasis en los siguientes factores:
          p #[b Fisiológico:] comprendido por los agentes (biológico, químico o físico), el proceso de exposición, la incorporación física de dicha exposición y, el efecto negativo en la salud.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-38.png', alt='')
      .row.justify-content-center.align-items-center
        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-39.png', alt='')
        .col-md-7.text-start
          p #[b Vulnerabilidad:] tiene en cuenta las características individuales y comunitarias que pueden poner al ser humano en una posición de vulnerabilidad frente a la amenaza ambiental.
          p #[b Epistemológico:] da cuenta de lo que las personas y las comunidades saben sobre las amenazas ambientales.
          p #[b Protección de la salud:] va desde la preocupación por la existencia de la amenaza hasta la ejecución de acciones para evitar el daño y proteger la salud individual y colectiva. 
      .row.justify-content-center.align-items-center
        .col-md-7.mb-4.mb-md-0
          p Recuerde que la inequidad sanitaria es resultado de la situación en que la población crece, vive, trabaja y envejece, y del tipo de sistemas que se utilizan para combatirla.
          p A su vez, las condiciones en que la gente vive y muere están determinadas por fuerzas políticas, sociales y económicas.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-40.png', alt='')
      .row.justify-content-center.align-items-center
        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-41.png', alt='')
        .col-md-7.text-start
          p En ese orden de ideas, la Comisión de determinantes sociales de la OMS, recomienda:
          p Luchar contra la distribución desigual del poder, el dinero y los recursos y medir la magnitud del problema, analizarlo y evaluar los efectos de las intervenciones. 
      .row.justify-content-center.align-items-center
        .col-md-7.mb-4.mb-md-0
          p Los gobiernos nacionales y las organizaciones internacionales deben poner en marcha, con el apoyo de la OMS, sistemas de vigilancia de la equidad sanitaria que permitan hacer seguimiento a las desigualdades sanitarias y a los determinantes sociales de la salud, así como evaluar los efectos de las políticas e intervenciones en la equidad sanitaria. 
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-42.png', alt='')
      .row.justify-content-center.align-items-center
        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-43.png', alt='')
        .col-md-7.text-start
          p No olvide que, la vulnerabilidad es una situación de desventaja en el ejercicio pleno de los derechos y libertades.
          p La vulnerabilidad distancia del ejercicio de los derechos a las personas más débiles de la sociedad, las estigmatiza y las margina, por lo que el Estado tiene la obligación de cuidarlas y protegerlas. 


    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0(v-if="showData == 1")
          h4 Salud ambiental
          p Interacción entre los grupos humano y los factores físicos, químicos, biológicos y sociales presentes en el medio que habita, factores que determinan su bienestar y salud.
        .col-md-6.mb-4.mb-md-0(v-if="showData == 2")
          h4 Determinantes sociales de salud
          p Son los “factores que determinan la aparición de la enfermedad, tales como los, económicos, culturales, nutricionales, ambientales, ocupacionales, habitacionales, de educación y de acceso a los servicios públicos, los cuales serán financiados con recursos diferentes a los destinados al cubrimiento de los servicios y tecnologías de salud.” (Ley 1751 de 2015, parágrafo, artículo 9).
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-15.png', v-if="showData == 1")
            img(src='@/assets/curso/temas/tema1/tema1-16.png', v-if="showData == 2")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    showData: 0,
    modal1: false,
    datosSlyder: [
      {
        titulo: 'Artículo 2. Fines esenciales del Estado',
        texto:
          'Servir a la comunidad, promover la prosperidad general y garantizar la efectividad de los principios, derechos y deberes. Además, las autoridades de la República deben proteger a todas las personas residentes en Colombia, en su vida, honra, bienes, creencias, y demás derechos y libertades, y asegurar el cumplimiento de los deberes sociales del Estado y de los particulares.',
        imagen: require('@/assets/curso/temas/tema1/tema1-2.png'),
      },
      {
        titulo: 'Artículo 49, modificado por el Acto Legislativo 02 de 2009',
        texto:
          'La atención de la salud y el saneamiento ambiental son servicios públicos a cargo del Estado, así mismo, la Carta garantiza a todas las personas, el acceso a los servicios de promoción, protección y recuperación de la salud y establece que le corresponde al Estado organizar, dirigir y reglamentar la prestación de servicios de salud a los habitantes y de saneamiento ambiental y establecer las competencias de la Nación, las entidades territoriales y los particulares.',
        imagen: require('@/assets/curso/temas/tema1/tema1-3.png'),
      },
      {
        titulo: 'Artículo 78',
        texto:
          'Dispone que la ley regulará el control de calidad de bienes y servicios ofrecidos y prestados a la comunidad, así como la información que debe suministrarse al público en su comercialización. Serán responsables, de acuerdo con la ley, quienes en la producción y en la comercialización de bienes y servicios, atenten contra la salud, la seguridad y el adecuado aprovisionamiento a consumidores y usuarios.',
        imagen: require('@/assets/curso/temas/tema1/tema1-4.png'),
      },
      {
        titulo: 'Artículo 113',
        texto:
          'Establece tres ramas del poder público la legislativa, la ejecutiva, y la judicial. Además de los órganos que las integran existen otros, autónomos e independientes, para el cumplimiento de las demás funciones del Estado. Los diferentes órganos del Estado tienen funciones separadas, pero colaboran armónicamente para la realización de sus fines.',
        imagen: require('@/assets/curso/temas/tema1/tema1-5.png'),
      },
      {
        titulo: 'Artículo 366',
        texto:
          'Dispone que "El bienestar general y el mejoramiento de la calidad de vida de la población son finalidades sociales del Estado. Será objetivo fundamental de su actividad, la solución de las necesidades insatisfechas de salud, de educación, de saneamiento ambiental y de agua potable (...)".',
        imagen: require('@/assets/curso/temas/tema1/tema1-6.png'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Categoría PISA',
        texto:
          'Meta: a 2031, el 100 % de las entidades territoriales habrán implementado la Política Integral de Salud Ambiental (PISA).',
        imagen: require('@/assets/curso/temas/tema1/tema1-24.png'),
      },
      {
        titulo: 'Categoría: calidad del agua',
        texto:
          'Meta: a 2031, el 80 % de los municipios contará con la certificación sanitaria expedida mediante el Sistema de Información de la Vigilancia de la Calidad del Agua para Consumo Humano SIVICAP.',
        imagen: require('@/assets/curso/temas/tema1/tema1-25.png'),
      },
      {
        titulo: 'Categoría: sustancias químicas ',
        texto:
          'Meta: a 2031, Colombia habrá diseñado e implementado el sistema de gestión toxicología para el monitoreo de los efectos en salud asociados a las sustancias químicas. ',
        imagen: require('@/assets/curso/temas/tema1/tema1-26.png'),
      },
      {
        titulo: 'Categoría: entornos saludables',
        texto:
          'Meta: a 2031, el 100 % de las Direcciones Territoriales en Salud, (DTS) departamentales, distritales y municipales, categorías 1, 2 y 3, implementarán estrategias de entornos saludables (hogar, laboral, con énfasis en la informalidad, el desarrollo comunitario y educativo).',
        imagen: require('@/assets/curso/temas/tema1/tema1-27.png'),
      },
      {
        titulo: 'Categoría: IVC- sanitario',
        texto:
          'Meta: a 2031, el 100 % de las entidades territoriales, habrán implementado los procesos del modelo de Inspección, Vigilancia y Control (IVC).',
        imagen: require('@/assets/curso/temas/tema1/tema1-28.png'),
      },
      {
        titulo: 'Categoría: Cambio climático',
        texto:
          'Meta: a 2031 se formularán acciones de adaptación en promoción de la salud y prevención de las enfermedades que aporten a reducir los casos de enfermedades sensibles al clima en el 100 % de las Entidades territoriales en el sector de salud, del nivel departamental, distrital y municipal en la categoría 1,2 y 3, estarán implementadas en un 40 %.',
        imagen: require('@/assets/curso/temas/tema1/tema1-29.png'),
      },
      {
        titulo: 'Categoría: Cambio climático',
        texto:
          'Meta: a 2031, el 40 % de las instituciones prestadoras de servicios de salud del sector público implementarán acciones de adaptación ante los posibles eventos asociados por variabilidad y cambio climáticos.',
        imagen: require('@/assets/curso/temas/tema1/tema1-30.png'),
      },
    ],
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
