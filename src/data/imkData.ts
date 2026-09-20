import { ServiceItem, GalleryProject, ClientPartner, OperationArea } from '../types';

export const IMK_CONTACT = {
  name: 'IMK Servicios Industriales',
  slogan: 'Al servicio del desarrollo productivo de la minería e industria en Chile',
  address: 'Daniel Orengo Zepeda #1115, Coquimbo, Chile',
  phone1: '+569 92249574',
  phone1Raw: '56992249574',
  phone2: '+569 44934723',
  phone2Raw: '56944934723',
  email1: 'imk@imkspa.cl',
  email2: 'isaacjimenez@imkspa.cl',
  website: 'www.imkspa.cl',
  instagram: '@imk.serv.industriales',
  instagramUrl: 'https://instagram.com/imk.serv.industriales',
  safetyRecord: 'Índice de accidentabilidad 0',
  safetyAffiliation: 'Adheridos a Mutual de Seguridad',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'mantenimiento-mecanico',
    number: '01',
    title: 'Mantenimiento mecánico y estructural de plantas y equipos de proceso',
    shortDescription: 'Intervenciones programadas y correctivas de alta precisión en líneas de chancado, molienda, flotación y filtrado.',
    fullDescription: 'Especialistas en mantenimiento integral de plantas concentradoras e instalaciones mineras. Ejecutamos recambios de componentes críticos, ajuste de tolerancias, alineamiento láser y recuperación estructural para maximizar el tiempo operativo y disponibilidad de planta.',
    iconName: 'Wrench',
    features: [
      'Mantenimiento mayor y preventivo de chancadores de cono, mandíbula y giratorios',
      'Mantenimiento y revestimiento de celdas de flotación e impulsores',
      'Cambio y alineamiento de sistemas motrices (motores, reductores y acoplamientos)',
      'Cambio de estaciones, polines y componentes de transporte de mineral',
      'Reemplazo y calibración de poleas motrices y de retorno'
    ],
    equipmentIntervened: ['Chancadores Metso/Sandvik', 'Celdas Outotec/FLSmidth', 'Molinos SAG y Bolas', 'Cintas Transportadoras Overland'],
    imageUrl: '/images/foto1.jpeg'
  },
  {
    id: 'montaje-estructuras',
    number: '02',
    title: 'Proyectos de montaje y desmontaje de estructuras y equipos',
    shortDescription: 'Maniobras complejas de izaje, ensamblaje de módulos pesados y sustitución de unidades en paradas de planta.',
    fullDescription: 'Desarrollamos proyectos de montaje y desmontaje con ingeniería de maniobras calculada, personal calificado en rigger y soldadura certificada, asegurando el cumplimiento estricto de cronogramas críticos de parada de planta (turnaround).',
    iconName: 'Construction',
    features: [
      'Montaje y desmontaje de estructuras metálicas de gran tonelaje',
      'Instalación de tolvas, chutes de traspaso y buzones de descarga',
      'Maniobras de izaje de alta complejidad coordinadas con grúas de alto tonelaje',
      'Montaje de silos, espesadores y torres de transferencia',
      'Desarme seguro y retiro de equipos obsoletos en paradas de planta'
    ],
    equipmentIntervened: ['Estructuras modulares', 'Chutes de mineral', 'Tolvas de recepción', 'Puentes grúa industriales'],
    imageUrl: '/images/foto2.jpeg'
  },
  {
    id: 'ingenieria-proyectos',
    number: '03',
    title: 'Desarrollo de obras de ingeniería y proyectos',
    shortDescription: 'Ingeniería aplicada, diseño de mejoras operativas, modelado estructural y soluciones a medida para la industria minera.',
    fullDescription: 'Aportamos soluciones de ingeniería que resuelven cuellos de botella operacionales y desgastes acelerados. Diseñamos componentes y modificaciones estructurales con cálculo de esfuerzos, selección de aceros antidesgaste y memorias de cálculo.',
    iconName: 'Cpu',
    features: [
      'Levantamiento dimensional en terreno y modelado 3D de elementos mecánicos',
      'Ingeniería de detalle para modificaciones y refuerzos estructurales',
      'Diseño y fabricación a medida de piezas antidesgaste y protecciones',
      'Cálculo estructural y memorias de respaldo bajo normas chilenas (NCh)',
      'Supervisión y aseguramiento de calidad (QA/QC) en taller y faena'
    ],
    equipmentIntervened: ['Sistemas de descarga', 'Estructuras de soporte', 'Sistemas de captación de polvo', 'Diseño de pasarelas y plataformas'],
    imageUrl: '/images/foto3.jpeg'
  },
  {
    id: 'obras-civiles',
    number: '04',
    title: 'Obras civiles, trabajos de topografía y mantenimiento de infraestructura en general',
    shortDescription: 'Construcción de fundaciones, topografía de precisión, pavimentos industriales y conservación de recintos e instalaciones.',
    fullDescription: 'Ejecutamos obras civiles orientadas a la minería e industria pesada, incluyendo fundaciones para chancadores y molinos, losas de hormigón de alta resistencia, drenajes de faena y control topográfico milimétrico para alineación de estructuras.',
    iconName: 'HardHat',
    features: [
      'Fundaciones y pedestales de hormigón armado para maquinaria pesada',
      'Levantamientos topográficos de alta precisión georreferenciados',
      'Control de verticalidad, nivelación y deformación de estructuras',
      'Muros de contención, radieres industriales y pavimentación de faenas',
      'Mantenimiento integral de infraestructura, canalizaciones y ductos mineros'
    ],
    equipmentIntervened: ['Estaciones totales y GPS geodésico', 'Plantas de hormigonado', 'Infraestructura portuaria', 'Caminos y accesos de planta'],
    imageUrl: '/images/IMG_1486.jpg'
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'trabajo-1',
    title: 'Mantenimiento de chancadores',
    category: 'chancadores',
    categoryLabel: 'Chancado',
    location: 'Planta de Chancado Secundario / Terciario',
    description: 'Overhaul completo, recambio de corazas cóncavas y manto, calibración de sistema hidráulico y verificación de holguras operativas.',
    aspectRatio: 'wide',
    imageUrl: '/images/IMG_2693.jpg',
    details: ['Recambio de manto y cóncavas', 'Ajuste de setting hidráulico', 'Protocolo de lubricación y torque']
  },
  {
    id: 'trabajo-2',
    title: 'Mantenimiento de celdas',
    category: 'celdas',
    categoryLabel: 'Flotación',
    location: 'Batería de Celdas Rougher y Scavenger',
    description: 'Inspección interna, recambio de mecanismos de agitación (rotor y estator), revestimiento con elastómeros antiabrasivos y balanceo dinámico.',
    aspectRatio: 'tall',
    imageUrl: '/images/IMG_2696.jpg',
    details: ['Sustitución de rotor/estator', 'Revestimiento vulcanizado en frío', 'Pruebas hidrodinámicas de dispersión']
  },
  {
    id: 'trabajo-3',
    title: 'Cambio y alineamiento de sistemas motrices',
    category: 'motrices',
    categoryLabel: 'Sistemas Motrices',
    location: 'Líneas de Molienda y Correas de Gran Potencia',
    description: 'Alineación láser de acoplamientos, nivelación de reductores planetarios, chequeo de vibraciones y apriete con llave hidráulica controlada.',
    aspectRatio: 'normal',
    imageUrl: '/images/IMG_2702.jpg',
    details: ['Alineamiento láser tridimensional', 'Inspección de engranajes y rodamientos', 'Montaje con interferencia térmica']
  },
  {
    id: 'trabajo-4',
    title: 'Cambio de estaciones y polines',
    category: 'polines',
    categoryLabel: 'Transporte de Mineral',
    location: 'Correas Transportadoras Overland',
    description: 'Sustitución masiva de estaciones autoalineantes, polines de impacto engomados y polines de retorno en cintas de alta velocidad.',
    aspectRatio: 'tall',
    imageUrl: '/images/IMG_9754.jpg',
    details: ['Polines de impacto amortiguados', 'Alineamiento de catenarias', 'Garantía de giro libre y bajo roce']
  },
  {
    id: 'trabajo-5',
    title: 'Cambio de poleas',
    category: 'poleas',
    categoryLabel: 'Poleas y Tambores',
    location: 'Poleas de Cabeza y Retorno en Correa Concentradora',
    description: 'Desmontaje de poleas motrices pesadas, reemplazo de cajas de descanso tipo Plummer block y calibración de tensión de faja.',
    aspectRatio: 'wide',
    imageUrl: '/images/foto1.jpeg',
    details: ['Polea con engomado cerámico diamantado', 'Montaje con manguito cónico de fijación', 'Reemplazo de rodamientos de doble hilera']
  },
  {
    id: 'trabajo-6',
    title: 'Fabricación estructural',
    category: 'estructuras',
    categoryLabel: 'Metalmecánica',
    location: 'Taller de Maestranza y Faena',
    description: 'Corte CNC, armado y soldadura calificada según norma AWS D1.1 de vigas, plataformas de acceso, escaleras industriales y pasarelas mineras.',
    aspectRatio: 'normal',
    imageUrl: '/images/foto2.jpeg',
    details: ['Soldadura certificada AWS', 'Pintura epóxica de alto espesor', 'Ensayos no destructivos (tintas penetrantes y ultrasonido)']
  },
  {
    id: 'trabajo-7',
    title: 'Montaje de equipos y estructuras',
    category: 'montaje',
    categoryLabel: 'Montaje Industrial',
    location: 'Planta Concentradora y Puerto de Embarque',
    description: 'Izajes críticos con camión pluma y grúas de 120 toneladas, posicionamiento milimétrico de tolvas de traspaso y estructuras pesadas.',
    aspectRatio: 'tall',
    imageUrl: '/images/foto3.jpeg',
    details: ['Plan de izaje (Rigging Plan) validado', 'Torque controlado y marcado de pernos', 'Entrega con protocolo de recepción técnica']
  }
];

