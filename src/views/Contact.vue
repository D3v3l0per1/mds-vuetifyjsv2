<template>
  <div>
    <LongPlainText :content="contact" />

    <LongPlainText :content="impressum" />
  </div>
</template>

<script>
import jsonData from '../data/contact.json'
import LongPlainText from '@/components/PageLayout/LongPlainText'

export default {
  data () {
    return {
      contact: jsonData.contact,
      impressum: jsonData.impressum
    }
  },
  components: {
    LongPlainText,
  },
  // methods: {
  //   scrollTop () {
  //     this.$vuetify.goTo(0, { 
  //       duration: 300,
  //       offset: 0,
  //       easing: 'easeInCubic'
  //     })
  //   }
  // },
  // mounted () {
  //   this.scrollTop()
  // }
}
</script>
