// Libs
import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as any,
    width: 200,
    height: '100%',
    border: '1px solid grey',
  },
}

export default class UsersList extends React.PureComponent<any> {
  public render() {
    return <div style={styles.container}>Content</div>
  }
}
