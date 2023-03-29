<template>
  <header class="header row justify-between">
    <div class="search">
      <img src="src/assets/search.svg" alt="intex-logo" class="search__icon">
      <input class="search__input" v-model="searchValue" placeholder="Поиск" />
    </div>
    <div class="tools">
      <ul class="tools__list row">
        <li class="tools__item">
          <q-select filled v-model="selectValue" :options="options" dense />
        </li>
        <li class="tools__item">
          <img src="src/assets/notification.svg" alt="Notifications">
        </li>
        <li class="tools__item">
          <img src="src/assets/profile.svg" alt="Notifications">
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

const options: string[] = ['Ru', 'En', 'Uz']
const searchValue: Ref<string> = ref('')
const selectValue: Ref<string> = ref(options[0])

</script>

<style lang="scss">
@import "src/css/quasar.variables.scss";

.header {
  width: 1187px;
  height: 80px;
  padding: 20px 30px;
  border-bottom: 1px solid #6666661c;
}

.search {
  position: relative;

  &__input {
    border-radius: 12px;
    width: 260px;
    padding: 10px 10px 10px 40px;
    background: $light;
    border: none;
  }

  &__input:focus {
    outline: none;
  }

  &__input::placeholder {
    color: #A8A8A8;
  }

  &__icon {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 14px;
    left: 15px;
  }
}

.tools {
  &__list {
    gap: 30px;
  }

  &__item {
    height: 40px;
    display: flex;
    cursor: pointer;
    border-radius: 8px;
    transition: background .3s ease;
  }

  &__item:hover,
  &__item:focus-within {
    background: rgba(0, 0, 0, 0.2) !important;
  }

  &__item:not(:first-child) {
    width: 40px;
    height: 40px;
    padding: 10px;
    background: $gray;
    border-radius: 50%;
  }
}

.q {
  &-menu {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 0px 2px rgba(0, 0, 0, 0.14), 0 0 1px -10px rgba(0, 0, 0, 0.12);
  }

  &-field__marginal {
    color: #109EF4;
  }

  &-field--filled &-field__control {
    padding: 1px 14px;
    background: $gray;
    border-radius: 8px;
  }

  &-field__control {
    color: transparent;
  }

  &-field--filled &-field__control::before {
    background: $gray;
    border-bottom: none;
    opacity: 0;
  }

  &-menu--square {
    border-radius: 8px;
  }

  &-item--active {
    color: #109EF4;
  }
}
</style>
