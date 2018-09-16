
export const selectInfo = (state) => state.chargen.info;

export const selectPlayerName = (state) => selectInfo(state).playerName;
