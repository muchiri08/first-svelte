import { render, screen } from '@testing-library/svelte';
import type { ItemInterface } from '../../../models/items/Item.interface';
import component from './Item.component.svelte';

describe("Item.component: rendering", () => {
    it("renders an Item text correctly", () => {
        const item: ItemInterface = {
            id: 1,
            name: "Unit test item 1",
            selected: false
        };

        const testid = "unit-test-appearance-2";

        render(component, {
            testid,
            item
        });

        const liElement = screen.getByTestId(testid);

        expect(liElement).not.toBeNull();

        expect(liElement.innerHTML).toContain("Unit test item 1");
    })
})