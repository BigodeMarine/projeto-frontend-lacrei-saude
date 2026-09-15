import professionals from '@/data/professionals.json';

export interface Professional {
  id: number;
  name: string;
  specialty: string;
  location: string;
  description: string;
}

export async function getProfessionals(): Promise<Professional[]> {
  // Simula uma chamada para uma API.
  return Promise.resolve(professionals);
}