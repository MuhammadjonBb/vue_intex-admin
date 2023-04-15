<template>
  <q-table dense table-class="q-mx-none"
           flat
           class="my-table"
           color="primary"
           :virtual-scroll="true"
           card-class="text-black"
           table-header-style="font-weight: 500;font-size: 14px; background-color: #f2f2f2;"
           table-header-class="text-grey-7 q-pa-none" :rows="data.data" row-key="id" v-model:selected="selected"
           selection="multiple" :columns="[
      {
        name: 'id',
        label: 'ID',
        field: row => `#${row.id}`,
        sortable: true,
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left'
      },
      {
        name: 'client',
        label: 'Имя клиента',
        field: 'client',
        sortable: true,
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left'
      },
      {
        name: 'status',
        label: 'Статус',
        field: 'status',
        sortable: true,
        align: 'left',
        headerStyle: 'background-color: #f2f2f2;',
      },
      {
        name: 'goods',
        label: 'goods',
        field: 'goods',
        sortable: true,
        headerStyle: 'background-color: #f2f2f2;',
        align: 'left'
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

    <template #header-cell-status="props">
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

    <!-- DATE -->
    <!-- BODY  -->
    <template #body-cell-goods="props">
      <q-td :props="props">
          <div v-if="props.row.goods.length > 1" class="row">
                <q-chip style="background: #9CDAFF;" square v-for="(item, index) in props.row.goods" :key="index">
                  {{ item }}
                </q-chip>
          </div>
          <div v-else>1 x {{ props.row.goods[0] }}</div>
      </q-td>
    </template>
    <!-- DATE -->

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
                <q-btn dense flat class="text-capitalize text-left" @click="deleteItem(props.row.id)" text-color="grey-8">
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
      <q-td>
        <q-checkbox v-model="props.selected" />
      </q-td>
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
  </q-table>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue'
import { useRouter } from 'vue-router'
import datas from 'src/helpers/orderData'

const router = useRouter()
const selected = ref([])
const allSelect = ref(false)
const data = computed(() => datas)

// eslint-disable-next-line space-before-function-paren
function getPageNums(n: number) {
  const numsArr = []
  for (let i = 1; i <= n; i++) {
    numsArr.push(i)
  }
  return numsArr
}

function deleteItem(id:string) {
  data = data.filter(item => item.id != id)
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

<style >
.my-table::-webkit-scrollbar {
  background-color: #00b4ff;
}
</style>
