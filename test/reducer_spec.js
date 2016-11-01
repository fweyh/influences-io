import {fromJS, Map} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';
import {idA, idB, influenceA, influenceB, influenceBwithVote} from './test_helper';

describe('reducer', () => {
    
    it('handles SET_INFLUENCES', () => {
        const initialState = Map();
        const action = {
            type: 'SET_INFLUENCES', 
            influences: Map({
                [idA]: influenceA, 
                [idB]: influenceB
            })
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            influences: {
                [idA]: influenceA, 
                [idB]: influenceB
            }
        }));
    });

    it('handles ADD_INFLUENCE', () => {
        const initialState = fromJS({
            influences: {
                [idA]: influenceA
            }
        });
        const action = {
            type: 'ADD_INFLUENCE',
            influenceId: idB,
            influence: influenceB 
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            influences: {
                [idA]: influenceA,
                [idB]: influenceB
            }
        }));
    });

    it('handles DELETE_INFLUENCE', () => {
        const initialState = fromJS({
            influences: {
                [idA]: influenceA,
                [idB]: influenceB
            }
        });
        const action = {
            type: 'DELETE_INFLUENCE',
            influenceId: idB,
            influence: influenceB
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            influences: {
                [idA]: influenceA
            }
        }));
    });

    it('handles VOTE', () => {
        const initialState = fromJS({
            influences: {
                [idA]: influenceA, 
                [idB]: influenceB
            }
        });
        const action = {
            type: 'VOTE',
            influenceId: idB
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            influences: {
                [idA]: influenceA, 
                [idB]: influenceBwithVote
            }
        }));
    });

    it('has an initial state', () => {
        const action = {
            type: 'SET_INFLUENCES', 
            influences: fromJS({
                [idA]: influenceA
            })
        };
        const nextState = reducer(undefined, action);
        
        expect(nextState).to.equal(
            fromJS({
                influences: {
                    [idA]: influenceA
                }
            })
        );
    });

});