export const CLIENTS: ClientPartner[] = [
  {
    id: 'teck',
    name: 'Teck',
    fullName: 'Teck Resources / Carmen de Andacollo',
    type: 'Minería de Cobre y Oro',
    badge: 'Gran Minería',
    logoUrl: '/logos/teck logo.png'
  },
  {
    id: 'cmp',
    name: 'CMP',
    fullName: 'Compañía Minera del Pacífico (Grupo CAP)',
    type: 'Minería de Hierro y Puertos',
    badge: 'Operación Portuaria y Faenas',
    logoUrl: '/logos/logo cmp.png'
  },
  {
    id: 'enaex',
    name: 'Enaex',
    fullName: 'ENAEX Servicios a la Minería',
    type: 'Plantas Químicas y Materias Primas',
    badge: 'Química Minera',
    logoUrl: '/logos/logo enaex.png'
  },
  {
    id: 'pucobre',
    name: 'Pucobre',
    fullName: 'Sociedad Punta del Cobre S.A.',
    type: 'Extracción y Procesamiento de Cobre',
    badge: 'Faena San José / Biocobre',
    logoUrl: '/logos/logo pucobre 2.png'
  },
  {
    id: 'tambillos',
    name: 'Tambillos',
    fullName: 'Compañía Minera Tambillos',
    type: 'Concentradora y Molienda',
    badge: 'Planta de Beneficio',
    logoUrl: '/logos/sominor_logo.png'
  },
  {
    id: 'minera-florida',
    name: 'Compañía Minera Florida SA',
    fullName: 'Minera Florida (Yamana Gold / Pan American Silver)',
    type: 'Minería Subterránea y Superficie',
    badge: 'Planta Concentradora',
    logoUrl: '/logos/logo_florida.png'
  },
  {
    id: 'biocobre',
    name: 'Biocobre',
    fullName: 'Planta Biocobre S.A.',
    type: 'Lixiviación y Plantas Hidrometalúrgicas',
    badge: 'Procesos Metalúrgicos',
    logoUrl: '/logos/logo pucobre 2.png'
  }
];

