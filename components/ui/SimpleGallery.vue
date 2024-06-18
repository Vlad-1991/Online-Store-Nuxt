<template lang="pug">
  div(:id="galleryID" )
    a(
        v-for="(image, key) in imagesData"
        :key="key"
        :href="image.largeURL"
        :data-pswp-width="image.width"
        :data-pswp-height="image.height"
        target="_blank"
        rel="noreferrer")
      img(:src="imagesData[0].largeURL" v-if="key === 0" @load="$emit('imgLoaded')" :alt="name" width="500px" height="500px")
</template>

<!-- this component render beautiful gallery with one or many product images
 with UI to show next or previous image, to close image by mouse click or press escape -->
<script setup lang="ts">
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import {onMounted, onUnmounted} from "vue";
import type {imageType} from "@/utils/types/requestTypes";

const props = defineProps<{
  galleryID: string,
  name: string,
  images: [imageType]
}>()

const emit = defineEmits(['imgLoaded'])

let lightbox: (PhotoSwipeLightbox | null)

const imagesData = props.images


onMounted((): void => {
  if (!lightbox) {
    lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
  }
})

onUnmounted((): void => {
    if (lightbox) {
      lightbox.destroy();
      lightbox = null;
    }
  })
</script>