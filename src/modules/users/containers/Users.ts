// Redux
import { connect } from 'react-redux'

// Component
import UsersList from '../components/UsersList'

// Selectors
import { users$ } from '../selectors'

// Types
import { StoreState } from 'store/reducer'

const mapStateToProps = (state: StoreState) => ({
  users: users$(state),
})

export default connect(mapStateToProps)(UsersList as React.ComponentType<any>)
