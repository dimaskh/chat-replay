// Redux
import { connect } from 'react-redux'

// Component
import Chat from '../components/Chat'

// Selectors
import { formattedMessages$ } from '../selectors'

// Types
import { StoreState } from 'store/reducer'

const mapStateToProps = (state: StoreState) => ({
  messages: formattedMessages$(state),
})

export default connect(mapStateToProps)(Chat as React.ComponentType<any>)
