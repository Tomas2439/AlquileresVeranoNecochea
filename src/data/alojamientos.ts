export interface Alojamiento {
  slug:
    | 'asilomar-1'
    | 'asilomar-2'
    | 'asiloparque-1'
    | 'asiloparque-2'
    | 'asilocentro';
  nombre: string;
  capacidad: string;
  fotosAlt: string[];
}

export interface AsiloGrupo {
  slug: 'asilomar' | 'asiloparque' | 'asilocentro';
  nombre: string;
  tipo: string;
  capacidadResumen: string;
  zona: string;
  ubicacionDetalle: string;
  unidadesSlugs: Alojamiento['slug'][];
}

export const WHATSAPP_URL = 'https://wa.link/ss9x7n';
export const INSTAGRAM_HANDLE = '@alquilerdeveranonecochea';
export const INSTAGRAM_URL = 'https://www.instagram.com/alquilerdeveranonecochea/';

export const ALOJAMIENTOS: Alojamiento[] = [
  {
    slug: 'asilomar-1',
    nombre: 'Asilomar 1',
    capacidad: '4 personas',
    fotosAlt: [
      'Vista principal de Asilomar 1 en Necochea',
      'Interior y estar de Asilomar 1',
      'Cocina y comedor de Asilomar 1',
      'Dormitorio de Asilomar 1',
      'Espacio exterior de Asilomar 1',
    ],
  },
  {
    slug: 'asilomar-2',
    nombre: 'Asilomar 2',
    capacidad: '4 personas',
    fotosAlt: [
      'Vista principal de Asilomar 2 en Necochea',
      'Interior y estar de Asilomar 2',
      'Cocina y comedor de Asilomar 2',
      'Dormitorio de Asilomar 2',
      'Espacio exterior de Asilomar 2',
    ],
  },
  {
    slug: 'asiloparque-1',
    nombre: 'Asiloparque 1',
    capacidad: '3 personas',
    fotosAlt: [
      'Vista principal de Asiloparque 1 en Necochea',
      'Interior y estar de Asiloparque 1',
      'Cocina y comedor de Asiloparque 1',
      'Dormitorio de Asiloparque 1',
      'Espacio exterior de Asiloparque 1',
    ],
  },
  {
    slug: 'asiloparque-2',
    nombre: 'Asiloparque 2',
    capacidad: '3 personas',
    fotosAlt: [
      'Vista principal de Asiloparque 2 en Necochea',
      'Interior y estar de Asiloparque 2',
      'Cocina y comedor de Asiloparque 2',
      'Dormitorio de Asiloparque 2',
      'Espacio exterior de Asiloparque 2',
    ],
  },
  {
    slug: 'asilocentro',
    nombre: 'Asilocentro',
    capacidad: '4 personas',
    fotosAlt: [
      'Vista principal de Asilocentro en Necochea',
      'Interior y estar de Asilocentro',
      'Cocina y comedor de Asilocentro',
      'Dormitorio de Asilocentro',
      'Vista del entorno de Asilocentro',
    ],
  },
];

export const ASILOS: AsiloGrupo[] = [
  {
    slug: 'asilomar',
    nombre: 'AsiloMar',
    tipo: 'Dúplex',
    capacidadResumen: '4 personas',
    zona: 'Villa del Deportista, Necochea',
    ubicacionDetalle: 'Dúplex en Villa del Deportista, Necochea.',
    unidadesSlugs: ['asilomar-1', 'asilomar-2'],
  },
  {
    slug: 'asiloparque',
    nombre: 'AsiloParque',
    tipo: 'Dúplex',
    capacidadResumen: '3 personas',
    zona: 'Villa del Deportista, Necochea',
    ubicacionDetalle: 'Dúplex en Villa del Deportista, Necochea.',
    unidadesSlugs: ['asiloparque-1', 'asiloparque-2'],
  },
  {
    slug: 'asilocentro',
    nombre: 'AsiloCentro',
    tipo: 'Departamento',
    capacidadResumen: '4 personas',
    zona: 'Zona céntrica, Necochea',
    ubicacionDetalle: 'Depto en zona céntrica para 4/5 personas, Necochea.',
    unidadesSlugs: ['asilocentro'],
  },
];

export function getUnidadesByAsilo(asilo: AsiloGrupo): Alojamiento[] {
  return asilo.unidadesSlugs
    .map((slug) => ALOJAMIENTOS.find((a) => a.slug === slug))
    .filter((a): a is Alojamiento => Boolean(a));
}
