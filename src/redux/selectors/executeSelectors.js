import { createSelector } from 'reselect'

export const getIsLoading = createSelector(
    (state) => state.execute.isLoading,
    (isLoading) => isLoading
)

export const getExecute = createSelector(
    (state, id) => state.execute.execute[id],
    (execute) => execute
)
