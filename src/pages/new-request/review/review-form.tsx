import TeamInfoForm from '../team-info/team-info-form'
import ItemsForm from '../items/items-form'

const ReviewForm = () => {
  return (
    <div>
      <div>
        <h3 className="body-medium -mb-2 mt-6">Team Information</h3>
      </div>
      <TeamInfoForm isStatic={true}/>
      
      <div>
        <h3 className="body-medium -mb-2">Items</h3>
        <ItemsForm isStatic={true}/>
      </div>
    </div>
  )
}

export const submitRequest = () => {
  console.log('Submit Review')
}

export default ReviewForm