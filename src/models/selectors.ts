import type { StoreApi, UseBoundStore } from 'zustand'

// 改进类型定义，使其更严格和清晰
type StateFromStore<S> = S extends { getState: () => infer T } ? T : never

type WithSelectors<S extends UseBoundStore<StoreApi<any>>> = S & {
  use: {
    [K in keyof StateFromStore<S>]: () => StateFromStore<S>[K]
  }
}
function createSelectors<S extends UseBoundStore<StoreApi<{}>>>(_store: S) {
  const store = _store as WithSelectors<typeof _store>
  store.use = Object.create(null)
  const state = store.getState()
  for (const key of Object.keys(state) as Array<keyof typeof state>) {
    store.use[key] = () => store(s => s[key])
  }

  return store
}

export default createSelectors
