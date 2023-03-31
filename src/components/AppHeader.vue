<!-- <template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <q-header>
      <q-toolbar class="bg-white text-black">
        <q-toolbar-title class="q-my-md">
          <q-input model-value="" dense style="width: 300px" bg-color="grey-3" standout label="ksdcns">
            <template v-slot:prepend>
              <q-icon color="blue" name="search" />
            </template>

          </q-input>
        </q-toolbar-title>
      </q-toolbar>
      <q-separator class="bg-grey-4" />
      <div class="q-pl-sm q-pa-sm text-grey bg-white">
        <q-icon name="home" color="blue" />
      </div>
    </q-header>
    <q-drawer show-if-above>
      <q-list>
        <q-toolbar header class="q-my-sm" style="margin-top: 13px">
          <q-toolbar-title class="text-blue text-weight-bolder" style="font-size:25px ">INTEX-MARKET</q-toolbar-title>
        </q-toolbar>
        <q-separator inset class="q-mb-md" />
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

import EssentialLink from 'components/EssentialLink.vue'
interface EssentialLinkProps {
  title: string;
  caption?: string;
  icon?: string;
  link?: string;
}
const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Продукты',
    icon: '',
    link: 'https://quasar.dev'
  },
  {
    title: 'Заказы',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Обратный связ',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Пользователи',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Настройки сайта',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Выйти',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]
</script>

<style ></style> -->

<template>
  <q-header class="header row justify-between bg-white absolute-top-left">
    <div class="search">
      <q-img src="/src/assets/search.svg" alt="intex-logo" class="search__icon" />
      <input class="search__input" v-model="searchValue" placeholder="Поиск" />
    </div>
    <div class="tools">
      <q-list class="tools__list row">
        <q-item class="tools__item" dense>
          <q-select filled v-model="selectValue" :options="options" dense />
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
