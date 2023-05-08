export default {
  product: {
    title: "Maxsulotlar ro'yxati",
    productCreate: {
      title: 'Ma\'lumot va rasm',
      button: 'Qo\'shing',
    }
  },
  aside: {
    items: {
      categories: 'Kategoriyalar',
      products: 'Maxsulotlar',
      orders: 'Buyurtmalar',
      users: 'Foydalanuvchilar',
      siteSettings: 'Sayt sozlamalari',
      exit: 'Chiqish',
      productList: 'Maxsulotlar ro\'yxati',
      attributes: 'Atributlar',
      feedback: 'Qayta aloqa',
    },
  },
  orders: {
    title: 'Buyurtmalar',
    table: {
      tableHead: {
        orderNum: 'Buyurtma №',
        clientName: 'Foydalanuvchi ismi',
        phone: 'Telefon raqami',
        address: 'Manzil',
        products: 'Maxsulotlar',
        cost: 'Jami narhi',
        orderTime: 'Buyurtma vaqti',
        status: 'Status',
      }
    },
    form: {
      addTitle: 'Qo\'shish',
      editTitle: 'Qo\'shish',
      addProducts: 'Produkt qo\'shish',
      inputs: {
        name: 'Ismi',
        surname: 'Familiya',
        address: 'Manzil',
        phone: 'Telefon raqami',
        products: 'Maxsulotlar',
        status: 'Status',
        amount: 'Soni',
      }
    }
  },
  consultations: {
    title: 'Qayta aloqa',
    table: {
      tableHead: {
        name: 'Ismi',
        phone: 'Telefon raqami',
        apllicationTime: 'Ilova vaqti',
      }
    },
    modal: {
      addTitle: 'Qayta aloqa qo\'shish',
      editTitle: 'Qayta aloqa Qo\'shish',
      inputs: {
        name: 'Ismi',
      }
    }
  },
  users: {
    title: 'Foydalanuvchilar',
    info: 'Foydalanuvchi ma\'lumoti',
    table: {
      tableHead: {
        name: 'Ismi',
        phone: 'Telefon raqami',
        role: 'Rol',
        status: 'Status',
        registerDate: 'Qo\'shilgan vaqti',
        birthday: 'Tug\'ilgan sana',
      },
    },
    modal: {
      addTitle: 'Qo\'shish',
      editTitle: 'Qo\'shish',
      load: 'Qo\'shish',
      loadAvatar: 'Avatar qo\'shish',
      loadPhoto: 'Rasm qo\'shish',
      inputs: {
        name: 'Ismi',
        surname: 'Familiya',
        birthday: 'Tug\'ilgan sana',
        role: 'Rol',
        status: 'Status',
      }
    }
  },
  siteSettings: {
    title: 'Sayt sozlamalari',
    address: 'Manzil',
    phone: 'Telefon raqami',
    schedule: 'Ish jadvali',
    langs: {
      uz: 'O\'zbekcha',
      ru: 'Ruscha',
      en: 'Inglizcha',
    },
    subTitles: {
      defaultLang: 'Standart tili',
      siteLangs: 'Sayt tillari',
      contactInfo: 'Kontaktlar ma\'lumoti',
      socials: 'Ijtimoiy tarmoqlar',
    },
    modal: {
      title: 'Ma\'lumotlarni o\'zgartirish',
      socials: {
        add: 'Ijtimoiy tarmoq qo\'shish',
        delete: 'Ijtimoiy tarmoqni o\'chirish',
        type: 'Ijtimoiy tarmoq turi',
        link: 'Havola',
      },
      contacts: {
        address: 'Manzil',
        schedule: 'Ish jadvali',
        lang: {
          uz: 'O\'zbek tili',
          ru: 'Rus tili',
          en: 'Ingliz tili',
        }
      }
    }
  },
  categories: {
    title: 'Kategoriyalar',
    table: {
      tableHead: {
        categoryName: 'Kategoriya nomi',
        subCategoryAmount: 'Subkategoriyalar soni',
        subCategories: 'Subkategoriyalar',
      },
    },
    form: {
      addTitle: 'Kategoriya qo\'shish',
      editTitle: 'Kategoriyani o\'zgartirish',
      inputs: {
        categoryName: 'Kategoriya nomi',
        subCategory: 'Subkategoriyalar nomi',
        typeName: 'Kategoriya nomini kiriting',
        typeSubCategory: 'Subkategoriya nomini kiriting',
      }
    }
  },
  btn: {
    save: 'Saqlash',
    add: 'Qo\'shish',
    cancel: 'Bekor qilish',
    edit: 'O\'zgartirish',
    delete: 'O\'chirish',
  },
  phoneInput: {
    name: 'Telefon raqami',
  },
  placeholder: {
    name: 'Ismingizni kiriting',
    surname: 'Familiyangizni kiriting',
    email: 'Emailni kiriting',
  },
  password: {
    new: 'Yangi parolni kiriting',
    confirm: 'Yangi parolni tasdiqlang',
  },
  table: {
    choose: 'Tanlangan',
    elmPerPage: 'Har bir sahifadagi elementlar',
    items: 'buyumlar',
    pages: 'sahifalar',
    from: 'dan',
  },
  routes: {
    addCategory: 'Kategoriya qo\'shish',
    addProduct: 'Maxsulot qo\'shish',
    addOrder: 'Buyurtma qo\'shish',
    addAttribute: 'Atribut qo\'shish',
    editOrder: 'Buyurtmani o\'zgartirish',
  },
  notification: {
    user: {
      userNotAuthorized: 'Foydalanuvchi ro\'yxatdan o\'tmagan',
      tokenExpired: 'Token vaqti tugadi, ro\'yxatdan qaytadan o\'ting',
      authorized: 'Siz ro\'yxatdan o\'tdingiz',
      authErr: 'Ro\'yxatdan o\'tishda xatolik',
    },
    users: {
      created: 'Foydalanuvchi qo\'shildi',
      createError: 'Foydalanuvchi qo\'shishda xatolik',
      deleted: 'Foydalanuvchi o\'chirildi',
      deleteError: 'Foydalanuvchi o\'chirishda xatolik',
      edited: 'Foydalanuvchi o\'zgartirildi',
      editError: 'Foydalanuvchi o\'zgartirishda xatolik',
    },
    consultation: {
      created: 'Qayta aloqa qo\'shildi',
      createError: 'Qayta aloqa qo\'shishda xatolik',
      deleted: 'Qayta aloqa o\'chirildi',
      deleteError: 'Qayta aloqa o\'chirishda xatolik',
    },
    categories: {
      deleted: 'Kategoriya o\'chirildi',
      deleteError: 'Kategoriya o\'chirishda xatolik',
      created: 'Kategoriya qo\'shildi',
      createError: 'Kategoriya qo\'shishda xatolik',
      equalError: 'Pastki kategorialardagi qiymatlar soni boshqa kichik kategorialardagi qiymatlar soniga mos kelishi kerak'
    },
    orders: {
      created: 'Buyurtma qo\'shildi',
      createError: 'Buyurtma qo\'shishda xatolik',
    },
    siteSettings: {
      siteInfo: {
        updated: 'Sayt sozlamalari o\'zgartirildi',
        updateError: 'Sayt sozlamalari o\'zgartirishda xatolik',
      },
      socials: {
        getError: 'Ijtimoiy tarmoqlar yuklashda xatolik',
        deleted: 'Ijtimoiy tarmoq o\'chirildi',
        deleteError: 'Ijtimoiy tarmoq o\'chirishda xatolik',
        created: 'Ijtimoiy tarmoq qo\'shildi',
        createError: 'Ijtimoiy tarmoq qo\'shishda xatolik',
        updated: 'Ijtimoiy tarmoq o\'zgartirildi',
        updateError: 'Ijtimoiy tarmoq o\'zgartirishda xatolik',
      },
      siteLang: {
        updated: 'Sayt tili o\'zgartirildi',
        updateError: 'Sayt tilini o\'zgartirishda xatolik',
      },
      defaultLang: {
        updated: 'Standart til o\'zgartirildi',
        updateError: 'Standart tilini o\'zgartirishda xatolik',
      }
    }
  },
  filterPanel: {
    filter: 'Filtr',
    sort: 'Tartiblash',
    add: 'Qo\'shish',
    search: 'Qidirish',
    filterOptions: {
      byName: 'Ismi bo\'yicha',
      byPrice: 'Narxi bo\'yicha',
      byIncrease: 'Qiymati bo\'yicha',
    }
  },
  validation: {
    required: 'Ushbu qator to\'ldirilishi shart',
    fail: 'Maydonlar noto‘g‘ri kiritilgan, xatolarni tekshiring va qayta urinib ko‘ring',
    passwordNotMatch: 'Parollar mos kelmayapti',
    email: 'Email noto‘g‘ri kiritilgan',
  },
  search: 'Qidirish',
  failed: 'Действие не выполнено',
  success: 'Действие выполнено успешно',
  cancel: 'Действие отменено',
  delete: 'Действие удалено',
  edit: 'Действие изменено',
  save: 'Действие сохранено',
};
