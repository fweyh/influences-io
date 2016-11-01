import {fromJS, List, Map, Record} from 'immutable';
import {expect} from 'chai';

import {idA, idB, influenceA, influenceB, influenceBwithVote} from './test_helper';
import {addInfluence, deleteInfluence, setInfluences, Influence, Song, vote} from '../src/core';

describe('Application logic', () => {

    describe('setInfluences', () => {
        
        it('set the influence to the state', () => {
            const state = Map();
            const influences = fromJS({
                [idA]: influenceA, 
                [idB]: influenceB
            });
            const nextState = setInfluences(state, influences);
            expect(nextState).to.equal(fromJS({
                influences: {
                    [idA]: influenceA, 
                    [idB]: influenceB
                }
            }));
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
            expect(nextState).to.equal(fromJS({
                influences: {
                    [idA]: influenceA, 
                    [idB]: influenceB
                }
            }));
        });

    });

    describe('deleteInfluence', () =>{

        it('removes the influence from the state', () => {
            const state = fromJS({
                influences: {
                    [idA]: influenceA, 
                    [idB]: influenceB
                }
            });
            const influenceId = idB;
            const nextState = deleteInfluence(state, influenceId);
            expect(nextState).to.equal(fromJS({
                influences: {
                    [idA]: influenceA
                }
            }));
        });

    });

    describe('vote', () => {

        it('adds the vote to the state', () => {
            const state = fromJS({
                influences: {
                    [idA]: influenceA, 
                    [idB]: influenceB
                }
            });
            const influenceId = idB;
            const nextState = vote(state, influenceId);
            expect(nextState).to.equal(fromJS({
                influences: {
                    [idA]: influenceA, 
                    [idB]: influenceBwithVote
                }
            }));   
        });

    });

});