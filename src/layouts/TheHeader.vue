<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          GYM CODING
          {{ user?.username }}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link" active-class="active">
                Home
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link" active-class="active">
                About
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/posts" class="nav-link" active-class="active">
                게시글
              </RouterLink>
            </li>
          </ul>
          <div class="d-flex">
            <button class="btn btn-outline-light" type="button" @click="goPage">
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const goPage = () => {
  router.push({ name: 'PostCreate' });
};

const { user } = storeToRefs(useAuthStore());
</script>

<style lang="scss" scoped></style>
