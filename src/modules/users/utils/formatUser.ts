// Constants
import { PROP_USERNAME, PROP_USER_NAME } from 'models/users/constants'

// Types
import { User } from 'models/users/types'

export default function formatUser(user: User): User {
  const { [PROP_USER_NAME]: validName } = user

  if (validName && validName.length) {
    return user
  }

  const { [PROP_USERNAME]: username = '', ...restUser } = user

  return {
    ...restUser,
    [PROP_USER_NAME]: username,
  }
}
