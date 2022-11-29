export function getCartFromStorage() {
  return JSON.parse(localStorage.getItem('order'))
}
export function updateCartFromLocalStorage(items) {
  return localStorage.setItem('order', JSON.stringify(items))
}
