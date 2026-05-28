class ItemUtils {
    static getParentIds(itemId: number): number[] {
        const itemIdString = itemId.toString();
        const parentDigits = itemIdString.length;
        const parentIds: number[] = [];

        //entire budget is parent of all items
        parentIds.push(0);

        for (let i = 2; i <= parentDigits ; i+=2) {
            const parentIdString = itemIdString.substring(0, i);
            if (parentIdString.length > 0) {
                parentIds.push(Number(parentIdString));
            }
        }
        return parentIds;
    }
}

export default ItemUtils;