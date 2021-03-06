export default function auth ({ next, store, to }) {
    let authenticated = store.getters['auth/authenticated'];
    if (authenticated) {
        return next({
            name: 'signin',
        })
    }

    return next()
}
