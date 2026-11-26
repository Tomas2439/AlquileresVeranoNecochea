export type UnitSlug =
  | 'asilomar-1'
  | 'asilomar-2'
  | 'asiloparque-1'
  | 'asiloparque-2'
  | 'asilocentro';

export type GrupoSlug = 'asilomar' | 'asiloparque' | 'asilocentro';

export type ServicioIcono =
  | 'plantas'
  | 'dormitorios'
  | 'cocina'
  | 'parrilla'
  | 'wifi'
  | 'cochera'
  | 'arbolado'
  | 'llave'
  | 'ambientes';

export interface ServicioItem {
  icono: ServicioIcono;
  texto: string;
}

export interface VideoItem {
  url: string;
  titulo: string;
}

export interface Alojamiento {
  slug: UnitSlug;
  nombre: string;
  grupoSlug: GrupoSlug;
  tipo: 'Cabaña' | 'Departamento';
  capacidad: string;
  diferencial: string;
  hermanaSlug?: UnitSlug;
  servicios: ServicioItem[];
  fotosAlt: string[];
  videos?: VideoItem[];
  videoAlInicio?: boolean;
  videoPosterTime?: number;
  portadaIndex?: number;
  portadaPosition?: string;
}

export interface GrupoAlojamiento {
  slug: GrupoSlug;
  tituloSeccion: string;
  nombre: string;
  lugarMapa: string;
  etiquetaCorta: string;
  tipo: 'Cabañas' | 'Departamento';
  resumenUbicacion: string;
  barrio: string;
  distanciaMar?: string;
  referencias: string[];
  mapEmbedUrl: string;
  googleMapsUrl: string;
  coordenadas: {
    lat: number;
    lng: number;
  };
}

export const WHATSAPP_URL = 'https://wa.link/ss9x7n';
export const INSTAGRAM_HANDLE = '@alquilerdeveranonecochea';
export const INSTAGRAM_URL = 'https://www.instagram.com/alquilerdeveranonecochea/';

/**
 * Si se reemplaza WHATSAPP_URL por https://wa.me/549..., el mensaje prellenado
 * se enviará automáticamente en el query param ?text=.
 */
export function getWhatsappUnitUrl(unidadNombre?: string): string {
  if (!unidadNombre) return WHATSAPP_URL;
  const texto = encodeURIComponent(`Hola, quiero consultar por ${unidadNombre}`);
  if (WHATSAPP_URL.includes('wa.me/')) {
    return `${WHATSAPP_URL}?text=${texto}`;
  }
  return WHATSAPP_URL;
}

