// import axios from 'axios'
// import moment from 'moment'
// import lodash from 'lodash'

// declare module 'vue' {
//   interface ComponentCustomProperties {
//     $axios: typeof axios
//     $moment: typeof moment
//     $lodash: typeof lodash
//   }
// }

declare module '*.scss' {
  const scss: Record<string, string>
  export default scss
}
