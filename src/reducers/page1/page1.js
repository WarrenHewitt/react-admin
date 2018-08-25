import {
    PAGE1
} from '../../actions/actionTypes';

function page1(state = {}, action) {
    switch (action.type) {
        case PAGE1:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

export default page1;