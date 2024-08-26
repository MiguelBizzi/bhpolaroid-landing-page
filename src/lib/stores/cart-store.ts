import { browser } from '$app/environment';
import type { Product } from '$lib/constants/products';
import { toast } from 'svelte-sonner';
import { writable } from 'svelte/store';

export interface CartProduct extends Product {
	quantity: number;
}

export enum CartStorageEnum {
	Cart = 'BhPolaroid:Cart'
}

export const cart = writable<CartProduct[]>([]);
export const cartSidebarOpen = writable<boolean>(false);

export const addToCart = (product: Product) => {
	cart.update((items) => {
		const existingItem = items.find((item) => item.name === product.name);
		let updatedCart: CartProduct[];

		if (existingItem) {
			updatedCart = items.map((item) =>
				item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
			);
		} else {
			updatedCart = [...items, { ...product, quantity: product?.minimum ?? 1 }];
		}

		if (browser) {
			localStorage.setItem(CartStorageEnum.Cart, JSON.stringify(updatedCart));
		}

		cartSidebarOpen.set(true);

		toast.success('Produto adicionado ao carrinho!');

		return updatedCart;
	});
};

export const removeFromCart = (productName: string) => {
	cart.update((items) => {
		const updatedCart = items.filter((item) => item.name !== productName);

		if (browser) {
			localStorage.setItem(CartStorageEnum.Cart, JSON.stringify(updatedCart));
		}

		return updatedCart;
	});
};

export const clearCart = () => {
	cart.set([]);

	if (browser) {
		localStorage.removeItem(CartStorageEnum.Cart);
	}
};
