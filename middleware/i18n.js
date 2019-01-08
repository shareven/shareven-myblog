export default function ({ isHMR, app, req, store, route, params, error, redirect }) {
    // 设置浏览器默认语言
    // let browserLang = req && (req.headers['accept-language'].split(',')[0].indexOf('zh') == -1 && 'en' || 'zh') || store.state.browserLang
    // app.i18n.fallbackLocale = browserLang;
    // store.commit('setBrowserLang', browserLang);
    
    const defaultLocale =  app.i18n.fallbackLocale
    // If middleware is called from hot module replacement, ignore it
    if (isHMR) return
    // Get locale from params
    const locale = params.lang || defaultLocale
    if (store.state.locales.indexOf(locale) === -1) {
        return error({ message: 'This page could not be found.', statusCode: 404 })
    }
    // Set locale
    store.commit('SET_LANG', locale)
    app.i18n.locale = store.state.locale
    // If route is /<defaultLocale>/... -> redirect to /...
    if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
        const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
        const re = new RegExp(toReplace)
        return redirect(
            route.fullPath.replace(re, '/')
        )
    }
}
