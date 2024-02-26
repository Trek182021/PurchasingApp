import { z } from "zod"
import { RequestsTable } from "@/components/data-table/requests/requests-table"
import { columns } from "@/constants/data-table/requests-columns"
import { Requests, requestsSchema } from "@/constants/schemas/requests-schema"
import { requests } from "@/constants/fake-data/seeds/requests"

// Simulate a database read for tasks.
function getRequests(): Requests[] {
  const data = requests

  return z.array(requestsSchema).parse(data)
}

export default function RequestsPage() {
  const requests = getRequests();

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="header">
            <h1 className="h1-semibold">All Requests</h1>
            <p className="text-muted-foreground">Here's a list of all your team's requests.</p>
        </div>
        <div className="w-full">
          <RequestsTable data={requests} columns={columns}  />
        </div>
      </div>
    </>
  )
}

