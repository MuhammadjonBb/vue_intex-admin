<template>
  <q-form class="q-mt-md q-pa-xl column q-mx-auto bg-white" style="border-radius: 12px;" v-if="ordersStore.products">
    <div class="column no-wrap q-mb-md" style="gap:20px;">
      <div class="row no-wrap" style="gap: 20px;">
        <DefaultInput :rules="[required]" name="name" :label="$t('orders.form.inputs.name')"
          v-model:text="form.first_name" class="full-width" />
        <DefaultInput :rules="[required]" name="surname" :label="$t('orders.form.inputs.surname')"
          v-model:text="form.last_name" class="full-width" />
        <PhoneInput :rules="[phoneRequired]" class="full-width" v-model:text="form.phone" />
        <DefaultInput :rules="[required, isValidEmail]" name="email" label="Email" v-model:text="form.email"
          class="full-width" />
      </div>

      <DefaultInput :rules="[required]" name="address" icon="location_on" :label="$t('orders.form.inputs.address')"
        v-model:text="form.address" />
    </div>
    <!-- ==================== -->
    <div class="column no-wrap q-mb-lg">
      <div class="row">
        <span> {{ $t('orders.form.inputs.products') }}</span>
        <q-space />
        <span style="margin-right: 5%">{{ $t('orders.form.inputs.amount') }}</span>
      </div>

      <div class="row no-wrap q-mt-md" style="gap: 20px;" v-for="(item, index) in ordersStore.selectedProducts"
        :key="index">
        <label style="width: 90%;" class="column">
          <q-select dropdown-icon="expand_more" class="q-px-md border-reset q-py-xs" dense borderless
            v-model="ordersStore.selectedProducts[index]" :options="ordersStore.mappedProducts" />
        </label>

        <label class="column" style="width: 10%">
          <q-input dense borderless class="q-py-xs q-px-md border-reset full-wdith" type="number"
            v-model="ordersStore.selectedProducts[index].amount" />
          <!-- <q-select dropdown-icon="expand_more" class="q-mt-md q-px-md border-reset q-py-xs" dense borderless
            v-model="ordersStore.selectedProducts[ordersStore.selectedProducts.length - 1].amount" :options="amount" /> -->
        </label>
      </div>
      <q-btn flat icon="add" @click="ordersStore.addProduct()" :label="$t('orders.form.addProducts')" no-caps
        style="align-self: start; font-size: 14px;" class="q-mt-md" color="primary" />
    </div>
    <!-- ==================== -->
    <div class="row no-wrap" style="gap: 20px; justify-content: space-between;">
      <label style="width: 100%;">
        {{ $t('orders.form.inputs.status') }}
        <q-select map-options dropdown-icon="expand_more" dense color="primary"
          class="q-py-xs q-px-md q-mt-sm border-reset" borderless v-model="ordersStore.statusValalue"
          :options="ordersStore.statusOptions"></q-select>
      </label>
      <!-- <label style="width: 50%;">
        Время заказа
        <q-input dense borderless class="q-py-xs q-px-md q-mt-sm border-reset" type="date" v-model="orderDate"></q-input>
      </label> -->
      <!-- <label style="width: 33%;">
        Общяя цена
        <q-input dense clear-icon="" borderless class="q-py-xs q-px-md q-mt-sm border-reset" type="number"
          v-model="price">
          <template #append>
            <div style="color: #464A4D; font-size: 16px;">
              Сум
            </div>
          </template>
        </q-input>
      </label> -->
    </div>
    <!-- ==================== -->
    <div class="row q-mt-lg">
      <q-space />
      <q-btn color="indigo-10" flat :label="$t('btn.cancel')" style="border-radius: 12px;"
        class="q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
      <q-btn @click="createOrder()" color="white" flat :label="$t('btn.save')" style="border-radius: 12px;"
        class="q-py-sm  q-px-xl bg-indigo-10" no-caps />
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import DefaultInput from 'src/components/input/DefaultInput.vue'
import PhoneInput from 'src/components/input/PhoneInput.vue'
import { useOrdersStore } from 'src/stores/moduls/orders';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Notify } from 'quasar';

const { t } = useI18n()
const route = useRoute()
const ordersStore = useOrdersStore()

const validation = ref(false)
const form = ref({
  first_name: '',
  last_name: '',
  address: '',
  phone: '',
  email: '',
})

onMounted(() => {
  if (!ordersStore.products) {
    ordersStore.getProducts()
  }
})

if (route.params.id && ordersStore.orders) {
  const thisOrder = getOrder(route.params.id)
}
function getOrder(id: any) {
  return ordersStore.orders.result.find((item: any) => item.order_number === `#${id}`)
}


function createOrder() {
  if (!validation.value) {
    Notify.create({
      color: 'negative',
      position: 'top-right',
      message: t('validation.fail'),
    })
    return
  }
  ordersStore.createOrder(form.value).then(() => {
    Notify.create({
      color: 'positive',
      textColor: 'white',
      message: t('notification.orders.created'),
      position: 'top-right',
    })
  }).catch(() => {
    Notify.create({
      color: 'negative',
      textColor: 'white',
      message: t('notification.orders.createError'),
      position: 'top-right',
    })
  })
}

function required(v: string | number) {
  if (!!v) {
    return validation.value = true
  }
  validation.value = false
  return t('validation.required')
}

function isValidEmail(email: string) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (pattern.test(email)) {
    return validation.value = true
  }
  validation.value = false
  return t('validation.email')
}

function phoneRequired(str: string) {
  const digitRegex = /\d/g;
  const matches = str.match(digitRegex);
  const amount = matches ? matches.length : 0;

  if (amount > 8) {
    return validation.value = true
  }
  validation.value = false
  return t('validation.required')
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
