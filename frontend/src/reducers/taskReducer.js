import { ACTION_TYPES } from "../actions/taskActions"

export const taskReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.TASK_LIST_REQUEST:
            return {
                loading: true,
                error: false,
                tasks: []
            }
        case ACTION_TYPES.TASK_LIST_SUCCESS:
            return {
                loading: false,
                error: false,
                tasks: action.payload
            }
        case ACTION_TYPES.TASK_LIST_FAIL:
            return {
                loading: false,
                error: action.payload,
                // tasks: []
            }
        default:
            return state

    }
}
export const taskDetailReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.TASK_DETAIL_REQUEST:
            return {
                loading: true,
                // error: false,
                tasks: []
            }
        case ACTION_TYPES.TASK_DETAIL_SUCCESS:
            return {
                loading: false,
                // error: ,
                task: action.payload
            }
        case ACTION_TYPES.TASK_DETAIL_FAIL:
            return {
                loading: false,
                error: true,
                // tasks: []
            }
        default:
            return state

    }
}


// export const taskReducer = (state, action) => {
//     if(action.type === 'FETCH_START'){
//         return {
//             loading: true,
//             error: false,
//             tasks: []
//         }
//     } else if(action.type === 'FETCH_SUCCESS'){
//         return {
//             loading: false,
//             error: false,
//             tasks: action.payload
//         }
//     } else if(action.type === 'FETCH_ERROR'){
//         return {
//             loading: false,
//             error: true,
//             tasks: []
//         }
//     }

// }

// // export const taskReducer = (state = {tasks: []}, action) => {
// export const taskReducer = (state = {tasks: []}, action) => {
//     switch(action.type){
//         case FETCH_START:
//             return {loading: true, tasks: []}
            
//         case FETCH_SUCCESS:
//             return {
//                 loading: false,
//                 tasks: action.payload.tasks,
//                 error: false
//             }

//         case FETCH_ERROR:
//             return {loading: false, error: action.payload}

//         default:
//             return state
//     }
// }