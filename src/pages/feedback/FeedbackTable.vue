<template>
  <q-table dense table-class="q-mx-none" flat
    table-header-style="font-weight: 500;font-size: 14px; background-color: #f2f2f2;"
    table-header-class="text-grey-7 q-pa-none" :rows="data.data" row-key="id" v-model:selected="selected"
    selection="multiple" :columns="[
      {
        name: 'id',
        field: 'id',
        label: 'ID',
        sortable: true,
        align: 'left',
      },
      {
        name: 'name',
        field: 'name',
        label: 'Имя',
        sortable: true,
        align: 'left',
      },
      {
        name: 'phone',
        field: 'phone',
        label: 'Номер телефона',
        sortable: true,
        align: 'left',
      },
      {
        name: 'date',
        field: 'date',
        label: 'Время заяавки',
        align: 'left',
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

    <template #header-cell-name="props">
      <q-th class="text-left" style="background-color: #f2f2f2;" :props="props">
        {{ props.col.label }}
        <q-icon name="filter_list" size="sm" color="indigo-10" />
      </q-th>
    </template>

    <template #header-cell-phone="props">
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
    <!-- ACTIONS -->
    <template #body-cell-action="props">
      <q-td :props="props">
        <q-btn flat icon="more_vert" rounded dense />
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item v-close-popup>
              <q-item-section>
                <q-btn dense flat class="text-capitalize text-left" text-color="grey-8">
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

    <!-- DATE -->
    <template #body-cell-date="props">
      <q-td :props="props">
        <div class="column">
          <span> {{ props.row.date[0] }}</span>
          <span class="text-grey-7" style="font-size: 12px;"> {{ props.row.date[1] }}</span>
        </div>
      </q-td>
    </template>
    <!-- DATE -->

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

<style></style>

<script setup lang="ts">
import { Ref, ref } from 'vue'

interface ISelected {
  date: [string, string]
  name: string
  phone: string
  id: number
}

const selected: Ref<ISelected[]> = ref([])
const allSelect: Ref<boolean> = ref(false)

// eslint-disable-next-line space-before-function-paren
function clearSelections(): void {
  selected.value.splice(0)
}

// eslint-disable-next-line space-before-function-paren
function getPageNums(n: number): number[] {
  const numsArr = []
  for (let i = 1; i <= n; i++) {
    numsArr.push(i)
  }
  return numsArr
}
defineProps(['data'])
</script>
