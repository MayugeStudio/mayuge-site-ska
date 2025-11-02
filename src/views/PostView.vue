<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { marked } from 'marked'

  const route = useRoute()
  const html = ref('<p>Loading...</p>')

  onMounted(async () => {
    const res = await fetch(`/posts/${route.params.name}.md`)
    const text = await res.text()
    html.value = marked.parse(text)
  })
</script>

<template>
  <div class="prose mx-auto p-4" v-html="html"></div>
</template>

<style>
.prose {
  max-width: 800px;
  line-height: 1.8;
}
</style>
