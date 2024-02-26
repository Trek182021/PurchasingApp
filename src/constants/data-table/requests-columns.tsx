import RequestsTableHeader from "@/components/data-table/requests/requests-header"
import { formatDollar, formatPhoneNo } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { requestStatuses } from ".."
import { Requests } from "../schemas/requests-schema"

export const columns: ColumnDef<Requests>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <RequestsTableHeader column={column} title="Request Name"/>
        )
    },
    {
        accessorKey: "total_cost",
        header: ({ column }) => (
            <RequestsTableHeader column={column} title="Total Cost"/>
        ),
        cell: ({ row }) => (
            <div>
                {formatDollar(row.getValue('total_cost'))}
            </div>
        )
    },
    {
        accessorKey: "item_count",
        header: ({ column }) => (
            <RequestsTableHeader column={column} title="Item Count"/>
        ),
        cell: ({ row }) => (
            <span className="small-medium">{row.getValue('item_count')}</span>
        )

    },
    {
        accessorKey: "contact_no",
        header: ({ column }) => (
            <RequestsTableHeader column={column} title="Contact No"/>
        ),
        cell: ({ row }) => (
            <div>
                {formatPhoneNo(row.getValue('contact_no'))}
            </div>
        )
    },
    {
        accessorKey: "contact_email",
        header: ({ column }) => (
            <RequestsTableHeader column={column} title="Contact Email"/>
        )
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <RequestsTableHeader column={column} title="Status"/>
        ),
        cell: ({ row }) => {
            const status = requestStatuses.find((status) => status.value === row.getValue('status'))

            if (!status) return null

            return (
                <div className="flex gap-2">
                    { status.icon && (<status.icon className="h-4 w-4 stroke-muted-foreground"/>)}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    }
]
