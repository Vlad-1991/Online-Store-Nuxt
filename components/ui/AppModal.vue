<template lang="pug">
  div
    div(class="modal-backdrop")
    div.modal
      h3.center(v-if="title") {{ title }}
      div.center.mb50
        slot
      div.center.mt10
        button.primary.btn(@click="returnToCatalog()" type="button") Ok
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const emit = defineEmits(['close'])
const props = defineProps<{title: string}>()

/* to close modal window and redirect to Catalog route */
let returnToCatalog = (): void => {
  emit('close')
  router.push({name: 'Catalog'})
}
</script>