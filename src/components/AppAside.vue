<template>
  <aside class="aside column">
    <img src="/src/assets/intex-logo.svg" alt="Logo" class="aside__logo">
    <q-list>
      <q-expansion-item expand-icon-class="text-primary" label="Продукты" icon="summarize"
        header-class="text-primary q-pl-lg q-py-md" class="aside__products-parent text-weight-medium"
        :class="isPageActive('/products')">
        <q-list>

          <q-item clickable :active="true" active-class="text-primary">
            <q-item-section class="q-pl-lg items-center no-wrap aside__products-item items-row-start"
              :class="isPageActive('/products/list')">
              <q-icon name="circle" color="primary" class="q-mr-md products-icon" />
              <router-link class="text-weight-medium aside__products-link" to="/products/list">
                Список продуктов
              </router-link>
            </q-item-section>
          </q-item>

          <q-item clickable :active="true" active-class="text-primary">
            <q-item-section class="q-pl-lg items-center no-wrap aside__products-item items-row-start"
              :class="isPageActive('/products/categories')">
              <q-icon name="circle" color="primary" class="q-mr-md products-icon" />
              <router-link class="text-weight-medium aside__products-link" to="/products/categories">
                Категории
              </router-link>
            </q-item-section>
          </q-item>

          <q-item clickable :active="true" active-class="text-primary">
            <q-item-section class="q-pl-lg items-center no-wrap aside__products-item items-row-start"
              :class="isPageActive('/products/attributes')">
              <q-icon name="circle" color="primary" class="q-mr-md products-icon" />
              <router-link class="text-weight-medium aside__products-link" to="/products/attributes">
                Атрибуты
              </router-link>
            </q-item-section>
          </q-item>

        </q-list>
      </q-expansion-item>

      <q-item clickable class="items-center aside__item q-pl-lg q-py-md" :active="true" active-class="text-primary"
        :class="isPageActive('/orders/')">
        <q-item-section class="items-center items-row-start">
          <q-icon color="primary" name="email" size="24px" class="q-mr-md" />
          <router-link class="aside__link text-primary text-weight-medium" to="/orders/">
            Заказы
          </router-link>
        </q-item-section>
      </q-item>

      <q-item clickable class="items-center aside__item q-pl-lg q-py-md" :active="true" active-class="text-primary"
        :class="isPageActive('/feedback/')">
        <q-item-section class="items-center items-row-start">
          <q-icon color="primary" name="phone" size="24px" class="q-mr-md" />
          <router-link class="aside__link text-primary text-weight-medium" to="/feedback/">
            Обратная связь
          </router-link>
        </q-item-section>
      </q-item>

      <q-item clickable class="items-center aside__item q-pl-lg q-py-md" :active="true" active-class="text-primary"
        :class="isPageActive('/users/')">
        <q-item-section class="items-center items-row-start">
          <q-icon color="primary" name="account_circle" size="24px" class="q-mr-md" />
          <router-link class="aside__link text-primary text-weight-medium" to="/users/">
            Пользователи
          </router-link>
        </q-item-section>
      </q-item>

      <q-item clickable class="items-center aside__item q-pl-lg q-py-md" :active="true" active-class="text-primary"
        :class="isPageActive('/settings/')">
        <q-item-section class="items-center items-row-start">
          <q-icon color="primary" name="settings" size="24px" class="q-mr-md" />
          <router-link class="aside__link text-primary text-weight-medium" to="/settings/">
            Настройки сайта
          </router-link>
        </q-item-section>
      </q-item>

      <q-item clickable class="items-center aside__item q-pl-lg q-py-md" :active="true" active-class="text-primary"
        :class="isPageActive('/exit/')">
        <q-item-section class="items-center items-row-start">
          <q-icon color="primary" name="logout" size="24px" class="q-mr-md" />
          <router-link class="aside__link text-primary text-weight-medium" to="/exit/">
            Выйти
          </router-link>
        </q-item-section>
      </q-item>
      <q-item class="items-center q-pl-lg q-py-md" style="position: fixed; bottom: 0;">
        <q-item-section class="column text-weight-medium">
          <span class="text-dark">
            Developed by
          </span>
          <a href="https://supportsolution.uz/" target="_blank" rel="noopener noreferrer" class="text-primary">
            Support IT Solution
          </a>
        </q-item-section>
      </q-item>
    </q-list>
  </aside>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// eslint-disable-next-line space-before-function-paren
function isPageActive(page: string) {
  if (route.path.includes(page)) {
    return 'page-active'
  }
}
</script>

<style lang="scss">
.aside {
  padding: 30px 0;

  &__logo {
    align-self: start;
    padding: 0 40px 32px 0;
    margin-left: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid #6666661c;
  }

  &__products-parent {
    filter: grayscale(1);
  }

  &__products-link {
    color: #B9B9B9;
  }

  &__item {
    filter: grayscale(1);
    align-items: center;
    transition: all .3s ease;
  }

  &__item:hover {
    filter: grayscale(0);
  }

  &__products-parent:hover {
    filter: grayscale(0);
  }

  &__products-item:hover &__products-link {
    color: #109EF4;
  }

  &__products-item:hover .products-icon {
    opacity: 1;
  }
}

.products-icon {
  opacity: 0;
  transition: all .3s ease;
}

.items-row-start {
  flex-direction: row;
  justify-content: start;
}

.page-active {
  filter: grayscale(0) !important;
  background-color: #109df416;
}
</style>
