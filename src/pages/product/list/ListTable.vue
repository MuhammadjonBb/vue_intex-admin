<template>
  <!--    <q-card  class="q-mb-md header__card">-->
  <!--      <q-card-section class=" good" horizontal>-->
  <!--        <q-card-section class="flex justify-center items-center" horizontal>-->
  <!--          <q-checkbox  v-model="selectAll" class="select&#45;&#45;all" dense/>-->
  <!--        </q-card-section>-->

  <!--        <q-card-section  v-for="(colum) in columns" :key="colum.name" class="table__header flex justify-between items-center">-->
  <!--          <span>{{ colum.label }}</span>-->
  <!--          <q-btn v-show="colum.icon" dense rounded unelevated @click="SortedData(colum,Object.keys(colum))">-->
  <!--            <q-icon size="16px" class="text-weight-bold" name="filter_list"/>-->
  <!--          </q-btn>-->
  <!--        </q-card-section>-->

  <!--      </q-card-section>-->
  <!--    </q-card>-->
  <q-table v-model:selected="selected" :columns="columns" :rows="store.listData" dense row-key="id" selection="multiple"
    class="q-mt-sm bg-grey-2 list__tab" flat table-style="overflow:visible; margin-top:30px;"
    table-header-style="font-weight: 500;font-size: 14px; background-color:white; position: relative; top: -20px; margin-bottom:30px;  z-index: 1;"
    table-header-class="text-grey-7 q-pa-none">

    <template #header-selection="scope">
      <q-checkbox v-model="scope.selected" />
    </template>
    <template v-slot:header-cell="props">
      <q-th :props="props">
        {{ props.col.label }}
        <q-icon v-if="props.col.icon" size="16px" class="text-weight-bold" name="filter_list" />
      </q-th>
    </template>

    <template #body-selection="scope">
      <q-td class="bg-white" :scope="scope">
        <q-checkbox v-model="scope.selected" />
      </q-td>
    </template>
    <template #body-cell-id="props">
      <q-td class="bg-white" :props="props">
        {{ props.row.id }}
      </q-td>
    </template>
    <template #body-cell-name="props">
      <q-td class="bg-white" :props="props">
        {{ props.row.name_ru }}
      </q-td>
    </template>
    <template #body-cell-status="data">
      <q-td class="bg-white" :props="data">
        <q-btn size="10px" square :color="store.getStatusClass(data.row.status_ru)" class="full-width ">
          {{ data.row.status_ru }}
        </q-btn>
      </q-td>
    </template>
    <template #body-cell-price="props">
      <q-td class="bg-white" :props="props">
        {{ props.row.price.toLocaleString('en-US') + ' сум' }}
      </q-td>
    </template>
    <template #body-cell-count="props">

      <q-td  style="background-color: white" :props="props">
        {{ props.row.count }}
      </q-td>
    </template>
    <template #body-cell-category="props">
      <q-td class="bg-white" :props="props">
        {{ props.row.category_ru }}
      </q-td>
    </template>
    <template #body-cell-discount="props">
      <q-td class="bg-white discount" style="background-color: white" :props="props">
        {{ (props.row.discount_price.toLocaleString('uz-Uz') + ' сум') }}
      </q-td>
    </template>

    <template #body-cell-action="data">
      <q-td class="bg-white" :props="data">
        <q-btn flat icon="more_vert" rounded dense></q-btn>
        <q-menu>
          <q-list style="min-width: 150px">
            <q-item v-close-popup>
              <q-item-section>
                <q-btn dense flat class="text-capitalize text-left " @click="store.updateList(data.row.id)" text-color="grey-8">
                  <q-icon size="xs" name="edit" color="positive" class="on-left" />
                  Изменить
                </q-btn>
              </q-item-section>
            </q-item>
            <q-item v-close-popup>
              <q-item-section class="flex">
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
    <template #bottom="scope">
      <div class="row items-center q-pa-sm full-width bg-white">

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
  </q-table>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useListStore } from "stores/moduls/products/list";

const selected = ref([]),
      selectAll = ref(false),
      store = useListStore(),
      columns = [
    { name: 'id', label: 'ID', field: (row:any) => row.id, align: 'left', icon: true, sortable: true },
    {
      name: 'name',
      required: true,
      label: 'Название товара',
      field: (row:any) => row.name_ru,
      style: 'max-width: 3000px',
      align: 'left',
      sortable: true,
      icon: true
    },
    { name: 'price', align: 'left', label: 'Цена', field: (row:any) => row.price, icon: false },
    {
      name: 'discount',
      label: 'Cо скидкой',
      field: (row:any) => row.discount_price,
      align: 'left',
      icon: false
    },
    { name: 'count', label: 'Кол-во', field: 'count', align: 'left', icon: true, sortable: true },
    { name: 'category', label: 'Категория', field: (row:any) => row.category_ru, align: 'left', icon: true, sortable: true },
    { name: 'status', label: 'Статус', field: (row:any) => row.status_ru, align: 'left', icon: false },
    { name: 'action', label: '', align: 'left', icon: false }
  ];
function getPageNums(n: number) {
  const numsArr: number[] = []
  for (let i = 1; i <= n; i++) {
    numsArr.push(i)
  }
  return numsArr
}
watch(selectAll, () => {
  if (selectAll.value) {
    selected.value.splice(0, selected.value.length)
    store.listData.forEach(element => {
      selected.value.push(element)
    })
  } else {
    selected.value.splice(0, selected.value.length)
  }
})
</script>
<style lang="sass">
.q-table--col-auto-width
  padding: 0 !important
.header__card
  height: 50px
  padding: 0

//   table__body
.list__tab
  margin-top: 0
  padding: 0
  .q-table__bottom
    padding: 0
    padding-left: 1%
    background-color: white
.table__img
  padding: 5px
  border: 1px solid gray
  border-radius: 5px
  background-repeat: no-repeat
  background-size: cover

//  main css
.main__container
  margin: 0 auto
  width: 97%

.select--all
  margin-left: 19px
  border-radius: 15px
</style>
