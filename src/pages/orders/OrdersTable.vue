<template>
  <q-table dense table-class="q-mx-none" flat
    table-header-style="font-weight: 500;font-size: 14px; background-color: #f2f2f2;"
    table-header-class="text-grey-7 q-pa-none" :rows="data.result" row-key="id" v-model:selected="selected"
    selection="multiple" :columns="[
      {
        name: 'id',
        label: '№ Заказа',
        field: 'order_number',
        sortable: true,
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left'
      },
      {
        name: 'client',
        label: 'Имя клиента',
        field: 'first_name',
        sortable: true,
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left'
      },
      {
        name: 'phone',
        label: 'Tелефон',
        field: 'phone',
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left',
      },
      {
        name: 'address',
        label: 'Адрес',
        field: 'address',
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left'
      },
      {
        name: 'goods',
        label: 'Товары',
        field: 'goods',
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left',
        sortable: true,
      },
      {
        name: 'total_price',
        label: 'Обшая цена',
        field: row => beautifyPrice(row.total_price),
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left'
      },
      {
        name: 'date',
        label: 'Время заказа',
        field: 'created_at',
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left'
      },
      {
        name: 'status',
        label: 'Статус',
        field: 'name_ru',
        align: 'left',
        headerStyle: 'background-color: #f2f2f2;',
      },
      {
        name: 'action',
        label: 'Action',
        field: '',
        headerStyle: 'background-color: #f2f2f2;',
        align: 'right'
      }
    ]">

    <!-- TOP-SELECT -->
    <template #top>
      <q-tr class="item-center">
        <q-checkbox v-model:model-value="allSelect" />
        <span class="text-grey-5" style="font-weight: 500;">{{ selected.length }}, выбрано</span>
        <q-btn text-color="grey-5" icon="delete" flat round @click="clearSelections" />
      </q-tr>
    </template>
    <!-- TOP-SELECT -->

    <!-- HEADER -->
    <template #header-cell-id="props">
      <q-th class="text-left" style="background-color: #f2f2f2;" :props="props">
        {{ props.col.label }}
        <q-icon name="filter_list" size="sm" color="indigo-10" />
      </q-th>
    </template>

    <template #header-cell-client="props">
      <q-th class="text-left" style="background-color: #f2f2f2;" :props="props">
        {{ props.col.label }}
        <q-icon name="filter_list" size="sm" color="indigo-10" />
      </q-th>
    </template>

    <template #header-cell-goods="props">
      <q-th class="text-left" style="background-color: #f2f2f2;" :props="props">
        {{ props.col.label }}
        <q-icon name="filter_list" size="sm" color="indigo-10" />
      </q-th>
    </template>

    <template #header-cell-action>
      <q-th class="text-right" style="background-color: #f2f2f2;">
        <q-icon name="more_vert" size="sm" color="dark" class="q-mr-xs" />
      </q-th>
    </template>
    <!-- HEADER -->

    <!-- BODY  -->
    <!-- DATE -->
    <template #body-cell-date="props">
      <q-td :props="props">
        <div class="column">
          <span> {{ beautifyDate(props.row.created_at[0])[0] }} </span>
          <span class="text-grey-7" style="font-size: 12px;"> {{ beautifyDate(props.row.created_at[0])[1] }}</span>
        </div>
      </q-td>
    </template>
    <!-- DATE -->

    <!-- STATUS -->
    <template #body-cell-status="props">
      <q-td :props="props">
        <q-chip square :color="getStatusClass(props.row.name_ru)" class="full-width justify-center">
          {{ props.row.name_ru }}
        </q-chip>
      </q-td>
    </template>
    <!-- STATUS -->

    <!-- PRODUCTS -->
    <!-- <template #body-cell-goods="props">
      <q-td :props="props">
        <div :style="props.row.goods.length > 1 ? 'color: #109EF4;text-decoration: underline;  cursor: pointer;' : ''">
          <div v-if="props.row.goods.length > 1">
            {{ getRightWord(props.row.goods.length) }}
            <q-tooltip :offset="[1, 1]" class="bg-dark">
              <q-list>
                <q-item dense v-for="(item, index) in props.row.goods" :key="index">
                  <q-item-section dense>{{ item }}</q-item-section>
                </q-item>
              </q-list>
            </q-tooltip>
          </div>
          <div v-else>1 x {{ props.row.goods[0] }}</div>
        </div>
      </q-td>
    </template> -->
    <!-- PRODUCTS -->
    <!-- BODY  -->

    <!-- ACTIONS -->
    <template #body-cell-action="props">
      <q-td :props="props">
        <q-btn flat icon="more_vert" rounded dense />
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item v-close-popup>
              <q-item-section>
                <q-btn dense flat class="text-capitalize text-left" text-color="grey-8" @click="toEditPage">
                  <q-icon size="xs" name="edit" color="positive" class="on-left" />
                  Изменить
                </q-btn>
              </q-item-section>
            </q-item>
            <q-item v-close-popup>
              <q-item-section>
                <q-btn dense flat class="text-capitalize text-left" text-color="grey-8">
                  <q-icon name="content_copy" size="xs" color="primary" class="on-left" />
                  Дублировать
                </q-btn>
              </q-item-section>
            </q-item>
            <q-item v-close-popup>
              <q-item-section>
                <q-btn dense flat class="text-capitalize text-left" text-color="grey-8">
                  <q-icon name="delete" size="xs" color="negative" class="on-left" />
                  Удалить
                </q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-td>
    </template>
    <!-- ACTIONS -->

    <!-- SELECTION -->
    <template #header-selection="props">
      <q-checkbox v-model="props.selected" />
    </template>

    <template #body-selection="props">
      <q-checkbox v-model="props.selected" />
    </template>
    <!--SELECTION -->

    <!-- PAGINATION -->
    <template #bottom="scope">
      <div class="row items-center q-pa-sm full-width">

        <div class="row items-center q-mr-md">
          <q-select dropdown-icon="expand_more" borderless dense v-model="scope.pagination.rowsPerPage"
            :options="[5, 10, 20, 50]" emit-value class="q-mr-sm q-pl-md q-pr-sm bg-grey-3"
            style="border-radius: 12px;" />
          <span class="text-grey-7" style="font-size: 15px;"> Элементы на каждой странице</span>
        </div>

        <div class="text-grey-8" style="font-size: 15px;">
          {{ scope.pagination.rowsPerPage * scope.pagination.page - scope.pagination.rowsPerPage == 0 ? 1 :
            scope.pagination.rowsPerPage * scope.pagination.page - scope.pagination.rowsPerPage }} -
          {{ scope.pagination.rowsPerPage * scope.pagination.page }} из
          {{ data.pageInfo.total_count }} предметов
        </div>

        <q-space />

        <div class="row items-center">
          <q-select dropdown-icon="expand_more" borderless dense v-model="scope.pagination.page"
            :options="getPageNums(scope.pagesNumber)" emit-value class="q-mr-sm q-pl-md q-pr-sm bg-grey-3"
            style="border-radius: 12px;" />
          <span class="text-grey-7" style="font-size: 15px;"> Из {{ scope.pagesNumber }} страниц</span>
        </div>

        <div class="row items-center">
          <q-pagination dense v-model="scope.pagination.page" :min="1" no-number :max="scope.pagesNumber" direction-links
            color="grey" />
        </div>
      </div>
    </template>
    <!-- PAGINATION -->
  </q-table>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import getRightWord from 'src/helpers/getRightWord'
