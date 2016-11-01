import {setInfluences, addInfluence, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {
    case 'SET_INFLUENCES':
        return setInfluences(state, action.influences);
    case 'ADD_INFLUENCE':
        return addInfluence(state, action.influenceId, action.influence);
    case 'VOTE':
        return vote(state, action.influenceId);
    }
    // If the reducer doesn't recognize the action, it just returns the current state
    return state;
    
}