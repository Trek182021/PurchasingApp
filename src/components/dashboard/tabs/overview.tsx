
import Analytics from "../cards/analytics"
import LatestRequests from "../cards/latest-requests"

const OverviewTab = () => {
  return (
    <div className="flex flex-col gap-6">
      <Analytics/>
      <LatestRequests/>
    </div>
  )
}

export default OverviewTab