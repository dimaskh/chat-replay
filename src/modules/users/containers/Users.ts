// Redux
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

// Component
import UsersList from '../components/UsersList'

// Selectors
import { users$ } from '../selectors'

// Types
import { StoreState } from 'store/reducer'

const mapStateToProps = (state: StoreState) => ({
  users: users$(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      // TODO: Add actions for users container
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList as React.ComponentType<any>)
