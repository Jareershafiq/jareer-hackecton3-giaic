// src/types/index.ts
export interface FoodItem {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  image?: {
    asset: {
      url: string;
    };
  };
  description: string;
  available: boolean;
  quantity?: number;
}
