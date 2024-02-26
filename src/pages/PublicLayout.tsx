import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div className="w-full flex justify-center items-center">
        <div className="lg:w-2xl rounded-md shadow-md m-24 px-6 py-12">
            <div className="flex flex-col gap-4">
                <img 
                    src="/assets/images/logo-black.svg" 
                    alt="logo"
                    width={429}
                    height={77}
                />
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default PublicLayout