export const OPERATION_AREAS: OperationArea[] = [
  {
    name: 'Plantas de Chancado',
    description: 'Chancadores primarios giratorios, de mandíbula y secundarios/terciarios de cono con sus circuitos de cribado y tolvas.',
    icon: 'Layers'
  },
  {
    name: 'Molienda',
    description: 'Circuitos de molienda SAG y de bolas, chutes de alimentación, cajas de pulpa y trommels clasificadores.',
    icon: 'RotateCw'
  },
  {
    name: 'Flotación y Concentradora',
    description: 'Baterías de celdas de flotación colectiva y selectiva, canaletas de concentrado y sopladores de aire.',
    icon: 'FlaskConical'
  },
  {
    name: 'Espesamiento y Filtros',
    description: 'Espesadores de relaves y concentrado, filtros de prensa y discos, bombas de pulpa de alta presión.',
    icon: 'Filter'
  },
  {
    name: 'Terminales y Puertos Mineros',
    description: 'Infraestructura de cargadores de barcos (ship loaders), correas de transferencia y acopio portuario (e.g. Puerto de Guayacán).',
    icon: 'Anchor'
  },
  {
    name: 'Materias Primas para Explosivos',
    description: 'Plantas industriales de proceso y síntesis química para el rubro de voladura minera (plantas de emulsiones y nitratos).',
    icon: 'Flame'
  }
];

