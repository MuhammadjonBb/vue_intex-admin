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
    },
    form: {
      addTitle: 'Добавить заказ',
      editTitle: 'Изменить заказ',
      addProducts: 'Добавить продукты',
      inputs: {
        name: 'Имя',
        surname: 'Фамилия',
        address: 'Адрес',
        phone: 'Телефон',
        products: 'Продукты',
        status: 'Статус',
        amount: 'Количество',
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
    info: 'Информация о пользователе',
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
    },
    modal: {
      title: 'Изменить информацию',
      socials: {
        add: 'Добавить социальную сеть',
        delete: 'Удалить социальную сеть',
        type: 'Тип социальной сети',
        link: 'Ссылка',
      },
      contacts: {
        address: 'Адрес',
        schedule: 'График работы',
        lang: {
          uz: 'Узбекский язык',
          ru: 'Русский язык',
          en: 'Английский язык',
        }
      }
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
    },
    form: {
      addTitle: 'Добавить категорию',
      editTitle: 'Изменить категорию',
      inputs: {
        categoryName: 'Название категории',
        subCategory: 'Название подкатегории',
        typeName: 'Введите название категории',
        typeSubCategory: 'Введите название подкатегории',
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
  notification: {
    user: {
      userNotAuthorized: 'Пользователь не авторизован',
      tokenExpired: 'Срок действия токена истек, повторите авторизацию',
      authorized: 'Пользователь авторизован',
      authErr: 'Ошибка авторизации',
    },
    users: {
      created: 'Пользователь успешно создан',
      createError: 'Ошибка создания пользователя',
      deleted: 'Пользователь успешно удален',
      deleteError: 'Ошибка удаления пользователя',
      edited: 'Пользователь успешно изменен',
      editError: 'Ошибка изменения пользователя',
    },
    consultation: {
      created: 'Обратная связь успешно создана',
      createError: 'Ошибка создания обратной связи',
      deleted: 'Обратная связь успешно удалена',
      deleteError: 'Ошибка удаления обратной связи',
    },
    categories: {
      deleted: 'Категория успешно удалена',
      deleteError: 'Ошибка удаления категории',
      created: 'Категория успешно создана',
      createError: 'Ошибка создания категории',
      equalError: 'Количество значений в подкатегориях должно совпадать с количеством значений в других подкатегориях'
    },
    orders: {
      created: 'Заказ успешно создан',
      createError: 'Ошибка создания заказа',
    },
    siteSettings: {
      siteInfo: {
        updated: 'Информация сайта успешно обновлена',
        updateError: 'Ошибка обновления информации сайта',
      },
      socials: {
        getError: 'Ошибка получения социальных сетей',
        deleted: 'Социальная сеть успешно удалена',
        deleteError: 'Ошибка удаления социальной сети',
        created: 'Социальная сеть успешно создана',
        createError: 'Ошибка создания социальной сети',
        updated: 'Социальная сеть успешно обновлена',
        updateError: 'Ошибка обновления социальной сети',
      },
      siteLang: {
        updated: 'Язык сайта успешно обновлен',
        updateError: 'Ошибка обновления языка сайта',
      },
      defaultLang: {
        updated: 'Язык по умолчанию успешно обновлен',
        updateError: 'Ошибка обновления языка по умолчанию',
      }
    }

  },
  filterPanel: {
    filter: 'Фильтр',
    sort: 'Сортировка',
    add: 'Добавить',
    search: 'Поиск',
    filterOptions: {
      byName: 'По названию',
      byPrice: 'По цене',
      byIncrease: 'По возрастанию',
    }
  },
  validation: {
    required: 'Это обязательное поле',
  },
  search: 'Поиск',
  failed: 'Действие не выполнено',
  success: 'Действие выполнено успешно',
  cancel: 'Действие отменено',
  delete: 'Действие удалено',
  edit: 'Действие изменено',
  save: 'Действие сохранено',
};
