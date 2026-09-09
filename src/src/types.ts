export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  equipmentIntervened: string[];
  imageUrl: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'chancadores' | 'celdas' | 'motrices' | 'polines' | 'poleas' | 'estructuras' | 'montaje';
  categoryLabel: string;
  location: string;
  description: string;
  aspectRatio: 'tall' | 'wide' | 'normal';
  imageUrl: string;
  details: string[];
}

export interface ClientPartner {
  id: string;
  name: string;
  fullName: string;
  type: string;
  badge: string;
  logoUrl?: string;
}

export interface OperationArea {
  name: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  nombreEmpresa: string;
  email: string;
  telefono: string;
  servicioInteres: string;
  mensaje: string;
}
