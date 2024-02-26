import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Column } from "@tanstack/react-table"
import { ChevronsUpDown, ArrowDown, ArrowUp, EyeOff } from "lucide-react"

interface RequestsTableHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export default function RequestsTableHeader<TData, TValue>({
  column,
  title,
}: RequestsTableHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div>{title}</div>
  }
  
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost"
              className="-ml-4 h-8 data-[state=open]:bg-accent"
            >
              <span>{title}</span>
              { column.getIsSorted() === "desc" ?
                <ArrowDown/> :
                column.getIsSorted() === "asc" ?
                <ArrowUp/> : <ChevronsUpDown />
              }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}