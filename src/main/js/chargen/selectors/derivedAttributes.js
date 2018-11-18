
export const selectDerivedAttributes = (state) => state.chargen.derivedAttributes;

export const selectCorruptionThreshold = (state) => selectDerivedAttributes(state).corruptionThreshold;

export const selectDefense = (state) => selectDerivedAttributes(state).defense;

export const selectPainThreshold = (state) => selectDerivedAttributes(state).painThreshold;

export const selectThoughness = (state) => selectDerivedAttributes(state).thoughness;
