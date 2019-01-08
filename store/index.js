export const state= () =>({
  locales:['en','cn'],
  locale:'en'
})

export const mutations = {
  SET_LANG(state,locale){
      if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
      }
  }
}
