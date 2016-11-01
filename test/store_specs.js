import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import MakeStore from '../src/store';
import {idA, idB, influenceA, influenceB, influenceBwithVote} from './test_helper';

describe('store', () => {

    it('is a Redux store configured with the correct reducer', () => {
        const store = MakeStore();
        expect(store.getState()).to.equal(Map());

        store.dispatch({
            type: 'SET_INFLUENCES',
            influences: fromJS({
                [idA]: influenceA,
                [idB]: influenceB
            })
        });
        store.dispatch({
            type: 'VOTE',
            influenceId: idB
        });
        expect(store.getState()).to.equal(fromJS({
            influences: {
                [idA]: influenceA,
                [idB]: influenceBwithVote
            }
        }));
    });

});