import {
    TEST2
} from '../../actions/actionTypes';

function page2(state = {}, action) {
    switch (action.type) {
        case TEST2:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

export default page2;