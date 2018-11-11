
export const selectOptions = (state) => state.chargen.options;

export const selectRaceOptions = (state) => selectOptions(state).races;
