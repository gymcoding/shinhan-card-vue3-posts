<template>
  <div>
    <h2>게시글 상세</h2>
    <hr class="my-4" />
    <p>params: {{ $route.params.id }}</p>
    <p>query: {{ $route.query }}</p>
    <p>hash: {{ $route.hash }}</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
