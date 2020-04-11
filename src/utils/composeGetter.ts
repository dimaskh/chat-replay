// Types
export type PartialWithProp<T extends any, K extends string> = {
  [P in K]: T[P]
}

export type GetProperty<P extends string> = <T, O extends PartialWithProp<T, P>>(o: O) => O[P]

export default <P extends string>(prop: P): GetProperty<P> => {
  return <T, O extends PartialWithProp<T, P>>(o: O, defaultValue?: any): O[P] => {
    return o?.[prop] ?? defaultValue
  }
}
