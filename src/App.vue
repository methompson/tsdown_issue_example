<template>
  <h1>{{ t("hello") }}</h1>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<i18n>
  {
    "en": {
      "hello": "hello",
    },
    "es": {
      "hello": "hola",
    }
  }
</i18n>

<style scoped></style>
