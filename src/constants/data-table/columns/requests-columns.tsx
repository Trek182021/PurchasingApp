import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Request>[] = [
    {
        accessoryKey: "request_name",
        header: "Name"
    }
]