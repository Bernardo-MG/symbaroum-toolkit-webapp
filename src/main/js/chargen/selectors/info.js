
export const selectInfo = (state) => state.chargen.info;

export const selectCharacterName = (state) => selectInfo(state).characterName;

export const selectPlayerName = (state) => selectInfo(state).playerName;

export const selectShadow = (state) => selectInfo(state).shadow;
