import { api } from "~/utils/api";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import React from "react";

export function BudgetItemBreadcrumb({
  currentItemPath,
}: {
  currentItemPath: string;
}) {
  const parentQuery = api.items.parents.useQuery({ path: currentItemPath });
  const parents = parentQuery.data ?? [];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Faktenlage</BreadcrumbLink>
        </BreadcrumbItem>
        {parents.length > 0 && <BreadcrumbSeparator />}
        {parents.map((parent, index) => (
          <React.Fragment key={parent.path}>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/item/${parent.path}`}>
                {parent.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < parents.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default function ComponentAsPage() {
  return null;
}
