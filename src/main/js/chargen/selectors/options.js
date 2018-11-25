
export const selectOptions = (state) => state.chargen.options;

export const selectAbilityOptions = (state) => selectOptions(state).abilities;

export const selectRaceOptions = (state) => selectOptions(state).races;
