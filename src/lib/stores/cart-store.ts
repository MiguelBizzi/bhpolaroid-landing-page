import { writable } from 'svelte/store';

export const cart = writable([]);

export const addToCart = (product) => {
    cart.update((items) => {
        const existingItem = items.find(item => item.id === product.id);
        if (existingItem) {
            return items.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...items, { ...product, quantity: 1 }];
        }
    });
};

export const removeFromCart = (productId) => {
    cart.update((items) => {
        return items.filter(item => item.id !== productId);
    });
};

export const clearCart = () => {
    cart.set([]);
};
