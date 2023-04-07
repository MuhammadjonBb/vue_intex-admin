<template>
  <q-form class="q-mt-md q-pa-xl column q-mx-auto bg-white" style="border-radius: 12px;">
    <div class="row no-wrap q-mb-lg" style="gap:20px;">
      <label style="width: 25%;">
        Имя
        <q-input class="q-mt-sm q-px-md q-py-xs border-reset" dense borderless v-model="input.name" />
      </label>

      <label style="width: 25%;">
        Номер телефона
        <q-input class="q-mt-sm q-px-md q-py-xs border-reset" dense borderless v-model="input.phone" />
      </label>

      <label style="width: 50%;">
        Адрес
        <q-input class="q-mt-sm q-px-md q-py-xs border-reset" dense borderless v-model="input.address">
          <template #append>
            <q-icon name="location_on" color="primary" />
          </template>
        </q-input>
      </label>
    </div>
    <!-- ==================== -->
    <div class="column no-wrap q-mb-lg">
      <div class="row no-wrap" style="gap: 20px;">
        <label style="width: 85%;" class="column">
          Товары
          <q-select v-for="i in 3" :key="i" class="q-mt-md q-px-md border-reset q-py-xs" dense borderless
            v-model="selectedValue.products" :options="products" />
        </label>
        <label style="width: 15%;" class="column">
          Кол-во
          <q-select v-for="i in 3" :key="i" class="q-mt-md q-px-md border-reset q-py-xs" dense borderless
            v-model="selectedValue.amount" :options="amount" />
        </label>
      </div>
      <q-btn flat icon="add" label="Добавить товары" no-caps style="align-self: start; font-size: 14px;" class="q-mt-md"
        color="primary" />
    </div>
    <!-- ==================== -->
    <div class="row no-wrap" style="gap: 20px; justify-content: space-between;">
      <label style="width: 33%;">
        Статус
        <q-select dense color="primary" class="q-py-xs q-px-md q-mt-sm border-reset" borderless
          v-model="selectedValue.status" :options="statusArr"></q-select>
      </label>
      <label style="width: 33%;">
        Время заказа
        <q-input dense borderless class="q-py-xs q-px-md q-mt-sm border-reset" type="date" v-model="input.date"></q-input>
      </label>
      <label style="width: 33%;">
        Обшая цена
        <q-input dense clear-icon="" borderless class="q-py-xs q-px-md q-mt-sm border-reset" type="number"
          v-model="input.price">
          <template #append>
            <div style="color: #464A4D; font-size: 16px;">
              Сум
            </div>
          </template>
        </q-input>
      </label>
    </div>
    <!-- ==================== -->
    <div class="row q-mt-lg">
      <q-space />
      <q-btn color="indigo-10" flat label="Отменить" style="border-radius: 12px;"
        class="q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
      <q-btn color="white" flat label="Сохранить" style="border-radius: 12px;" class="q-py-sm  q-px-xl bg-indigo-10"
        no-caps />
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input = ref({
  name: '',
  phone: '',
  address: '',
  date: '',
  price: ''
})
const products = ['Samsung Galaxy A53 5G 6/128GB']
const amount = [1]
const statusArr = ['Оплачен', 'Отменен', 'В ожидании', 'В проссесе']

const selectedValue = {
  status: statusArr[0],
  products: products[0],
  amount: amount[0]
}
</script>

<style>
.border-reset {
  border: 1px solid #E3E5E5;
  border-radius: 8px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
