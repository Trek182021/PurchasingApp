import { DataTable } from "@/components/data-table/items-table"
import { columns } from "@/constants/data-table/columns/items-columns"
import { sampleItems1 } from "@/constants/fake-data/request-item"

const ItemsForm = ({ isStatic = false }: { isStatic?: boolean }) => {
 
  return (
    <div className="container py-6">
      <DataTable columns={columns} data={sampleItems1} isStatic={isStatic}/>
    </div>
  )
}

export const submitItems = () => {
  console.log("Submit Items Info")
}

export default ItemsForm