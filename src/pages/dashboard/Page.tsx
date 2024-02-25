import DashboardTabs from '@/components/dashboard/tabs'

const DashboardPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="header">
          <h1 className="h1-semibold">Dashboard</h1>
      </div>
      <div className="w-full">
        <DashboardTabs />
      </div>
    </div>
  )
}

export default DashboardPage