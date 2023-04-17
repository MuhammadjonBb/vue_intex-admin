<template>
  <q-form class="q-mt-md q-pa-xl column q-mx-auto bg-white" style="border-radius: 12px;">
    <div class="row no-wrap q-mb-lg" style="gap:20px;">
      <div style="width: 90%; gap: 20px;" class="row no-wrap">
        <DefaultInput name="name" label="Имя" :inputData="{ component: 'ordersEdit', inputName: 'name' }"
          class="full-width" />
        <PhoneInput class="full-width" :inputData="{ component: 'ordersEdit', inputName: 'phone' }" />
      </div>
      <DefaultInput name="address" icon="location_on" label="Адрес"
        :inputData="{ component: 'ordersEdit', inputName: 'address' }" />
    </div>
    <!-- ==================== -->
    <div class="column no-wrap q-mb-lg">
      <div class="row no-wrap" style="gap: 20px;">
        <label style="width: 85%;" class="column">
          Товары
          <q-select dropdown-icon="expand_more" v-for="i in 3" :key="i" class="q-mt-md q-px-md border-reset q-py-xs" dense
            borderless v-model="selectedValue.products" :options="products" />
        </label>
        <label style="width: 15%;" class="column">
          Кол-во
          <q-select dropdown-icon="expand_more" v-for="i in 3" :key="i" class="q-mt-md q-px-md border-reset q-py-xs" dense
            borderless v-model="selectedValue.amount" :options="amount" />
        </label>
      </div>
      <q-btn flat icon="add" label="Добавить товары" no-caps style="align-self: start; font-size: 14px;" class="q-mt-md"
        color="primary" />
    </div>
    <!-- ==================== -->
    <div class="row no-wrap" style="gap: 20px; justify-content: space-between;">
      <label style="width: 33%;">
        Статус
        <q-select dropdown-icon="expand_more" dense color="primary" class="q-py-xs q-px-md q-mt-sm border-reset"
          borderless v-model="selectedValue.status" :options="statusArr"></q-select>
      </label>
      <label style="width: 33%;">
        Время заказа
        <q-input dense borderless class="q-py-xs q-px-md q-mt-sm border-reset" type="date" v-model="orderDate"></q-input>
      </label>
      <label style="width: 33%;">
        Общяя цена
        <q-input dense clear-icon="" borderless class="q-py-xs q-px-md q-mt-sm border-reset" type="number"
          v-model="price">
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
import { computed, ref } from 'vue'
import DefaultInput from 'src/components/input/DefaultInput.vue'
import PhoneInput from 'src/components/input/PhoneInput.vue'
import { useInputStore } from 'stores/moduls/input';

const inputStore = useInputStore()

const name = computed(() => inputStore.input.orders.name)
const phone = computed(() => inputStore.input.orders.address)
const address = computed(() => inputStore.input.orders.phone)
const orderDate = ref('')
const price = ref('')


const products = ['Samsung Galaxy A53 5G 6/128GB']
const amount = [1]
const statusArr = ['Оплачен', 'Отменен', 'В ожидании', 'В проссесе']

const selectedValue = ref({
  status: statusArr[0],
  products: products[0],
  amount: amount[0]
})
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
