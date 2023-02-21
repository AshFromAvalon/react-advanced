import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language, Theme } from 'core/enum/app';

export interface AppState {
   theme: Theme;
   language: Language;
}

const INITIAL_STATE = {
   theme: Theme.Light,
   language: Language.FR,
} as AppState;

const appSlice = createSlice({
   name: 'app',
   initialState: INITIAL_STATE,
   reducers: {
      setTheme: (state, action: PayloadAction<Theme>) => {
         state.theme = action.payload;
      },
      setLanguage: (state, action: PayloadAction<Language>) => {
         state.language = action.payload;
      },
   },
});

export const { setTheme, setLanguage } = appSlice.actions;

export default appSlice.reducer;
