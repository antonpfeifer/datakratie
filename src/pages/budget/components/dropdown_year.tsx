import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

import { api } from "~/utils/api";

export function DropdownMenuYears(
    { onSelect, currentYear }: { onSelect: (year: Date) => void, currentYear: Date }) {
    const yearsQuery = api.years.all.useQuery();
    const years = yearsQuery.data?.map((year) => year.date).sort((a, b) => a.getFullYear() + b.getFullYear())
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{currentYear.getFullYear()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        {years?.map((year) => 
                      <DropdownMenuItem key={year.getFullYear()} onSelect={() => onSelect(year)}>
            {year.getFullYear()}
          </DropdownMenuItem>
            
            )}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
