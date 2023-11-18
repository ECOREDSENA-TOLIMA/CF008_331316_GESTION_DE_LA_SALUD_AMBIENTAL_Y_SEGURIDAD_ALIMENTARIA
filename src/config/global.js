export default {
  global: {
    componenteFormativo:
      'Normativa vigente para la gestión de la salud ambiental',
    descripcionCurso:
      'En este componente formativo se abordará el tema de gestión de salud ambiental el cual es fundamental en el contexto de la salud pública, ya que articula acciones y disposiciones normativas que permiten monitorear las condiciones ambientales, los ecosistemas y el cambio climático, además de evaluar el impacto que dichos fenómenos traen en la salud de la población. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad de la gestión de la salud ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Marco conceptual de la salud ambiental',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normas generales sanitarias vigentes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Plan Decenal de Salud Pública',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Código de Policía',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Modelo de fuerzas motrices',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características normativas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Instrumentos procedimentales para la prevención del riesgo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Fundamentos técnicos básicos en riesgos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Modelo de vigilancia y control sanitario para la gestión de los riesgos asociados al uso y consumo de bienes y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetos de inspección',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modelo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Guías e instrumentos para la inspección vigilancia y control sanitario',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Gestión de la salud ambiental a nivel nacional y territorial',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo:
              'Escenarios de intersectorial nacionales territoriales para la gestión de la salud ambiental y seguridad sanitaria',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_08_331316.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2 Normas generales sanitarias vigentes',
      referencia:
        'Ministerio de Salud y protección Social. Resolución 295 de 2023. Por la cual se modifican los artículos 3, 8, 11, 14, 16, y 18 de la Resolución 518 de 2015 en relación con la gestión de la salud pública, las responsabilidades de las entidades territoriales y de los ejecutores del Plan de Salud Pública de Intervenciones Colectivas y las condiciones para la ejecución.',
      tipo: 'Documento legal',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=138339&dt=S',
    },
    {
      tema: '1.4 Código de policía',
      referencia:
        'Congreso de la República. (2016). Ley 1801 del 29 de julio de 2016.',
      tipo: 'Documento legal',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=80538',
    },
    {
      tema: '1.5 Modelo de Fuerzas Motrices',
      referencia:
        'Escuela virtual (2017). Videoconferencia final DSA El modelo de fuerzas motrices. [Video]. You tube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Xk-A-I9Jbsw',
    },
    // {
    //   tema: '3.2 Modelo',
    //   referencia:
    //     'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (2015). Manual de Inspección, Vigilancia y Control Sanitario de alimentos y bebidas basado en riesgo para las Entidades Territoriales de Salud.',
    //   tipo: 'Documento legal',
    //   link:
    //     'https://www.invima.gov.co/documents/20143/1402493/28.+Manual+de+IVC+de+Alimentos+y+Bebidas+basado+en+el+riesgo+para+Las+ETS.pdf',
    // },
    {
      tema: '3.2 Modelo',
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (2018). Concepto 2038826. ',
      tipo: 'Documento legal',
      link:
        'https://normograma.invima.gov.co/normograma/docs/pdf/concepto_invima_2038826_2018.pdf',
    },
    {
      tema:
        '3.4 Guías e instrumentos para la inspección vigilancia y control sanitario',
      referencia:
        'Secretaría Distrital de Salud de Bogotá. (2016). Lineamiento para el uso de las actas de visita a establecimientos abiertos al público.',
      tipo: 'Documento legal',
      link:
        'http://www.saludcapital.gov.co/Lineamientos/2016-2020/25_SDS_IVC_LN_02_Lineamiento_Uso_Actas_Visita.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autoridad Sanitaria',
      significado:
        'Entidades jurídicas de carácter público con atribuciones para ejercer funciones de rectoría, regulación, inspección, vigilancia y control de los sectores público y privado en salud, adoptan medidas de prevención y seguimiento que garanticen la protección de la salud pública (Resolución 518 de 2015).',
    },
    {
      termino: 'Análisis de riesgos',
      significado:
        'Uso sistemático de información para identificar y calcular riesgos. El análisis de riesgos proporciona una base para la evaluación, el tratamiento y la aceptación de riesgos. La información puede incluir datos históricos, análisis teóricos, opiniones informadas y las preocupaciones de los interesados.',
    },
    {
      termino: 'Cambio climático',
      significado:
        'Variación del estado del clima, identificable, por ejemplo, mediante pruebas estadísticas, en las variaciones del valor medio o en la variabilidad de sus propiedades, que persiste durante largos períodos de tiempo, generalmente decenios o períodos más largos. El cambio climático puede deberse a procesos internos naturales o forzamientos externos tales como modulaciones de los ciclos solares, erupciones volcánicas o cambios antropogénicos persistentes de Ia composición de la atmósfera por el incremento de las concentraciones de Ios gases de efecto invernadero o del uso del suelo (Ley 1931 de 2018, artículo 3, numeral 4).',
    },
    {
      termino: 'Consejo Nacional de Política Económica y Social (CONPES)',
      significado:
        'Es la máxima autoridad nacional de planeación y se desempeña como organismo asesor del Gobierno en todos los aspectos relacionados con el desarrollo económico y social del país. Para lograrlo, coordina y orienta a los organismos encargados de la dirección económica y social en el Gobierno, a través del estudio y aprobación de documentos sobre el desarrollo de políticas generales que son presentados en sesión. Fue creado por la Ley 19 de 1958. <br>El Departamento Nacional de Planeación desempeña las funciones de Secretaría Ejecutiva del CONPES, y por lo tanto es la entidad encargada de coordinar y presentar todos los documentos para discutir en sesión.',
    },
    {
      termino: 'Comunicación del riesgo',
      significado:
        'Intercambio o puesta en común de información acerca del riesgo entre el encargado de la toma de decisiones y otros interesados. La información puede estar relacionada con la existencia, naturaleza, forma, probabilidad, severidad, aceptabilidad, tratamiento y otros aspectos del riesgo.',
    },
    {
      termino: 'División Político Administrativa (Divipola)',
      significado:
        'Estándar nacional que consolida en un inventario, la identificación y codificación de los departamentos, municipios y distritos (referidos a algunas ciudades), y adicionalmente los centros poblados, cuya definición e inclusión es una iniciativa del DANE. La Divipola constituye información fundamental para el diseño de políticas, provisión de servicios públicos, así como la definición de criterios para la asignación de recursos por parte del gobierno central, todo ello requiere de datos que reflejan la división territorial vigente.',
    },
    {
      termino: 'Ecosistema',
      significado:
        'Unidad estructural, funcional y de organización, consistente en organismos (incluido el hombre) y las variables ambientales (bióticas y abióticas) de un área determinada (Rodríguez, Castillo Aguilar Garduño, 1995).',
    },
    {
      termino: 'Enfermedades Transmitidas por Alimentos (ETA)',
      significado:
        'Enfermedades que se originan por la ingestión de alimentos infectados con agentes contaminantes en cantidades suficientes como para afectar la salud del consumidor. Sean sólidos, naturales, preparados o bebidas como el agua, los alimentos pueden originar dolencias provocadas por patógenos, como bacterias, virus, hongos, parásitos o componentes químicos que se encuentran en descomposición.',
    },
    {
      termino: 'Eventos de Interés en Salud Pública ',
      significado:
        'Aquellos eventos considerados como importantes o trascendentes para la salud colectiva por parte del Ministerio de la Protección Social, teniendo en cuenta criterios de frecuencia, gravedad, comportamiento epidemiológico, posibilidades de prevención, costo - efectividad de las intervenciones, e interés público; que además, requieren ser enfrentados con medidas de salud pública.',
    },
    {
      termino: 'Gestión de la Salud Ambiental',
      significado:
        'Conjunto de acciones y disposiciones necesarias encaminadas a lograr la racionalidad en el proceso de decisión relativo a la conservación, defensa, protección y mejora del ambiente, basada en una coordinada información multidisciplinar y en la participación ciudadana, y como enfoque principal los determinantes ambientales de salud.',
    },
    {
      termino: 'Gestión de la salud pública',
      significado:
        'En el marco del Plan Decenal de Salud Pública, se constituye en un proceso dinámico, integral, sistemático y participativo que bajo el liderazgo y conducción de la autoridad sanitaria, está orientado a que las políticas, planes, programas y proyectos de salud pública se realicen de manera efectiva, coordinada y organizada, entre los diferentes actores del SGSSS junto con otros sectores del Gobierno, de las organizaciones sociales y privadas y la comunidad, con el propósito de alcanzar los resultados en salud. Se enmarca en el ejercicio de la rectoría y apunta a la generación de gobernanza en salud, con el propósito de que las respuestas sectoriales, intersectoriales y comunitarias se desarrollen de manera articulada y orientadas al logro de resultados en salud. (Resolución 518 de 2015).',
    },
    {
      termino: 'Salud Ambiental',
      significado:
        'Es el resultado de la interacción de factores que operan en distintos niveles de agregación y en el marco de procesos complejos, que van más allá de los componentes tradicionales biológicos, físicos y químicos del medio ambiente. Para su mejor comprensión, la salud ambiental se puede contextualizar usando como referencia el marco de los factores determinantes de la salud (CONPES 3550 de 2008).',
    },
    {
      termino: 'Salud Pública',
      significado:
        'Conjunto de políticas que buscan garantizar de manera integrada, la salud de la población por medio de acciones dirigidas tanto de manera individual como colectiva, ya que sus resultados se constituyen en indicadores de las condiciones de vida, bienestar y desarrollo. Dichas acciones se realizarán bajo la rectoría del Estado y deberán promover la participación responsable de todos los sectores de la comunidad (Ley 1122 de 2007).',
    },
    {
      termino: 'Políticas públicas',
      significado:
        'Instrumentos que permiten construir respuestas que permiten incidir favorablemente en la vida y los territorios.',
    },
  ],
  referencias: [
    {
      referencia:
        'Constitución Política de Colombia [Const]. Artículos: 49, 79, 80, 208, 286, 189 numerales: 15 y 16. 7 de julio de 1991 (Colombia).  ',
      link: '',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social y Departamento Nacional de Planeación. (2005). CONPES 3375. Política nacional de sanidad agropecuaria e inocuidad de alimentos para el sistema de medidas sanitarias y fitosanitarias. ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3375.pdf',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social y Departamento Nacional de Planeación. (2019). CONPES 3957. Política nacional de laboratorios: Prioridades para mejorar el cumplimiento de estándares de calidad. Colombia: ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3957.pdf',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social y Departamento Nacional de Planeación. (2007). CONPES 113. Política Nacional de Seguridad Alimentaria y Nutricional (PSAN). ',
      link: 'https://colaboracion.dnp.gov.co/CDT/Conpes/Social/113.pdf',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social y Departamento Nacional de Planeación. (2007). CONPES 3468. Política nacional de sanidad e inocuidad para la cadena avícola. ',
      link:
        'https://www.ica.gov.co/getattachment/05335af5-1c3e-4d2b-92cb-0ca226a8a1d0/2942.aspx',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social y Departamento Nacional de Planeación. (2007). CONPES 3458. Política nacional de sanidad e inocuidad para la cadena porcícola. ',
      link:
        'https://www.ica.gov.co/getattachment/140a9da0-3f57-426a-840e-5c5b4de1f093/2845.aspx',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social y Departamento Nacional de Planeación. (2008). CONPES 3514. Política nacional fitosanitaria y de inocuidad para las cadenas de frutas y de otros vegetales. ',
      link:
        'https://www.ica.gov.co/getattachment/b12bfeda-1f37-4266-9c0c-e5c9e96be7bf/2008CN3514.aspx',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social. República de Colombia. Departamento Nacional de Planeación (2008). CONPES 3550 de 2008. Lineamientos para la formulación de la política integral de salud ambiental con énfasis en los componentes de calidad de aire, calidad de agua y seguridad química. ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3550.pdf',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social y Departamento Nacional de Planeación. (2010). CONPES 3676. Consolidación de la política sanitaria y de inocuidad para las cadenas láctea y cárnica. ',
      link:
        'https://www.ica.gov.co/ getattachment/3b31038a-72ba-40f9-a34d-cecd89015890/2010cp3676.aspx',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (2014). Guía Modelo de Inspección, Vigilancia y Control basado en Riesgos – IVC SOA. ',
      link:
        'http://www.saludcapital.gov.co/CTDLab/Publicaciones/2020/Guia_IVC_basado_en_Riesgos.pdf',
    },
    {
      referencia:
        'Ley 9 de 1979. Por la cual se dictan Medidas Sanitarias. 16 de julio de 1979. Diario Oficial No. 35308. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/LEY%200009%20DE%201979.pdf',
    },
    {
      referencia:
        'Ley 489 de 1998. Por la cual se dictan normas sobre la organización y funcionamiento de las entidades del orden nacional, se expiden las disposiciones, principios y reglas generales para el ejercicio de las atribuciones previstas en los numerales 15 y 16 del artículo 189 de la Constitución Política y se dictan otras disposiciones. Diciembre 29 1998. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=186',
    },
    {
      referencia:
        'Ley número 1122 de 2007. Por la cual se hacen algunas modificaciones en el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones. Enero 9 2007. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1122-de-2007.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2009). Resolución número 0082 de 2009. Por medio de la cual se adoptan unos formularios para la práctica de visitas de inspección sanitaria a los sistemas de suministro de agua para consumo humano. ',
      link:
        'https://www.ins.gov.co/Normatividad/Resoluciones/RESOLUCI%C3%93N%20082%20DE%202009.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social. Ministerio de Educación Nacional. Ministerio de Ambiente, Vivienda y Desarrollo Territorial. Agencia Presidencial para la Acción Social y la Cooperación Internacional. Servicio Nacional de Aprendizaje SENA. Organización Panamericana de la Salud. (2007). Estrategia de entornos saludables. Plan de acción intersectorial. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/plan-de-accion-intersectorial.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Acta general de inspección, vigilancia y control sanitario. ',
      link:
        'https://historico.santander.gov.co/intra/index.php/antico/viewdownload/530-formatos/10073-acta-general-de-inspeccion-vigilancia-y-control-sanitario',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2015). Resolución 518. Artículo 6. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0518-de-2015.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2016). Protocolo Autocontrol persona prestadora del servicio público de acueducto y los procesos de supervisión por parte de la Autoridad Sanitaria. ',
      link:
        'https://minvivienda.gov.co/sites/default/files/2020-08/protocolo-autocontrol-persona-prestadora_msps-mvct.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y de Protección Social. (2013). Resolución 1220 del 23 de abril de 2013. Por el cual se establece el modelo de inspección, vigilancia y control sanitario para los productos de uso y consumo humano. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%201229%20de%202013.PDF',
    },
    {
      referencia:
        'Ministerio de Salud y de la Protección Social. (2020). Modelo operativo de Inspección, vigilancia y Control sanitario para salud Ambiental. Subdirección de Salud Ambiental Versión 1.0. ',
      link: 'https://www.minsalud.gov.co/RID/modelo-operativo-ivc-t.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y de la Protección Social. Manual de inspección, vigilancia y control sanitario de Alimentos y bebidas basado en riesgo para las entidades Territoriales de salud. ',
      link:
        'https://www.invima.gov.co/documents/20143/1402493/28.+Manual+de+IVC+de+Alimentos+y+Bebidas+basado+en+el+riesgo+para+Las+ETS.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. Dirección de promoción y prevención Subdirección de salud ambiental. (2008). Lineamientos sectoriales construcción política integral - salud ambiental para todos. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/RBC/lineamientos-sectoriales-construccion-politica-integral-salud-ambiental-para-todos-.pdf',
    },
    {
      referencia:
        'Secretaria Distrital de Planeación. Alcaldía Distrital de Bogotá. (2017). Guía para la formulación e implementación de políticas públicas del Distrito. ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjurMantenimiento/adminverblobawa?tabla=T_NORMA_ARCHIVO&p_NORMFIL_ID=10895&f_NORMFIL_FILE=X&inputfileext=NORMFIL_FILENAME',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión de Riesgos y Desastres- UNGRD. (s.f.). Compilación de normas para la atención de riesgos y desastres en Colombia. ',
      link: 'https://portal.gestiondelriesgo.gov.co/Paginas/Normatividad.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jackeline Molina Villanueva',
          cargo: 'Experta Temático',
          centro: 'Regional Antioquia - Centro de Servicios de salud',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la industria, la empresa y los servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Revisor de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Córtes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Ourduz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Distrito Capital - Diseño y Metrología',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Produccióon Audiovisual',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon Audiovisual',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
