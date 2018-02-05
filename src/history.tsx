import createHistory from 'history/createBrowserHistory'
const history = createHistory({
  getUserConfirmation: cb
})
// const h = {
//   auth: beforeLunch,
//   ...history
// }
//
// function beforeLunch (rest: string) {
//   history.push(rest)
// }
function cb () {
  console.log('auth')
}

history.listen(function (...args: Array<any>) {
  history.push('/home')
})

export default history