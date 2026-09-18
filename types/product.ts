export type ProductCategory = 'Figurines' | 'Couples' | 'Family' | 'Pets' | 'Characters' | 'Home Décor' | 'Gifts' | 'Keychains' | 'Collectibles';
export interface Product { id: string; slug: string; name: string; price: number; rating: number; category: ProductCategory; image: string; description: string; personalization?: boolean; }
export type ModelType = 'Portrait' | 'Bust' | 'Full Body' | 'Couple' | 'Family' | 'Pet' | 'Character';
export type ModelStyle = 'Realistic' | 'Cartoon' | 'Chibi' | 'Minimal' | 'Custom';
export type ModelSize = 'Small' | 'Medium' | 'Large';
export type Material = 'PLA' | 'Resin' | 'Premium Resin';
export type ModelColor = 'White' | 'Black' | 'Custom';
export type AddOn = 'Premium Base' | 'Name Plate' | 'Custom Text' | 'Gift Packaging';
export interface CustomModelOrder { image: string; fileName: string; modelType: ModelType; style: ModelStyle; size: ModelSize; material: Material; color: ModelColor; addOns: AddOn[]; customText: string; customerNotes: string; calculatedPrice: number; }