import beautifyDate from 'src/helpers/beautifyDate'

interface ISelected {
  id: number
  address: string
  status: string
  goods: string[]
  cost: string
  date: [string, string]
  client: string
  phone: string
}

const router = useRouter()
const selected: Ref<ISelected[]> = ref([])
const allSelect: Ref<boolean> = ref(false)
defineProps(['data'])

// eslint-disable-next-line space-before-function-paren
function getPageNums(n: number): number[] {
  const numsArr = []
  for (let i = 1; i <= n; i++) {
    numsArr.push(i)
  }
  return numsArr
}

// eslint-disable-next-line space-before-function-paren
function toEditPage() {
  router.push('/orders/edit')
}

// eslint-disable-next-line space-before-function-paren
function getStatusClass(status: string): string {
  if (status === 'Оплачен') {
    return 'positive text-white'
  } else if (status === 'Отменен') {
    return 'red-6 text-white'
  } else if (status === 'В ожидании') {
    return 'amber-2 text-amber-9'
  } else {
    return 'light-blue-13 text-white'
  }
}

// eslint-disable-next-line space-before-function-paren
function clearSelections(): void {
  selected.value.splice(0)
}

function beautifyPrice(price: number) {
  const formattedPrice = price.toFixed(2)
  const parts = formattedPrice.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return parts.join('.')
}
</script>
