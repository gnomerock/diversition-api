// In-memory store for mock data

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface User {
    id: number;
    name: string;
}

export interface Review {
    id: number;
    text: string;
    userId: number;
    productId: number;
    createdAt: string;
}

// Mock Data
export const users: User[] = [
    { id: 1, name: "john doe" },
    { id: 2, name: "jane doe" },
];

export const products: Product[] = [
    { id: 1, name: "Sun Cream AAA", description: "Sun Cream AAA", price: 125 },
    { id: 2, name: "Roll On BB", description: "roll on BB for men", price: 95 },
    { id: 3, name: "Cold Powder Protex", description: "Protex cold powder 500g", price: 80 },
];

// Seed some reviews
export const reviews: Review[] = [
    { id: 1, text: "nice product", userId: 1, productId: 1, createdAt: "2026-01-14T14:00:00" },
    { id: 2, text: "worth price", userId: 2, productId: 1, createdAt: "2026-01-14T15:00:00" },
];

let nextReviewId = 3;

export const store = {
    getProducts: () => products,
    getProduct: (id: number) => products.find(p => p.id === id),
    
    getReviewsByProduct: (productId: number) => {
        return reviews.filter(r => r.productId === productId).map(r => ({
            ...r,
            user: users.find(u => u.id === r.userId)
        }));
    },
    
    addReview: (productId: number, text: string, userId: number = 1) => {
        const review: Review = {
            id: nextReviewId++,
            text,
            userId,
            productId,
            createdAt: new Date().toISOString()
        };
        reviews.push(review);
        return review;
    },
    
    updateReview: (id: number, text: string) => {
        const review = reviews.find(r => r.id === id);
        if (review) {
            review.text = text;
            return true;
        }
        return false;
    },
    
    deleteReview: (id: number) => {
        const index = reviews.findIndex(r => r.id === id);
        if (index !== -1) {
            reviews.splice(index, 1);
            return true;
        }
        return false;
    }
};
