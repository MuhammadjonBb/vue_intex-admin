<template>
  <aside class="aside column">
    <img src="/src/assets/intex-logo.svg" alt="Logo" class="aside__logo">
    <ul class="aside__list">
      <li class="aside__item row" @click="onProductsClick">
        <img src="/src/assets/products.svg" alt="orders" class="aside__item-icon">
        Products
        <img src="/src/assets/dropdown-arrow.svg" alt=">" class="dropdown-icon"
          :style="{ 'transform': `rotate(${transformValue ? '90deg' : 0})` }">
        <ul class="aside__products-list"
          :style="{ 'opacity': Number(!!transformValue), 'visibility': !!transformValue ? 'visible' : 'hidden' }">
          <li class="aside__products-item">
            <router-link class="aside__products-link" to="/product-list/">Список продуктов</router-link>
          </li>
          <li class="aside__products-item">
            <router-link class="aside__products-link" to="/categories/">Категории</router-link>
          </li>
          <li class="aside__products-item">
            <router-link class="aside__products-link" to="/attributes/">Атрибуты</router-link>
          </li>
        </ul>
      </li>
      <li class="list-dropdown" :style="{ 'transform': `translateY(${transformValue}px)` }">
        <ul>
          <li class="aside__item row">
            <img src="/src/assets/orders.svg" alt="orders" class="aside__item-icon">
            <router-link class="aside__link" to="/orders/">Заказы</router-link>
          </li>
          <li class="aside__item row">
            <img src="/src/assets/feedback.svg" alt="feedback" class="aside__item-icon">
            <router-link class="aside__link" to="/feedback/">Обратная связь</router-link>
          </li>
          <li class="aside__item row">
            <img src="/src/assets/users.svg" alt="users" class="aside__item-icon">
            <router-link class="aside__link" to="/users/">Пользователи</router-link>
          </li>
          <li class="aside__item row">
            <img src="/src/assets/settings.svg" alt="settings" class="aside__item-icon">
            <router-link class="aside__link" to="/setting/">Настройки сайта</router-link>
          </li>
          <li class="aside__item row">
            <img src="/src/assets/exit.svg" alt="exit" class="aside__item-icon">
            <router-link class="aside__link" to="/exit/">Выйти</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
const transformValue: Ref<number> = ref(0)

// eslint-disable-next-line space-before-function-paren
function onProductsClick() {
  transformValue.value = transformValue.value === 0 ? 130 : 0
}
</script>

<style lang="scss">
.aside {
  padding: 30px 0;

  &__logo {
    align-self: start;
    padding: 0 40px 32px 15px;
    margin-bottom: 30px;
    border-bottom: 1px solid #6666661c;
  }

  &__item-icon {
    margin-right: 10px;
  }

  &__item {
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    position: relative;
    filter: grayscale(1);
    padding: 15px 20px;
    align-items: center;
    color: #109EF4;
    transition: background-color .3s ease, filter .3s ease;
  }

  &__item:hover {
    cursor: pointer;
    filter: grayscale(0);
    background-color: #109df41d;
  }

  &__link {
    color: #109EF4;
  }

  &__link::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__link:focus {
    outline: none;
  }

  &__item:focus-within {
    filter: grayscale(0);
  }

  &__products-list {
    transition: opacity .3s ease, visibility .3s ease;
    list-style-type: disc;
    position: absolute;
    top: 50px;
    padding-left: 35px;
  }

  &__products-item {
    padding: 10px 0;
    filter: grayscale(1);
    color: #109EF4;
    transition: all .3s ease;
  }

  &__products-item::marker {
    color: transparent;
    transition: all .3s ease;
    font-size: 22px;
  }

  &__products-item:hover {
    filter: grayscale(0);
  }

  &__products-item:hover::marker {
    color: #109EF4;
  }

  &__products-link {
    color: #109EF4;
  }
}

.dropdown-icon {
  margin-left: auto;
  transition: all .3s ease;
}

.list-dropdown {
  transition: transform .3s ease;
  transform: translateY(120px);
}
</style>
