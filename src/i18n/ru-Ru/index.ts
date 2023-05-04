export default {
  product: {
    title: 'Список продуктов',
    productCreate: {
      title: 'Информация и изображение',
      button: 'Добавить',
    },
  },
  aside: {
    items: {
      categories: 'Категории',
      products: 'Продукты',
      orders: 'Заказы',
      users: 'Пользователи',
      siteSettings: 'Настройки сайта',
      exit: 'Выход',
      productList: 'Список продуктов',
      attributes: 'Атрибуты',
      feedback: 'Обратная связь',
    }
  },
  orders: {
    title: 'Заказы',
    table: {
      tableHead: {
        orderNum: '№ Заказа',
        clientName: 'Имя клиента',
        phone: 'Телефон',
        address: 'Адрес',
        products: 'Продукты',
        cost: 'Общая цена',
        orderTime: 'Время заказа',
        status: 'Статус',
      }
    }
  },
  consultations: {
    title: 'Обратная связь',
    table: {
      tableHead: {
        name: 'Имя',
        phone: 'Телефон',
        apllicationTime: 'Время заявки',
      }
    },
    modal: {
      addTitle: 'Добавить обратную связь',
      editTitle: 'Изменить обратную связь',
      inputs: {
        name: 'Имя',
      }
    }
  },
  users: {
    title: 'Пользователи',
    table: {
      tableHead: {
        name: 'Имя',
        phone: 'Телефон',
        role: 'Роль пользователя',
        status: 'Статус',
        registerDate: 'Дата регистрации',
        birthday: 'Дата рождения',
      },
    },
    modal: {
      addTitle: 'Добавить пользователя',
      editTitle: 'Изменить пользователя',
      loadAvatar: 'Загрузить аватар',
      loadPhoto: 'Загрузить фото',
      load: 'Загрузить',
      inputs: {
        name: 'Имя',
        surname: 'Фамилия',
        birthday: 'Дата рождения',
        role: 'Роль пользователя',
        status: 'Статус',
      }
    }
  },
  siteSettings: {
    title: 'Настройки сайта',
    address: 'Адрес',
    phone: 'Телефон',
    schedule: 'График работы',
    langs: {
      ru: 'Русский язык',
      en: 'Английский язык',
      uz: 'Узбекский язык',
    },
    subTitles: {
      defaultLang: 'Язык по умолчанию',
      siteLangs: 'Языки сайта',
      contactInfo: 'Контактная информация',
      socials: 'Социальные сети',
    }
  },
  categories: {
    title: 'Категории',
    table: {
      tableHead: {
        categoryName: 'Название категории',
        subCategoryAmount: 'Количество подкатегорий',
        subCategories: 'Подкатегории',
      }
    }
  },
  btn: {
    save: 'Сохранить',
    cancel: 'Отменить',
    add: 'Добавить',
    edit: 'Изменить',
    delete: 'Удалить',
  },
  phoneInput: {
    name: 'Номер телефона',
  },
  placeholder: {
    name: 'Введите ваше имя',
    surname: 'Введите вашу фамилию',
    email: 'Введите ваш email',
  },
  password: {
    new: 'Введите новый пароль',
    confirm: 'Подтвердите новый пароль',
  },
  table: {
    choose: 'Выбрано',
    elmPerPage: 'Элементы на каждой странице',
    items: 'предметов',
    pages: 'страниц',
    from: 'из'
  },
  routes: {
    addCategory: 'Добавить категорию',
    addProduct: 'Добавить продукт',
    addAttribute: 'Добавить атрибут',
    addOrder: 'Добавить заказ',
    editOrder: 'Изменить заказ',
  },
  failed: 'Действие не выполнено',
  success: 'Действие выполнено успешно',
  cancel: 'Действие отменено',
  delete: 'Действие удалено',
  edit: 'Действие изменено',
  save: 'Действие сохранено',
};
