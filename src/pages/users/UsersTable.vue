<template>
  <q-table dense table-class="q-mx-none" flat
    table-header-style="font-weight: 500;font-size: 14px; background-color: #f2f2f2;"
    table-header-class="text-grey-7 q-pa-none" :rows="data.result" row-key="id" v-model:selected="selected"
    selection="multiple" :columns="[
      {
        name: 'id',
        field: 'id',
        label: 'ID',
        sortable: true,
        align: 'left'
      },
      {
        name: 'name',
        field: 'name',
        label: 'Имя',
        sortable: true,
        align: 'left'
      },
      {
        name: 'role',
        field: 'role',
        label: 'Роль  ползователя',
        sortable: true,
        align: 'left'
      },
      {
        name: 'status',
        field: 'status',
        label: 'Статус',
        align: 'left'
      },
      {
        name: 'lastActiveDate',
        field: 'lastActiveDate',
        label: 'Последняя активность',
        sortable: true,
        align: 'left'
      },
      {
        name: 'phone',
        field: 'phone',
        label: 'Номер телефона',
        sortable: true,
        align: 'left'
      },
      {
        name: 'registerDate',
        field: 'created_at',
        label: 'Дата регистрация',
        align: 'left'
      },
      {
        name: 'birthDate',
        field: 'birthDate',
        label: 'Дата рождение',
        sortable: true,
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

    <!-- DATE -->
    <!-- <template #body-cell-lastActiveDate="props">
      <q-td :props="props">
        <div class="column">
          <span> {{ props.row.lastActiveDate }}</span>
          <span class="text-grey-7" style="font-size: 12px;"> {{ props.row.lastActiveDate[1] }}</span>
        </div>
      </q-td>
    </template>-->
    <template #body-cell-registerDate="props">
      <q-td :props="props">
        <div class="column">
          <span> {{ beautifyDate(props.row.created_at)[0] }}</span>
          <span class="text-grey-7" style="font-size: 12px;"> {{ beautifyDate(props.row.created_at)[1] }}</span>
        </div>
      </q-td>
    </template>
    <!-- <template #body-cell-birthDate="props">
      <q-td :props="props">
        <div class="column">
          <span> {{ props.row.birthDate[0] }}</span>
        </div>
      </q-td>
    </template> -->
    <!-- DATE -->
    <template #header-cell-action>
      <q-th class="text-right" style="background-color: #f2f2f2;">
        <q-icon name="more_vert" size="sm" color="dark" class="q-mr-xs" />
      </q-th>
    </template>
    <!-- HEADER -->
    <!-- STATUS -->
    <template #body-cell-status="props">
      <q-td :props="props">
        <q-chip square :color="getStatusClass(props.row.status)" class="full-width justify-center">
          {{ props.row.status }}
        </q-chip>
      </q-td>
    </template>
    <!-- STATUS -->
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

    <!-- BODY -->
    <template #body-cell-name="props">
      <q-td :props="props">
        <div class="row items-center" @click="$router.push('/users/about')" style="cursor: pointer;">
          <q-avatar v-if="props.row.user_image">
            <q-img :src="props.row.user_image" size="24px"></q-img>
          </q-avatar>

          <q-avatar v-else icon="person" class="bg-grey-4 q-mr-sm" text-color="grey-7" size="24px" />
          {{ props.row.first_name }} {{ props.row.last_name }}
        </div>
      </q-td>
    </template>
    <!-- BODY -->

    <!-- ACTIONS -->
    <template #body-cell-action="props">
      <q-td :props="props">
        <q-btn flat icon="more_vert" rounded dense />
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item v-close-popup>
              <q-item-section>
                <q-btn dense flat class="text-capitalize text-left" text-color="grey-8" @click="toEdit">
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

  </q-table>
</template>

<style lang="scss"></style>

<script setup lang="ts">
import beautifyDate from 'src/helpers/beautifyDate';
import { useModalStore } from 'src/stores/moduls/modal';
import { ref } from 'vue'

defineProps(['data'])
const allSelect = ref(false)
const selected = ref([])
const modalStore = useModalStore()

// eslint-disable-next-line space-before-function-paren
function clearSelections() {
  selected.value.splice(0)
}

// eslint-disable-next-line space-before-function-paren
function getPageNums(n: number) {
  const numsArr = []
  for (let i = 1; i <= n; i++) {
    numsArr.push(i)
  }
  return numsArr
}

// eslint-disable-next-line space-before-function-paren
function getStatusClass(status: string) {
  if (status === 'Актив') {
    return 'positive text-white'
  } else if (status === 'Не актив') {
    return 'red-6 text-white'
  } else if (status === 'Удален') {
    return 'text-white dark'
  }
}

function toEdit() {
  modalStore.modal.users.edit = true
}
</script>
