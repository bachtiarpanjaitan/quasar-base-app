import * as Role from '../constants/role'
export default function auth({ next, store }) {
  let me = store.getters['auth/getMe']
  if (me != null) {
    if(me.role != undefined && me.role === Role.ADMIN) return next()
  }
  return next('/auth/login')
}
