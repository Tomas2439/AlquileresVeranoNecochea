export type UnitSlug =
  | 'asilomar-1'
  | 'asilomar-2'
  | 'asiloparque-1'
  | 'asiloparque-2'
  | 'asilocentro';

export type ZonaSlug = 'asilomar' | 'asiloparque' | 'asilocentro';

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
  zonaSlug: ZonaSlug;
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

export interface ZonaAlojamiento {
  slug: ZonaSlug;
  tituloSeccion: string;
  nombre: string;
  etiquetaCorta: string;
  tipo: 'Cabañas' | 'Departamento';
  resumenUbicacion: string;
  barrio: string;
  distanciaMar?: string;
  referencias: string[];
  mapPin: {
    x: number;
    y: number;
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

export const ZONAS: ZonaAlojamiento[] = [
  {
    slug: 'asilomar',
    tituloSeccion: 'AsiloMar',
    nombre: 'AsiloMar',
    etiquetaCorta: 'Zona sur',
    tipo: 'Cabañas',
    resumenUbicacion: 'Zona sur de Necochea',
    barrio: 'Zona sur de Necochea',
    // TODO: agregar distancia real al mar y referencias cuando el cliente las confirme
    referencias: [],
    mapPin: { x: 22, y: 66 },
  },
  {
    slug: 'asiloparque',
    tituloSeccion: 'AsiloParque',
    nombre: 'AsiloParque',
    etiquetaCorta: 'Zona parque',
    tipo: 'Cabañas',
    resumenUbicacion: 'Zona parque de Necochea',
    barrio: 'Zona parque de Necochea',
    // TODO: agregar distancia real al mar y referencias cuando el cliente las confirme
    referencias: [],
    mapPin: { x: 48, y: 54 },
  },
  {
    slug: 'asilocentro',
    tituloSeccion: 'En el centro',
    nombre: 'AsiloCentro',
    etiquetaCorta: 'Centro',
    tipo: 'Departamento',
    resumenUbicacion: 'Centro de Necochea',
    barrio: 'Centro de Necochea',
    // TODO: agregar distancia real al mar y referencias cuando el cliente las confirme
    referencias: [],
    mapPin: { x: 76, y: 40 },
  },
];

export const ALOJAMIENTOS: Alojamiento[] = [
  {
    slug: 'asilomar-1',
    nombre: 'AsiloMar I',
    zonaSlug: 'asilomar',
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
      'Sector exterior y parrilla de AsiloMar I',
      'Vista del acceso independiente a AsiloMar I',
    ],
  },
  {
    slug: 'asilomar-2',
    nombre: 'AsiloMar II',
    zonaSlug: 'asilomar',
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
      'Patio y sector al aire libre de AsiloMar II',
      'Detalle interior y escalera de madera en AsiloMar II',
    ],
  },
  {
    slug: 'asiloparque-1',
    nombre: 'AsiloParque I',
    zonaSlug: 'asiloparque',
    tipo: 'Cabaña',
    capacidad: '3 personas',
    // TODO: confirmar diferencia específica entre AsiloParque I y II con el cliente
    diferencial: 'Cabaña para tres huéspedes con acceso independiente en zona parque.',
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
    zonaSlug: 'asiloparque',
    tipo: 'Cabaña',
    capacidad: '3 personas',
    // TODO: confirmar diferencia específica entre AsiloParque I y II con el cliente
    diferencial: 'Segunda cabaña independiente en zona parque, equipada para tres personas.',
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
      'Sector de parrilla exterior en AsiloParque II',
      'Vista exterior de AsiloParque II',
    ],
    videos: [],
  },
  {
    slug: 'asilocentro',
    nombre: 'AsiloCentro',
    zonaSlug: 'asilocentro',
    tipo: 'Departamento',
    // TODO: confirmar si la capacidad final es 4 o 4/5 personas
    capacidad: '4 personas',
    diferencial: 'Departamento en el centro de Necochea, cerca de comercios y gastronomía.',
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

export function getUnidadesByZona(zonaSlug: ZonaSlug): Alojamiento[] {
  return ALOJAMIENTOS.filter((u) => u.zonaSlug === zonaSlug);
}

export function getZonaBySlug(zonaSlug: ZonaSlug): ZonaAlojamiento {
  return ZONAS.find((z) => z.slug === zonaSlug) ?? ZONAS[0];
}

export function getUnidadBySlug(slug: string): Alojamiento | undefined {
  return ALOJAMIENTOS.find((u) => u.slug === slug);
}
