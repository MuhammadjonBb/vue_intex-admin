import { reactive } from 'vue'

const columns = [
  { name: 'id', label: 'ID', field: 'id', align: 'left', icon: true, sortable: true },
  {
    name: 'desc',
    required: true,
    label: 'Название товара',
    field: 'name',
    style: 'max-width: 3000px',
    align: 'left',
    sortable: true,
    icon: true
  },
  { name: 'cost', align: 'left', label: 'Цена', field: 'cost', icon: false },
  {
    name: 'discount',
    label: 'Cо скидкой',
    field: 'discount',
    align: 'left',
    icon: false
  },
  { name: 'col', label: 'Кол-во', field: 'col', align: 'left', icon: true, sortable: true },
  { name: 'category', label: 'Категория', field: 'category', align: 'left', icon: true, sortable: true },
  { name: 'status', label: 'Статус', field: 'status', align: 'left', icon: false },
  { name: 'action', label: '', align: 'left', icon: false }
]
const rows: { id: number; name: string; selected?: boolean, col: number, }[] = reactive([
  {
    id: 1,
    name: 'Каркасный прямоугольный контейнер',
    cost: 2500000,
    discount: 203400,
    col: 33,
    category: 'Каркасные',
    img: 'https://picsum.photos/seed/picsum/100/300',
    status: 'Новый'
  },
  {
    id: 2,
    name: 'обычно используется в графических',
    cost: 2100000,
    discount: 320000,
    col: 13,
    category: 'Надувные',
    img: 'https://picsum.photos/seed/picsum/400/330',
    status: 'Хит продаж'
  },
  {
    id: 3,
    name: 'индустрии для предварительного',
    cost: 3500000,
    discount: 120000,
    col: 63,
    category: 'Аксессуары',
    img: 'https://picsum.photos/seed/picsum/500/220',
    status: 'Обичный'
  },
  {
    id: 4,
    name: 'печать и издательской',
    cost: 4500000,
    discount: 100000,
    col: 3,
    category: 'Каркасные',
    img: 'https://picsum.photos/seed/picsum/700/110',
    status: 'Скидка\n'
  }
])
export {
  rows,
  columns
}
