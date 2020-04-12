// Redux
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

// Component
import Player from '../components/Player'

// Actions
import { replayRecord } from '../actions'

// Types
import { PlayerState } from '../reducer'

const mapStateToProps = (state: PlayerState) => ({
  url: '',
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      replayRecord,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player as React.ComponentType<any>)
