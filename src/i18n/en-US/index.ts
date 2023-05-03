// This is just an example,
// so you can safely delete all default props below

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
      contactIno: 'Contact information',
      socials: 'Socials',
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
  // Product create

  failed: 'Action failed',
  success: 'Action was successful',
  cancel: 'Action was cancelled',
  delete: 'Action was deleted',
  edit: 'Action was edited',
  save: 'Action was saved',

};
