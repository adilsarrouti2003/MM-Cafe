export type Language = 'ar' | 'fr';

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface MenuItem {
  id: string;
  titleAr: string;
  titleFr: string;
  descAr: string;
  descFr: string;
  price: string;
  category: 'drinks' | 'breakfast' | 'desserts' | 'waffles';
  image: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  roleAr: string;
  roleFr: string;
  stars: number;
  dateAr: string;
  dateFr: string;
  textAr: string;
  textFr: string;
}
