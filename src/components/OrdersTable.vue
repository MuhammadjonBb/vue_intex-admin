<template>
  <q-table table-style="max-width: ;" dense table-class="q-mx-md" table-header-style="font-weight: 500;font-size: 14px;"
    table-header-class="text-grey-7" :rows="data.data" row-key="id" square v-model:selected="selected"
    selection="multiple" :columns="[
      {
        name: 'id',
        label: '№ Заказа',
        field: row => `#${row.id}`,
        sortable: true,
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'client',
        label: 'Имя клиента',
        field: 'client',
        sortable: true,
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'phone',
        label: 'Tелефон',
        field: 'phone',
        headerClasses: 'bg-grey-1',
        align: 'left',
      },
      {
        name: 'address',
        label: 'Адрес',
        field: 'address',
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'goods',
        label: 'Товары',
        field: 'goods',
        headerClasses: 'bg-grey-1',
        align: 'left',
        sortable: true,
      },
      {
        name: 'cost',
        label: 'Обшая цена',
        field: 'cost',
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'date',
        label: 'Время заказа',
        field: 'date',
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'status',
        label: 'Статус',
        field: 'status',
        align: 'left',
        headerClasses: 'bg-grey-1',
      },
      {
        name: 'action',
        label: 'Action',
        field: '',
        headerClasses: 'bg-grey-1',
        align: 'right'
      }
    ]">
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
          {{ scope.pagesNumber * scope.pagination.rowsPerPage }} предметов
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

    <!-- TOP-SELECT -->
    <template #top>
      <q-tr class="item-center q-pl-md">
        <q-checkbox v-model:model-value="allSelect" />
        <span class="text-grey-5" style="font-weight: 500;">{{ selected.length }}, выбрано</span>
        <q-btn text-color="grey-5" icon="delete" flat round @click="clearSelections" />
      </q-tr>
    </template>
    <!-- TOP-SELECT -->

    <!-- SELECTION -->
    <template #header-selection="props">
      <q-checkbox v-model:model-value="props.selected" style="border-color: green;" />
    </template>

    <template #body-selection="props">
      <q-checkbox v-model="props.selected" />
    </template>
    <!--SELECTION -->

    <!-- HEADER -->
    <template #header-cell-id="props">
      <q-th class="bg-grey-1 text-left" :props="props">
        {{ props.col.label }}
        <q-icon name="filter_list" size="sm" color="indigo-10" />
      </q-th>
    </template>

    <template #header-cell-client="props">
      <q-th class="bg-grey-1 text-left" :props="props">
        {{ props.col.label }}
        <q-icon name="filter_list" size="sm" color="indigo-10" />
      </q-th>
    </template>

    <template #header-cell-goods="props">
      <q-th class="bg-grey-1 text-left" :props="props">
        {{ props.col.label }}
        <q-icon name="filter_list" size="sm" color="indigo-10" />
      </q-th>
    </template>

    <template #header-cell-action>
      <q-th class="bg-grey-1 text-right">
        <q-icon name="more_vert" size="sm" color="dark" class="q-mr-xs" />
      </q-th>
    </template>
    <!-- HEADER -->

    <!-- BODY  -->
    <template #body-cell-date="props">
      <q-td :props="props">
        <div class="column">
          <span> {{ props.row.date[0] }}</span>
          <span class="text-grey-7" style="font-size: 12px;"> {{ props.row.date[1] }}</span>
        </div>
      </q-td>
    </template>

    <template #body-cell-status="props">
      <q-td :props="props">
        <q-chip square :color="getStatusClass(props.row.status)" class="full-width justify-center">
          {{ props.row.status }}
        </q-chip>
      </q-td>
    </template>

    <template #body-cell-goods="props">
      <q-td :props="props">
        <div class="" style=""
          :style="props.row.goods.length > 1 ? 'color: #109EF4;text-decoration: underline;  cursor: pointer;' : ''">
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
    </template>

    <template #body-cell-action="props">
      <q-td :props="props">
        <q-btn flat icon="more_vert" rounded dense></q-btn>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item v-close-popup>
              <q-item-section>
                <q-btn dense flat class="text-capitalize text-left " text-color="grey-8" @click="toEditPage">
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
    <!-- BODY  -->
  </q-table>
</template>

<style lang="scss">
.q-checkbox__bg {
  border-radius: 5px;
}

.q-pagination__middle {
  display: none;
}

.q-btn__content {
  flex-wrap: nowrap !important;
}

.q-chip__content {
  justify-content: center;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import getRightWord from 'src/helpers/getRightWord'

const router = useRouter()
const selected = ref([])
const allSelect = ref(false)
defineProps(['data'])

// eslint-disable-next-line space-before-function-paren
function getPageNums(n: number) {
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
function getStatusClass(status: string) {
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
function clearSelections() {
  selected.value.splice(0)
}
</script>