export const GRUPOS_ALOJAMIENTO: GrupoAlojamiento[] = [
  {
    slug: 'asilomar',
    tituloSeccion: 'AsiloMar',
    nombre: 'AsiloMar',
    lugarMapa: 'AsiloMar',
    etiquetaCorta: 'Parque Miguel Lillo',
    tipo: 'Cabañas',
    resumenUbicacion: 'Cabañas cerca del Parque Miguel Lillo',
    barrio: 'Parque Miguel Lillo, Necochea',
    distanciaMar: 'A ~10 min a pie de la playa',
    referencias: ['Parque Miguel Lillo', 'Av. 10'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.4545998007216!2d-58.786572937187024!3d-38.59306145951449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958fa3e549019033%3A0xec0c88db1043b147!2sAsilomar%20caba%C3%B1as!5e0!3m2!1ses-419!2sar!4v1795717787049!5m2!1ses-419!2sar',
    googleMapsUrl:
      'https://www.google.com/maps/place/Asilomar+caba%C3%B1as/@-38.5930615,-58.7865729,17z/data=!3m1!4b1!4m6!3m5!1s0x958fa3e549019033:0xec0c88db1043b147!8m2!3d-38.5930615!4d-58.7865729',
    coordenadas: { lat: -38.5930615, lng: -58.7865729 },
  },
  {
    slug: 'asiloparque',
    tituloSeccion: 'AsiloParque',
    nombre: 'AsiloParque',
    lugarMapa: 'AsiloParque',
    etiquetaCorta: 'Parque Miguel Lillo',
    tipo: 'Cabañas',
    resumenUbicacion: 'Cabañas cerca del Parque Miguel Lillo',
    barrio: 'Parque Miguel Lillo, Necochea',
    distanciaMar: 'A ~9 min a pie de la playa',
    referencias: ['Parque Miguel Lillo', 'Av. 10'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.4066658374672!2d-58.782957200000006!3d-38.5935092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958fa36d70688e65%3A0x68c0b39ca5255c34!2sAsiloparque%20%64%75%70%6C%65%78!5e0!3m2!1ses-419!2sar!4v1795717870828!5m2!1ses-419!2sar',
    googleMapsUrl:
      'https://www.google.com/maps/place/Asiloparque+%64%75%70%6C%65%78/@-38.5935092,-58.7829572,17z/data=!3m1!4b1!4m6!3m5!1s0x958fa36d70688e65:0x68c0b39ca5255c34!8m2!3d-38.5935092!4d-58.7829572',
    coordenadas: { lat: -38.5935092, lng: -58.7829572 },
  },
  {
    slug: 'asilocentro',
    tituloSeccion: 'AsiloCentro',
    nombre: 'AsiloCentro',
    lugarMapa: 'AsiloCentro',
    etiquetaCorta: 'Centro Playa',
    tipo: 'Departamento',
    resumenUbicacion: 'Departamento en Centro Playa',
    barrio: 'Centro Playa, Necochea',
    distanciaMar: 'A ~5 min a pie de la playa',
    referencias: ['Av. 2 (Costanera)', 'Peatonal 83'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.9887189757974!2d-58.7257884!3d-38.5801076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958f994eae5a9bfd%3A0xd2c2ff1d4814d48f!2sAsilocentro%20depto!5e0!3m2!1ses-419!2sar!4v1795717990857!5m2!1ses-419!2sar',
    googleMapsUrl:
      'https://www.google.com/maps/place/Asilocentro+depto/@-38.5801076,-58.7257884,17z/data=!3m1!4b1!4m6!3m5!1s0x958f994eae5a9bfd:0xd2c2ff1d4814d48f!8m2!3d-38.5801076!4d-58.7257884',
    coordenadas: { lat: -38.5801076, lng: -58.7257884 },
  },
];

export const ALOJAMIENTOS: Alojamiento[] = [
  {
    slug: 'asilomar-1',
    nombre: 'AsiloMar I',
    grupoSlug: 'asilomar',
    tipo: 'Cabaña',
    capacidad: '4 personas',
    // TODO: confirmar diferencia específica entre AsiloMar I y II, y reemplazar igexport-Ddoztr1EUba-1.jpg cuando haya una toma exterior sin poste ni alambrado (o cambiar portadaIndex: 2 para usar el estar-comedor)
    portadaPosition: '50% 18%',
    diferencial: 'Cabaña de dos plantas con estar en planta baja e ingreso independiente.',
    hermanaSlug: 'asilomar-2',
    // TODO: validar con el cliente dormitorios, parrilla y wifi
    servicios: [
      { icono: 'dormitorios', texto: '2 dormitorios' },
      { icono: 'cocina', texto: 'Cocina equipada' },
      { icono: 'parrilla', texto: 'Parrilla' },
      { icono: 'wifi', texto: 'Wi-Fi' },
    ],
    fotosAlt: [
      'Fachada exterior y jardín de la cabaña AsiloMar I en Necochea',
      'Estar comedor luminoso en planta baja de AsiloMar I',
      'Cocina equipada con alacenas y mesada en AsiloMar I',
      'Dormitorio principal con cama matrimonial en AsiloMar I',
      'Segundo ambiente y camas individuales en AsiloMar I',
      'Baño completo de la cabaña AsiloMar I',
      'Patio exterior y parrilla de AsiloMar I',
      'Vista del acceso independiente a AsiloMar I',
    ],
  },
  {
    slug: 'asilomar-2',
    nombre: 'AsiloMar II',
    grupoSlug: 'asilomar',
    tipo: 'Cabaña',
    capacidad: '4 personas',
    // TODO: confirmar diferencia específica entre AsiloMar I y II con el cliente
    diferencial: 'Segunda unidad independiente de dos plantas con espacio exterior propio.',
    hermanaSlug: 'asilomar-1',
    // TODO: validar con el cliente dormitorios, parrilla y wifi
    servicios: [
      { icono: 'dormitorios', texto: '2 dormitorios' },
      { icono: 'cocina', texto: 'Cocina equipada' },
      { icono: 'parrilla', texto: 'Parrilla' },
      { icono: 'wifi', texto: 'Wi-Fi' },
    ],
    fotosAlt: [
      'Vista exterior principal de la cabaña AsiloMar II en Necochea',
      'Estar comedor integrado en planta baja de AsiloMar II',
      'Cocina equipada y barra desayunadora de AsiloMar II',
      'Dormitorio principal en planta alta de AsiloMar II',
      'Camas adicionales y espacio de guardado en AsiloMar II',
      'Baño equipado de la cabaña AsiloMar II',
      'Patio y espacio al aire libre de AsiloMar II',
      'Detalle interior y escalera de madera en AsiloMar II',
    ],
  },
  {
    slug: 'asiloparque-1',
    nombre: 'AsiloParque I',
    grupoSlug: 'asiloparque',
    tipo: 'Cabaña',
    capacidad: '3 personas',
    // TODO: confirmar diferencia específica entre AsiloParque I y II con el cliente
    diferencial: 'Cabaña para tres huéspedes con acceso independiente cerca del Parque Miguel Lillo.',
    hermanaSlug: 'asiloparque-2',
    // TODO: validar con el cliente dormitorios, parrilla y wifi
    servicios: [
      { icono: 'dormitorios', texto: '1 dormitorio' },
      { icono: 'cocina', texto: 'Cocina equipada' },
      { icono: 'parrilla', texto: 'Parrilla' },
      { icono: 'wifi', texto: 'Wi-Fi' },
    ],
    fotosAlt: [
      'Exterior y jardín de la cabaña AsiloParque I en Necochea',
      'Estar comedor cálido de AsiloParque I',
      'Cocina equipada y comedor diario de AsiloParque I',
      'Dormitorio luminoso en AsiloParque I',
      'Galería y espacio exterior en AsiloParque I',
      'Detalle del jardín y acceso a AsiloParque I',
    ],
    videos: [],
  },
  {
    slug: 'asiloparque-2',
    nombre: 'AsiloParque II',
    grupoSlug: 'asiloparque',
    tipo: 'Cabaña',
    capacidad: '3 personas',
    // TODO: confirmar diferencia específica entre AsiloParque I y II con el cliente
    diferencial: 'Segunda cabaña independiente cerca del Parque Miguel Lillo, equipada para tres personas.',
    hermanaSlug: 'asiloparque-1',
    // TODO: validar con el cliente dormitorios, parrilla y wifi
    servicios: [
      { icono: 'dormitorios', texto: '1 dormitorio' },
      { icono: 'cocina', texto: 'Cocina equipada' },
      { icono: 'parrilla', texto: 'Parrilla' },
      { icono: 'wifi', texto: 'Wi-Fi' },
    ],
    fotosAlt: [
      'Frente y jardín de la cabaña AsiloParque II en Necochea',
      'Ambiente principal y comedor de AsiloParque II',
      'Cocina equipada de la cabaña AsiloParque II',
      'Espacio de parrilla exterior en AsiloParque II',
      'Vista exterior de AsiloParque II',
    ],
    videos: [],
  },
  {
    slug: 'asilocentro',
    nombre: 'AsiloCentro',
    grupoSlug: 'asilocentro',
    tipo: 'Departamento',
    // TODO: confirmar si la capacidad final es 4 o 4/5 personas
    capacidad: '4 personas',
    diferencial: 'Departamento zona Centrica de la Playa, a pocas cuadras del mar y de la peatonal.',
    // TODO: validar con el cliente dormitorios, equipamiento y wifi
    servicios: [
      { icono: 'dormitorios', texto: '2 dormitorios' },
      { icono: 'cocina', texto: 'Cocina equipada' },
      { icono: 'ambientes' as ServicioIcono, texto: 'Estar comedor' },
      { icono: 'wifi', texto: 'Wi-Fi' },
    ],
    fotosAlt: [
      'Vista principal del departamento AsiloCentro en Necochea',
      'Living comedor de AsiloCentro',
      'Cocina equipada de AsiloCentro',
      'Dormitorio de AsiloCentro',
      'Vista urbana desde AsiloCentro',
    ],
    videos: [],
    // Segundo 13 del video muestra el dormitorio luminoso en lugar de la pared con ventilador del segundo 0.5
    videoPosterTime: 13,
  },
];

export function getUnidadesByGrupo(grupoSlug: GrupoSlug): Alojamiento[] {
  return ALOJAMIENTOS.filter((u) => u.grupoSlug === grupoSlug);
}

export function getGrupoBySlug(grupoSlug: GrupoSlug): GrupoAlojamiento {
  return GRUPOS_ALOJAMIENTO.find((g) => g.slug === grupoSlug) ?? GRUPOS_ALOJAMIENTO[0];
}

export function getUnidadBySlug(slug: string): Alojamiento | undefined {
  return ALOJAMIENTOS.find((u) => u.slug === slug);
}
