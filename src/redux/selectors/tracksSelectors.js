import { createSelector } from 'reselect'

export const getTracks = createSelector(
    state => state.tracks.tracks.tracks,
    tracks => tracks
)

export const getIsLoading = createSelector(
    state => state.tracks.isLoading,
    isLoading => isLoading
)
