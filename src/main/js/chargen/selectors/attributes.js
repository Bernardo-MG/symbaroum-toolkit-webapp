
export const selectAttributes = (state) => state.builder.assets;

export const selectAccurate = (state) => selectAttributes(state).accurate;

export const selectCunning = (state) => selectAttributes(state).cunning;

export const selectDiscreet = (state) => selectAttributes(state).discreet;

export const selectPersuasive = (state) => selectAttributes(state).persuasive;

export const selectQuick = (state) => selectAttributes(state).quick;

export const selectResolute = (state) => selectAttributes(state).resolute;

export const selectStrong = (state) => selectAttributes(state).strong;

export const selectVigilant = (state) => selectAttributes(state).vigilant;
