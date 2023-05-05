export default {
  // Product list page
  product: {
    title: 'Product list',

    // Table header
    productName: 'Product name',
    productCost: 'Cost',
    productCategory: 'Category',
    productDiscount: 'Discount',
    productQuantity: 'Quantity',
    productAction: 'Action',
    productStatus: 'Status',
    // table body
    category: {
      acces: 'Accessories',
      frame: 'Frame',
      typeThree: 'Inflatable',
    },
    productCreate: {
      title: 'Information and image',
    },
  },
  aside: {
    items: {
      categories: 'Categories',
      products: 'Products',
      orders: 'Orders',
      users: 'Users',
      siteSettings: 'Site settings',
      exit: 'Exit',
      productList: 'Product list',
      attributes: 'Attributes',
      feedback: 'Consultations',
    }
  },
  orders: {
    title: 'Orders',
    table: {
      tableHead: {
        orderNum: 'Order №',
        clientName: 'Client name',
        phone: 'Phone',
        address: 'Address',
        products: 'Products',
        cost: 'Cost',
        orderTime: 'Order time',
        status: 'Status',
      }
    },
    form: {
      addTitle: 'Add order',
      editTitle: 'Edit order',
      addProducts: 'Add products',
      inputs: {
        name: 'Name',
        surname: 'Surname',
        phone: 'Phone',
        address: 'Address',
        products: 'Products',
        amount: 'Amount',
        status: 'Status',
      }
    }
  },
  consultations: {
    title: 'Consultation',
    table: {
      tableHead: {
        name: 'Name',
        phone: 'Phone',
        apllicationTime: 'Application time',
      }
    },
    modal: {
      addTitle: 'Add consultation',
      editTitle: 'Edit consultation',
      inputs: {
        name: 'Name',
      }
    }
  },
  users: {
    title: 'Users',
    info: 'User information',
    table: {
      tableHead: {
        name: 'Name',
        phone: 'Phone',
        role: 'User role',
        status: 'Status',
        registerDate: 'Registration date',
        birthday: 'Birthday',
      }
    },
    modal: {
      addTitle: 'Add user',
      editTitle: 'Edit user',
      loadAvatar: 'Upload avatar',
      loadPhoto: 'Upload photo',
      load: 'Upload',
      inputs: {
        name: 'Name',
        surname: 'Surname',
        birthday: 'Birthday',
        role: 'User role',
        status: 'Status',
      }
    }
  },
  siteSettings: {
    title: 'Site settings',
    address: 'Address',
    phone: 'Phone',
    schedule: 'Work schedule',
    langs: {
      ru: 'Russian',
      uz: 'Uzbek',
      en: 'English',
    },
    subTitles: {
      defaultLang: 'Default language',
      siteLangs: 'Site languages',
      contactInfo: 'Contact information',
      socials: 'Socials',
    },
    modal: {
      title: 'Edit information',
      contacts: {
        address: 'Address',
        schedule: 'Work schedule',
        lang: {
          uz: 'Uzbek language',
          ru: 'Russian language',
          en: 'English language',
        }
      },
      socials: {
        add: 'Add social network',
        delete: 'Delete social network',
        type: 'Type of social network',
        link: 'Link',
      }
    }
  },
  categories: {
    title: 'Categories',
    table: {
      tableHead: {
        categoryName: 'Category name',
        subCategoryAmount: 'Subcategory amount',
        subCategories: 'Subcategories',
      }
    },
    form: {
      addTitle: 'Add category',
      editTitle: 'Edit category',
      inputs: {
        categoryName: 'Category name',
        subCategory: 'Subcategory name',
        typeName: 'Type category name',
        typeSubCategory: 'Type subcategory name',
      }
    }
  },
  btn: {
    save: 'Save',
    add: 'Add',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
  },
  phoneInput: {
    name: 'Phone number',
  },
  placeholder: {
    name: 'Type your name',
    surname: 'Type your surname',
    email: 'Type your email',
  },
  password: {
    new: 'Type new password',
    confirm: 'Confirm new password',
  },
  table: {
    choose: 'Chose',
    elmPerPage: 'Elements per page',
    items: 'items',
    pages: 'pages',
    from: 'from',
  },
  routes: {
    addCategory: 'Add category',
    addProduct: 'Add product',
    addAttribute: 'Add attribute',
    addOrder: 'Add order',
    editOrder: 'Edit order',
  },
  notification: {
    user: {
      userNotAuthorized: 'User is not authorized',
      tokenExpired: 'Token expired, please login again',
      authorized: 'You are authorized successfully',
      authErr: 'Authorization error',
    },
    consultation: {
      created: 'Consultation was created successfully',
      createError: 'Error on creating consultation',
      deleted: 'Consultation was deleted successfully',
      deleteError: 'Error on deleting consultation',
    },
    categories: {
      created: 'Category was created successfully',
      createError: 'Error on creating category',
      equalError: 'The number of values in subcategories must match the number of values in other subcategories',
      deleted: 'Category was deleted successfully',
      deleteError: 'Error on deleting category',
    },
    orders: {
      created: 'Order was created successfully',
      createError: 'Error on creating order',
    },
    siteSettings: {
      siteInfo: {
        updated: 'Site information was updated successfully',
        updateError: 'Error on updating site information',
      },
      socials: {
        getError: 'Error on getting socials',
        deleted: 'Social network was deleted successfully',
        deleteError: 'Error on deleting social network',
        created: 'Social network was created successfully',
        createError: 'Error on creating social network',
        updated: 'Social network was updated successfully',
        updateError: 'Error on updating social network',
      },
      siteLang: {
        updated: 'Site language was updated successfully',
        updateError: 'Error on updating site language',
      },
      defaultLang: {
        updated: 'Default language was updated successfully',
        updateError: 'Error on updating default language',
      }
    }
  },
  filterPanel: {
    filter: 'Filter',
    sort: 'Sorting',
    add: 'Add',
    search: 'Search',
    filterOptions: {
      byName: 'By name',
      byPrice: 'By price',
      byIncrease: 'By increase',
    }
  },
  validation: {
    required: 'This field is required',
  },
  search: 'Search',
  failed: 'Action failed',
  success: 'Action was successful',
  cancel: 'Action was cancelled',
  delete: 'Action was deleted',
  edit: 'Action was edited',
  save: 'Action was saved',

};
