import * as types from '../action-types';

let initState={
    title:'',
    list:[

    ]
};

export default function (state = initState, action) {
    switch (action.type){
        case types.CLASS_IFCATION:
            return {...state,...action.payload};
        case types.List_CLEAR:
            return{
                ...state,
                bazaarlist:action.payload
            }
        default:
            return state;
    }
}