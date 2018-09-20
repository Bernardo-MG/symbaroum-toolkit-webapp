
export const selectInfo = (state) => state.chargen.info;

export const selectCharacterName = (state) => selectInfo(state).characterName;

export const selectOccupation = (state) => selectInfo(state).occupation;

export const selectPlayerName = (state) => selectInfo(state).playerName;

export const selectQuote = (state) => selectInfo(state).quote;

export const selectRace = (state) => selectInfo(state).race;

export const selectShadow = (state) => selectInfo(state).shadow;
