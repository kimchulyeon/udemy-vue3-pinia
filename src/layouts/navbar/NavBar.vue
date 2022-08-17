<!-- 
1. RouterLink의 active-class
2. :class의 삼항연산자[]와 기본{}
-->
<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <!-- 로고 -->
        <div class="navbar-item">
          <div class="title">Note</div>
        </div>
        <!-- 로고 끝 -->

        <!-- 모바일 드롭다운 버튼 -->
        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="showMobileNav = !showMobileNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <!-- 모바일 드롭다운 버튼 끝 -->
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <!-- 메뉴 -->
        <div class="navbar-start">
          <RouterLink
            to="/"
            class="navbar-item"
            active-class="is-active"
            @click="showMobileNav = false"
          >
            Home
          </RouterLink>

          <RouterLink
            to="/stats"
            class="navbar-item"
            active-class="is-active"
            @click="showMobileNav = false"
          >
            Stats
          </RouterLink>
        </div>
        <!-- 메뉴 끝 -->
      </div>
    </div>
  </nav>
</template>

<script setup>
  /*
    imports
  */
  import { ref } from "@vue/reactivity";

  /*
    data
  */
  const showMobileNav = ref(true);
</script>

<style lang="scss" scoped></style>
