import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const emptySearchQueriesRecoilState = {}

export const searchQueriesState = atom({
  key: 'searchQueriesState', // unique ID (with respect to other atoms/selectors)
  default: emptySearchQueriesRecoilState, // default value (aka initial value)
  effects: [persistAtom],
})
