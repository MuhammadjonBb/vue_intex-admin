<template>
  <div>
    <q-header class="header row justify-between bg-white absolute-top-left">
      <div class="search">
        <q-img src="/src/assets/search.svg" alt="intex-logo" class="search__icon" />
        <input class="search__input" v-model="searchValue" placeholder="Поиск" />
      </div>
      <div class="tools">
        <q-list class="tools__list row">
          <q-item class="tools__item" dense>
            <q-select filled v-model="selectValue" :options="options" dense>
              <template v-slot:prepend>
                <q-icon name="language" />
              </template>
            </q-select>
          </q-item>
          <q-item class="tools__item" dense>
            <q-img src="src/assets/notification.svg" alt="Notifications" />
          </q-item>
          <q-item class="tools__item" dense>
            <q-img src="src/assets/profile.svg" alt="Notifications" />
          </q-item>
        </q-list>
      </div>
    </q-header>
    <q-toolbar dense class="text-grey-6">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home"></q-breadcrumbs-el>
        <q-breadcrumbs-el>Продукты</q-breadcrumbs-el>
      </q-breadcrumbs>
    </q-toolbar>
  </div>
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
  max-width: 1187px;
  position: static;
  width: 100%;
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

  &__item:hover:not(:first-child),
  &__item:focus-within:not(:first-child) {
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
