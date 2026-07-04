class ItemUtils {
    static getIds(path: string): number[] {
        const segments = path.split('.').filter(segment => segment.length > 0);
        var pathIds: number[] = [];
        var currentItemId: string = "";
        for (const segment of segments) {
            if (isNaN(Number(segment))) {
                throw new Error(`Invalid path segment: ${segment}`);
            }
            currentItemId = currentItemId + segment;
            pathIds.push(Number(currentItemId));
        }
        return pathIds;
    }

    static getId(path: string): number {
        const id = path.replace(/\./g, '');
        return Number(id);
    }
}


export default ItemUtils;