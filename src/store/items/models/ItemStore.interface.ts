import * as SvelteStore from 'svelte/store';
import type { ItemInterface } from '../../../models/items/Item.interface';

export interface ItemsStoreActionsInterface {
    loadItems(): Promise<void>;
    toggleItemSelected(item: ItemInterface): Promise<void>;
}

export interface ItemsStoreGetterInterface {
    loading: SvelteStore.Readable<boolean>;
    items: SvelteStore.Readable<ItemInterface[]>;
}

export interface ItemsStoreInterface {
    actions: ItemsStoreActionsInterface;
    getters: ItemsStoreGetterInterface;
}