import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

export const increment = ({commit}) => {
  commit('INCREMENT')
}
export const decrement = ({commit}) => {
  commit('DECREMENT')
}

export const incrementAsync = ({commit}) => {
  setTimeout(() => {
    commit('increment')
  }, 1000)

  setInterval(() => {
    trace('每隔1秒钟我就会显示一次')
  }, 1000)
}