export const FAENAS_DESTACADAS = [
  'Puerto de Guayacán',
  'CMP (Compañía Minera del Pacífico)',
  'Planta Punta de Teatinos',
  'ENAEX',
  'El Espino',
  'Pucobre',
  'Planta San José',
  'Carmen de Andacollo (Teck)'
];

export const DEMING_CYCLE = [
  {
    step: '01',
    phase: 'Planeando',
    phaseEn: 'Plan',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    title: 'Planificación & Análisis Preventivo',
    desc: 'Levantamiento técnico en terreno, evaluación detallada de riesgos (APR, AST), cálculo de maniobras de izaje, asignación de cuadrillas y cronograma milimétrico de parada.'
  },
  {
    step: '02',
    phase: 'Haciendo',
    phaseEn: 'Do',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    title: 'Ejecución Rigurosa en Faena',
    desc: 'Intervención mecánica y estructural con personal técnico calificado, supervisión permanente en terreno, equipos certificados y cumplimiento estricto de protocolos mineros.'
  },
  {
    step: '03',
    phase: 'Verificando',
    phaseEn: 'Check',
    color: 'from-sky-500 to-teal-500',
    textColor: 'text-sky-300',
    borderColor: 'border-sky-500/30',
    title: 'Control de Calidad & Tolerancias',
    desc: 'Medición láser de alineamientos, verificación de torques hidráulicos, ensayos no destructivos (NDT), pruebas en vacío y validación de parámetros operacionales.'
  },
  {
    step: '04',
    phase: 'Actuando',
    phaseEn: 'Act',
    color: 'from-cyan-400 to-emerald-500',
    textColor: 'text-cyan-300',
    borderColor: 'border-emerald-500/30',
    title: 'Mejora Continua & Cierre Técnico',
    desc: 'Análisis de oportunidades de optimización, reporte técnico de post-parada con dossier de calidad, trazabilidad y retroalimentación para futuras mantenciones.'
  }
];

export const COMMITMENT_PILLARS = [
  {
    number: '01',
    title: 'Seguridad Intransable',
    desc: 'Nuestra prioridad absoluta es proteger a las personas, el medio ambiente y los activos de nuestros clientes. Ejecutamos cada trabajo bajo los más altos estándares y protocolos de prevención.',
    badge: 'Índice de Accidentabilidad 0'
  },
  {
    number: '02',
    title: 'Eficiencia',
    desc: 'Nos enfocamos en maximizar la productividad de los procesos mineros, reduciendo los tiempos de parada no programada y asegurando la disponibilidad de equipos según lo planificado.',
    badge: 'Disponibilidad Garantizada'
  },
  {
    number: '03',
    title: 'Confianza',
    desc: 'Construimos relaciones de largo plazo basadas en resultados comprobables, cumplimiento riguroso de acuerdos, transparencia y excelencia en cada faena ejecutada.',
    badge: 'Alianzas Estratégicas'
  }
];
