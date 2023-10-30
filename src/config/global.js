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
            hash: 't_1_1',
          },
          {
            numero: '3.2',
            titulo: 'Modelo',
            hash: 't_1_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos',
            hash: 't_1_3',
          },
          {
            numero: '3.4',
            titulo:
              'Guías e instrumentos para la inspección vigilancia y control sanitario',
            hash: 't_1_4',
          },
          {
            numero: '3.5',
            titulo:
              'Gestión de la salud ambiental a nivel nacional y territorial',
            hash: 't_1_5',
          },
          {
            numero: '3.6',
            titulo:
              'Escenarios de intersectorial nacionales territoriales para la gestión de la salud ambiental y seguridad sanitaria',
            hash: 't_1_6',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
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
      termino: 'Consejo Nacional de Política Económica y Social (Conpes)',
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
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
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
