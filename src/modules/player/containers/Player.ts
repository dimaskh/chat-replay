// Redux
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

// Component
import Player from '../components/Player'

// Actions
import { clearData, replayRecord } from '../actions'

// Selectors
import { isFinished$, isPlaying$ } from '../selectors'

// Types
import { StoreState } from 'store/reducer'

const mapStateToProps = (state: StoreState) => ({
  isFinished: isFinished$(state),
  isPlaying: isPlaying$(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      clearData,
      replayRecord,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player as React.ComponentType<any>)
