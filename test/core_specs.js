import {List, Map, Record} from 'immutable';
import {expect} from 'chai';

import {addInfluence, setInfluences, Influence, Song, vote} from '../src/core';

var idA = 'id1';
var idB = 'id2';

let influenceA = new Influence({
    from: Song({
        author: "Nick Drake",
        title: "Parasite"
    }), 
    to: Song({
        author: "Radiohead",
        title: "Subterranean Homesick Alien"
    })
})
let influenceB = new Influence({
    from: Song({
        author: "Jimi Hendrix",
        title: "You Got Me Floating"
    }), 
    to: Song({
        author: "Iggy Pop & The Stooges",
        title: "I Wanna Be Your Dog"
    })
})
let influenceBwithVote = new Influence({
    from: Song({
        author: "Jimi Hendrix",
        title: "You Got Me Floating"
    }), 
    to: Song({
        author: "Iggy Pop & The Stooges",
        title: "I Wanna Be Your Dog"
    }),
    votes: 1
})

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

        it('adds the vote to the state for the correct influence', () => {
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