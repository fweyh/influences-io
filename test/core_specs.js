import {List, Map, Record} from 'immutable';
import {expect} from 'chai';

import {idA, idB, influenceA, influenceB, influenceBwithVote} from './test_helper';
import {addInfluence, setInfluences, Influence, Song, vote} from '../src/core';

describe('Application logic', () => {

    describe('setInfluences', () => {
        
        it('set the influence to the state', () => {
            const state = Map();
            const influences = Map({
                [idA]: influenceA, 
                [idB]: influenceB
            });
            const nextState = setInfluences(state, influences);
            expect(nextState).to.equal(
                Map({
                    influences: Map({
                        [idA]: influenceA, 
                        [idB]: influenceB
                    })
                })
            );
        });

    });

    describe('addInfluence', () => {
        
        it('adds the influence to the state', () => {
            const state = Map({
                influences: Map({
                    [idA]: influenceA
                })
            });
            const nextState = addInfluence(state, idB, influenceB);
            expect(nextState).to.equal(
                Map({
                    influences: Map({
                        [idA]: influenceA, 
                        [idB]: influenceB
                    })
                })
            );
        });

    });

    describe('vote', () => {

        it('adds the vote to the state', () => {
            const state = Map({
                influences: Map({
                    [idA]: influenceA, 
                    [idB]: influenceB
                })
            });
            const influenceId = idB;
            const nextState = vote(state, influenceId);
            expect(nextState).to.equal(
                Map({
                    influences: Map({
                        [idA]: influenceA, 
                        [idB]: influenceBwithVote
                    })
                })
            );   
        });

    });

});