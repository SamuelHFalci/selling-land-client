import VueCropper from 'vue-cropperjs'
import 'cropperjs/src/css/cropper.css'

export default ({ app, router, Vue }) => {
  Vue.prototype.$vueCropper = VueCropper
}
