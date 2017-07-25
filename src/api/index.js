export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) ?
        cb() : errorCb()
    }, 100)
  },
  api_user_get(params) {
    return axios.get(`${base}/user/add`, {
      params: params
    })
  }
}
