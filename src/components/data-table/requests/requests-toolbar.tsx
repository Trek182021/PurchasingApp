
import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table"
import { DataTableFacetedFilter } from "./requests-faceted-filter";
import { requestStatuses } from "@/constants";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface DataTableToolbarProps<TData>{
    table: Table<TData>;
}
export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0
    return (
        <div className="flex flex-row justify-between">
            <div className="flex gap-3 items-center">
                <Input 
                    type="text" 
                    placeholder="Filter requests by name..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => {
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }}
                />
                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")!}
                        title="Status"
                        options={requestStatuses}
                    />
                )}
                {isFiltered && (
                <Button
                    variant="ghost"
                    onClick={() => table.resetColumnFilters()}
                    className="h-8 px-2 lg:px-3"
                >
                    Reset
                    <X className="ml-2 h-4 w-4" />
                </Button>
                )}
            </div>
        </div>
    )
}