<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="$router.push('/about')">
      About 으로 이동
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
