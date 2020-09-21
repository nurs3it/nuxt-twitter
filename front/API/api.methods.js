import axios from "axios"

const base = 'https://jsonplaceholder.typicode.com'
export default {
  checkStatus: function (r) {
    if (r && r.status === 200) {
      return r;
    } else if (r && (r.status > 299 || r.status < 399)) {
      console.error("Auth error", r)
      return r;
    } else if (r && (r.status > 399 || r.status < 499)) {
      console.error("Client error", r)
      return r;
    } else {
      console.error("Server error", r)
      return r;
    }
  },
  get: function (service, data) {
    axios.get(`${base}/${service}`, data).then(r => {
      return this.checkStatus(r);
    })
  },
  post: function (service, data) {
    axios.post(`${base}/${service}`, data, "'Content-type': 'application/json; charset=UTF-8'").then(r => {
      return this.checkStatus(r);
    })
  },
  put: function (service, data) {
    axios.put(`${base}/${service}`, data, "'Content-type': 'application/json; charset=UTF-8'").then(r => {
      return this.checkStatus(r);
    })
  },
  delete: function (service, data) {
    axios.delete(`${base}/${service}`, data).then(r => {
      return this.checkStatus(r);
    })
  }
}
