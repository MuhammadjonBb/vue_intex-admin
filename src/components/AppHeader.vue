<template>
  <q-header class="header row justify-between bg-white absolute-top-right" style="padding-bottom: 0;">
    <div class="search">
      <q-img src="/src/assets/search.svg" alt="intex-logo" class="search__icon" />
      <input class="search__input" v-model="searchValue" placeholder="Поиск" />
    </div>
    <div class="tools">
      <q-list class="tools__list row">
        <q-item class="tools__item" dense>
          <q-select borderless class="bg-grey-2 q-px-md q-pb-xs" style="border-radius: 12px;" v-model="selectValue"
            :options="options" dense>
            <template v-slot:prepend>
              <q-icon name="language" />
            </template>
          </q-select>
        </q-item>
        <q-item class="tools__item" dense>
          <q-avatar icon="notifications" dense color="grey-3" text-color="grey-8" size="40px" />
          <!-- <q-img src="/src/assets/notification.svg" alt="Notifications" /> -->
        </q-item>
        <q-item class="tools__item" dense>
          <q-avatar icon="notifications" dense color="grey-3" text-color="grey-8" size="40px" />
          <!-- <q-img src="/src/assets/profile.svg" alt="Notifications" /> -->
        </q-item>
      </q-list>
    </div>

    <q-toolbar dense class="text-grey-6 q-mt-md" style="border-top: 1px solid #6666661c;">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home"></q-breadcrumbs-el>
        <q-breadcrumbs-el>Продукты</q-breadcrumbs-el>
      </q-breadcrumbs>
    </q-toolbar>
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
  padding: 20px 30px;
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
</style>
