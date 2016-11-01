import chai from 'chai'
import chaiImmutable from 'chai-immutable';

import {Influence, Song} from '../src/core';

chai.use(chaiImmutable);

export let idA = 'id1';
export let idB = 'id2';

export let influenceA = Influence({
    from: Song({
        author: "Nick Drake",
        title: "Parasite"
    }), 
    to: Song({
        author: "Radiohead",
        title: "Subterranean Homesick Alien"
    })
})
export let influenceB = Influence({
    from: Song({
        author: "Jimi Hendrix",
        title: "You Got Me Floating"
    }), 
    to: Song({
        author: "Iggy Pop & The Stooges",
        title: "I Wanna Be Your Dog"
    })
})
export let influenceBwithVote = Influence({
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