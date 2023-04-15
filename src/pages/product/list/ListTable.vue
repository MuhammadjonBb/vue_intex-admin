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
  <q-table v-model:selected="selected" :columns="columns" :rows="rows" dense row-key="id" selection="multiple"
    class="q-mt-sm bg-grey-2" flat table-style="overflow:visible; margin-top:30px;"
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
    <template #body-cell-status="data">
      <q-td class="bg-white" :props="data">
        <q-btn size="10px" square :color="store.getStatusClass(data.row.status)" class="full-width ">
          {{ data.row.status }}
        </q-btn>
      </q-td>
    </template>
    <template #body-cell-action="data">
      <q-td class="bg-white" :props="data">
        <q-btn flat icon="more_vert" rounded dense></q-btn>
        <q-menu>
          <q-list style="min-width: 150px">
            <q-item v-close-popup>
              <q-item-section>
                <q-btn dense flat class="text-capitalize text-left " text-color="grey-8">
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
    <template #body-cell-id="props">
      <q-td class="bg-white" :props="props">
        {{ props.row.id }}
      </q-td>
    </template>
    <template #body-cell-cost="props">
      <q-td class="bg-white" :props="props">
        {{ props.row.cost.toLocaleString('en-US') + ' сум' }}
      </q-td>
    </template>
    <template #body-cell-col="props">
      <q-td class="bg-white" :props="props">
        {{ props.row.col }}
      </q-td>
    </template>
    <template #body-cell-category="props">
      <q-td class="bg-white" :props="props">
        {{ props.row.category }}
      </q-td>
    </template>
    <template #body-cell-discount="props">
      <q-td class="bg-white discount" style="background-color: white" :props="props">
        {{ (props.row.discount.toLocaleString('uz-Uz') + ' сум') }}
      </q-td>
    </template>
    <template #body-cell-desc="props">
      <td class="bg-white">
        <div>
          <q-img class="table__img" :src="props.row.img" height="40px" width="60px" />
          {{ props.row.name.length > 24 ? props.row.name.substr(0, 22) + '...' : props.row.name + '...' }}
        </div>
      </td>
    </template>
  </q-table>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useCounterStore } from 'stores/productTable'
import { rows, columns } from 'src/randomDate/tableDate'

const selected = ref([]),
  selectAll = ref(false),
  store = useCounterStore()

store.setColRow(rows, columns)
watch(selectAll, () => {
  if (selectAll.value) {
    selected.value.splice(0, selected.value.length)
    rows.forEach(element => {
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
