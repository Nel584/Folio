export type PageId = 
  | 'accueil' 
  | 'a-propos'
  | 'projets' 
  | 'competences' 
  | 'experiences' 
  | 'temoignages' 
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Mes compétences' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'temoignages', label: 'Témoignages' },
  { id: 'contact', label: 'Contacter' },
];
