import { BudgetDataPoint } from "@/data/budget";

export interface TreeNode extends BudgetDataPoint {
  children?: TreeNode[];
  size: number; // value for treemap
}

export function buildTree(data: BudgetDataPoint[], parentId: string | null): TreeNode[] {
  return data
    .filter((d) => d.parentId === parentId)
    .map((d) => {
      const children = buildTree(data, d.id);
      return {
        ...d,
        children: children.length > 0 ? children : undefined,
        size: d.value,
      };
    });
}
