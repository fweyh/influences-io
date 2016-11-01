import {Map, List, Record} from 'immutable';

export const INITIAL_STATE = Map();

export var Influence = Record({
  from: "Default Song 1", 
  to: "Default Song 2",
  votes: 0
});
export var Song = Record({
  author: "Default Author", 
  title: "Default Title"
});

export function setInfluences(state, influences) {
  // For convenience, we'll allow the input entries to be a regular JavaScript array (or actually anything iterable). It should still be an Immutable List by the time it's in the state tree:
  return state.set('influences', influences);
};

export function addInfluence(state, influenceId, influence) {
  return state.update('influences', influences => influences.set(influenceId, influence))
};

export function deleteInfluence(state, influenceId){
  return state.deleteIn(['influences', influenceId]);
}

export function vote(state, influenceId) {
  return state.updateIn(
    ['influences', influenceId, "votes"],
    votes => votes + 1
  );
};