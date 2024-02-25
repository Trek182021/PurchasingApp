import { ColumnDef } from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export type Item = {
    id: string
    item_description: string;
    quantity: number;
    unit_price: number;
    total_amount: number;
    vendor: string;
    url: string;
    comment: string;
    has_file: boolean;
}

export const columns: ColumnDef<Item>[] = [
    {
        accessorKey: "item_description",
        header: "Item Description",
    },
    {
        accessorKey: "quantity",
        header: "Qty",
    },
    {
        accessorKey: "unit_price",
        header: "Unit Price",
    },
    {
        accessorKey: "total_amount",
        header: "Total Amount",
    },
    {
        accessorKey: "vendor",
        header: "Vendor",
    },
    {
        accessorKey: "url",
        header: "URL",
    },
    {
        accessorKey: "comment",
        header: "Comment",
    },
    {
        accessorKey: "has_file",
        header: "File",
        cell: ({ row }) => {
          return (
            <div className="flex items-center">
              {row.original.has_file ? (
                <img
                  src="/assets/icons/check.svg"
                  className="h-4 w-4 rounded-full" 
                 />
              ) : (
                <img
                  src="/assets/icons/x.svg"
                  className="h-6 w-6 rounded-full" 
                 />
              )}
            </div>
          )
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Attach file (pdf)
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit Item
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="mr-2 h-4 w-4 stroke-rose-600" />
                  Remove Item
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
    }
]