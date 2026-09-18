import { Product } from '@/types/product';

const photo = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=86`;
export const products: Product[] = [
  { id: 'couple', slug: 'custom-couple-figurine', name: 'Custom Couple Figurine', price: 1499, rating: 4.9, category: 'Couples', personalization: true, image: photo('photo-1516589178581-6cd7833ae3b2'), description: 'A tiny, timeless portrait of the two of you, sculpted from your favorite memory.' },
  { id: 'miniature', slug: 'personalized-miniature', name: 'Personalized Miniature', price: 999, rating: 4.8, category: 'Figurines', personalization: true, image: photo('photo-1608889175123-8ee362201f81'), description: 'A beautifully detailed miniature made uniquely yours.' },
  { id: 'pet', slug: 'custom-pet-model', name: 'Custom Pet Model', price: 1299, rating: 5, category: 'Pets', personalization: true, image: photo('photo-1558788353-f76d92427f16'), description: 'Keep your best friend close with a charming custom pet model.' },
  { id: 'character', slug: '3d-character-figure', name: '3D Character Figure', price: 1799, rating: 4.9, category: 'Characters', image: photo('photo-1531259683007-016a7b628fc3'), description: 'Turn a character, idea, or alter ego into a shelf-worthy collectible.' },
  { id: 'memory', slug: 'memory-figurine', name: 'Memory Figurine', price: 1599, rating: 4.8, category: 'Gifts', personalization: true, image: photo('photo-1511988617509-a57c8a288659'), description: 'A meaningful keepsake designed around the moments that matter.' },
  { id: 'desk', slug: 'premium-desk-model', name: 'Premium Desk Model', price: 1899, rating: 4.7, category: 'Home Décor', image: photo('photo-1618005198919-d3d4b5a92ead'), description: 'A considered sculptural piece for desks, shelves, and creative corners.' },
];

export const categories = ['All', 'Figurines', 'Couples', 'Family', 'Pets', 'Characters', 'Home Décor', 'Gifts', 'Keychains', 'Collectibles'] as const;
