<template lang="pug">
  div.wrapper
    TheNavbar
    div.container.with-nav.mb50
      TheBreadCrumbs.breadcrumbs.mt20
      ErrorMessage.mt20(v-if="UiStore.getErrorMessage")
      NuxtPage
    TheFooter
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/CartStore";
import { useUiStore } from "~/stores/UiStore";
import TheNavbar from "~/components/TheNavbar.vue";
import TheBreadCrumbs from "~/components/ui/TheBreadCrumbs.vue";
import ErrorMessage from "~/components/ui/ErrorMessage.vue";
import TheFooter from "~/components/ui/TheFooter.vue";
import {load} from "~/services/api/requests";
import type {productWithId} from "~/utils/types/requestTypes";

const UiStore = useUiStore();
const CartStore = useCartStore();

await cartInit();
let response;

/* loading categories from server and store them to UiStore to reuse in other child component with Left Sidebar */
try {
  response = await load('/categories.json');
  response.sort((a: productWithId, b: productWithId) => Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1);
  console.log(response)
  UiStore.pushCategories(response);
} catch (e: string | unknown) {
  UiStore.setErrorMessage(e.message);
}

let categories = UiStore.getAllCategories;

/* to get all products, putted by user to cart earlier, from local storage to Cart store */
async function cartInit() {
  CartStore.getCart();
}
</script>
