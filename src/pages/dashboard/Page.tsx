import DashboardTabs from '@/components/dashboard/tabs'

const DashboardPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="header">
          <h1 className="h1-semibold">Dashboard</h1>
          <p className="text-muted-foreground">Create new purchase request for your team.</p>
      </div>
      <div>
        <DashboardTabs />
      </div>
    </div>
  )
}

export default DashboardPage