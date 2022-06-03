import * as types from './types'

export const reducer = (state, action) => {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return { ...state, value: 'mudou!!!' }

        default:
            return { ...state }
    }
}