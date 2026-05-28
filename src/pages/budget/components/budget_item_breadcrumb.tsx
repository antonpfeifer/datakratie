import { api } from "~/utils/api";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
import React from "react";

export function BudgetItemBreadcrumb({ childId }: { childId: number }) {
    const parentQuery = api.items.parents.useQuery({ query: childId });
    const parents = parentQuery.data ?? [];

    return (
        <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Haushalt</BreadcrumbLink>
    </BreadcrumbItem>
    {parents.length > 0 && <BreadcrumbSeparator />}
  {parents.map((parent, index) => (
    <React.Fragment key={parent.id}>
      <BreadcrumbItem>
        <BreadcrumbLink href={`/item/${parent.id}`}>{parent.label}</BreadcrumbLink>
      </BreadcrumbItem>
      {index < parents.length - 1 && <BreadcrumbSeparator />}
    </React.Fragment>
  ))}
  </BreadcrumbList>
</Breadcrumb>
    )
}
export default function ComponentAsPage() { return null; }
