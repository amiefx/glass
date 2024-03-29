import Vue from 'vue'
import VueRouter from 'vue-router'

  import auth from './middleware/auth'
  import admin from './middleware/admin'
  import guest from './middleware/guest'
 import middlewarePipeline from './kernel/middlewarePipeline'

import store from '../store'



Vue.use(VueRouter)

const routes = [

    // {
    //     path: '/',
    //     name: 'home',
    //     component: () => import(/* webpackPreload: true */ '../views/Home.vue'),
    //     meta: {
    //                layout: 'admin'
    //            }
    // },
     { path: '/', redirect: '/admin/dashboard' },
    // {
    //     path: '/painting-decorating',
    //     name: 'painting',
    //     component: () => import(/* webpackPreload: true */ '../views/Painting.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },
    // { path: '/our-services', redirect: '/painting-decorating' },
    // {
    //     path: '/interior-design',
    //     name: 'Interior',
    //     component: () => import(/* webpackPreload: true */ '../views/Interior.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },
    // {
    //     path: '/property-maintenance',
    //     name: 'property-maintenance',
    //     component: () => import(/* webpackPreload: true */ '../views/Maintenance.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },
    // {
    //     path: '/cleaning-services',
    //     name: 'cleaning-services',
    //     component: () => import(/* webpackPreload: true */ '../views/Cleaning.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },
    // {
    //     path: '/reviews',
    //     name: 'reviews',
    //     component: () => import(/* webpackPreload: true */ '../views/Reviews.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },
    // {
    //     path: '/about-us',
    //     name: 'about-us',
    //     component: () => import(/* webpackPreload: true */ '../views/About.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },
    // {
    //     path: '/feedback',
    //     name: 'feedback',
    //     component: () => import(/* webpackPreload: true */ '../views/Feedback.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },

    // // admin section
    {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('../views/admin/Dashboard.vue'),
        meta: {
            layout: 'admin',
            middleware: [
              auth
          ]

        }
    },
    {
        path: '/admin/customers',
        name: 'customers',
        component: () => import('../views/admin/Customers.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
      path: '/admin/suppliers',
      name: 'customers',
      component: () => import('../views/admin/Suppliers.vue'),
      meta: {
          layout: 'admin',
          middleware: [
              auth
          ]
      }
  },
    {
        path: '/admin/invoice',
        name: 'delivery',
        component: () => import('../views/admin/Invoice.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/company',
        name: 'company',
        component: () => import('../views/admin/Company.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/brands',
        name: 'brands',
        component: () => import('../views/admin/Brands.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/slabs',
        name: 'slabs',
        component: () => import('../views/admin/Slab.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/test',
        name: 'transaction',
        component: () => import('../views/admin/PurchaseOrders.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/cash',
        name: 'cash',
        component: () => import('../views/admin/Cash.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/bank',
        name: 'bank',
        component: () => import('../views/admin/Bank.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/transaction',
        name: 'transaction',
        component: () => import('../views/admin/Transfer.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/adjustqty',
        name: 'adjustqty',
        component: () => import('../views/admin/AdjustQty.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/employees',
        name: 'employees',
        component: () => import('../views/admin/Employee.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/categories',
        name: 'categories',
        component: () => import('../views/admin/Categories.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/units',
        name: 'units',
        component: () => import('../views/admin/Units.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/receivables',
        name: 'receivables',
        component: () => import('../views/admin/Receivables.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/payables',
        name: 'payables',
        component: () => import('../views/admin/Payables.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/expenseitems',
        name: 'expenseitems',
        component: () => import('../views/admin/ExpenseItem.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/expenses',
        name: 'expenses',
        component: () => import('../views/admin/Expense.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/purchases',
        name: 'purchases',
        component: () => import('../views/admin/Purchases.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/users',
        name: 'users',
        component: () => import('../views/admin/Users.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/products',
        name: 'products',
        component: () => import('../views/admin/Products.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/panelsize',
        name: 'panels',
        component: () => import('../views/admin/Panels.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/report/cashreport',
        name: 'cash-report',
        component: () => import('../views/admin/report/Cash.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/report/bankreport',
        name: 'bank-report',
        component: () => import('../views/admin/report/Bank.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/report/salesreport',
        name: 'sales-report',
        component: () => import('../views/admin/report/Sales.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/report/purchasesreport',
        name: 'purchases-report',
        component: () => import('../views/admin/report/Purchases.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/report/expensesreport',
        name: 'expense-report',
        component: () => import('../views/admin/report/Expenses.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/report/inventoryreport',
        name: 'inventory-report',
        component: () => import('../views/admin/report/Inventory.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    // {
    //     path: '/admin/orders',
    //     name: 'admin-orders',
    //     component: () => import('../views/admin/orders/Index.vue'),
    //     meta: {
    //         layout: 'admin',
    //         middleware: [
    //             auth
    //         ]
    //     }
    // },
    // {
    //     path: '/admin/orders/:id',
    //     name: 'admin-order',
    //     component: () => import('../views/admin/orders/Id.vue'),
    //     meta: {
    //         layout: 'admin',
    //         middleware: [
    //             auth
    //         ]
    //     }
    // },
    {
        path: '/admin/invoice/print/:id',
        name: 'admin-order',
        component: () => import('../views/admin/orders/print/Id.vue'),
        meta: {
            layout: '',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/receipt/print/:id',
        name: 'admin-order',
        component: () => import('../views/admin/ReceiptPrint.vue'),
        meta: {
            layout: '',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/invoice/print/a4/:id',
        name: 'admin-order',
        component: () => import('../views/admin/orders/print/A4Id.vue'),
        meta: {
            layout: '',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/invoice/print/tmgatepass/:id',
        name: 'gatepass-a4',
        component: () => import('../views/admin/orders/print/TmGatepass.vue'),
        meta: {
            layout: '',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/invoice/print/a4gatepass/:id',
        name: 'gatepass-a4',
        component: () => import('../views/admin/orders/print/A4Gatepass.vue'),
        meta: {
            layout: '',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/invoice/edit/:id',
        name: 'order-edit',
        component: () => import('../views/admin/InvoiceEdit.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/invoice/view/:id',
        name: 'order-view',
        component: () => import('../views/admin/InvoiceView.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/invoice-pending/view/:id',
        name: 'order-pending-view',
        component: () => import('../views/admin/InvoicePending.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/invoice/approvals',
        name: 'order-approve',
        component: () => import('../views/admin/InvoiceApprovals.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/purchase-order/view/:id',
        name: 'po-view',
        component: () => import('../views/admin/PurchaseOrderView.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/purchase-order/print/:id',
        name: 'admin-order',
        component: () => import('../views/admin/purchase-order/print/Id.vue'),
        meta: {
            layout: '',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/purchase-order/edit/:id',
        name: 'po-view',
        component: () => import('../views/admin/PurchaseOrderEdit.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/salaries',
        name: 'admin-order',
        component: () => import('../views/admin/Salaries.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/admin/bankdetails',
        name: 'admin-order',
        component: () => import('../views/admin/BankDetails.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    // {
    //     path: '/admin/reports',
    //     name: 'admin-reports',
    //     component: () => import('../views/admin/Reports.vue'),
    //     meta: {
    //         layout: 'admin',
    //         middleware: [
    //             auth
    //         ]
    //     }
    // },


    // // Other Pages
    // {
    //     path: '/about',
    //     name: 'about-us',
    //     component: () => import('../views/pages/About.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },
    // {
    //     path: '/contact',
    //     name: 'contact-us',
    //     component: () => import('../views/pages/Contact.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },
    // {
    //     path: '/delivery',
    //     name: 'deliveries',
    //     component: () => import('../views/pages/Delivery.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },
    // {
    //     path: '/faqs',
    //     name: 'faqss',
    //     component: () => import('../views/pages/Faqs.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },
    // {
    //     path: '/order-return',
    //     name: 'order-returns',
    //     component: () => import('../views/pages/Order-returns.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },
    // {
    //     path: '/privacy-plicy',
    //     name: 'privacy-plicy',
    //     component: () => import('../views/pages/Privacy.vue'),
    //     meta: {
    //         layout: 'mardom'
    //     }
    // },

    // Accounts pages
    {
        path: '/account',
        name: 'account',
        component: () => import('../views/account/Index.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth
            ]
        }
    },
    // {
    //     path: '/account/orders',
    //     name: 'my-orders',
    //     component: () => import('../views/account/Orders.vue'),
    //     meta: {
    //         layout: 'khod',
    //         middleware: [
    //             auth
    //         ]
    //     }
    // },
    // {
    //     path: '/account/reviews',
    //     name: 'my-reviews',
    //     component: () => import('../views/account/reviews.vue'),
    //     meta: {
    //         layout: 'khod',
    //         middleware: [
    //             auth
    //         ]
    //     }
    // },
    // {
    //     path: '/account/wishlist',
    //     name: 'my-wishlist',
    //     component: () => import('../views/account/wishlist.vue'),
    //     meta: {
    //         layout: 'khod',
    //         middleware: [
    //             auth
    //         ]
    //     }
    // },
    // {
    //     path: '/account/order/:id',
    //     name: 'my-sing-order',
    //     component: () => import('../views/account/order/id.vue'),
    //     meta: {
    //         layout: 'khod',
    //         middleware: [
    //             auth
    //         ]
    //     }
    // },

    // // Auth and register
    {
        path: '/signin',
        name: 'signin',
        component: () => import('../views/Auth/SignIn.vue'),
        meta: {
            layout: 'default',
            middleware: [
                guest
            ]
        }
    },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: () => import('../views/auth/register.vue'),
    //     meta: {
    //         layout: 'mardom',
    //         middleware: [
    //             guest
    //         ]
    //     }
    // },
    // {
    //     path: '/forgot-password',
    //     name: 'forgot-password',
    //     component: () => import('../views/auth/forgot-password.vue'),
    //     meta: {
    //         layout: 'mardom',
    //         middleware: [
    //             guest
    //         ]
    //     }
    // },
    // {
    //     path: '/password-reset',
    //     name: 'password-reset',
    //     component: () => import('../views/auth/password-reset.vue'),
    //     meta: {
    //         layout: 'mardom',
    //         middleware: [
    //             guest
    //         ]
    //     }
    // },

    // {
    //     path: '/404',
    //     component: () => import('../views/Error.vue'),
    // },
    { path: '*', redirect: '/signin' },

  ]

  const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',
  })

//   router.beforeEach((to, from, next) => {
//       const token = localStorage.getItem('token') || null
//         window.axios.defaults.headers['Authorization'] = 'Bearer ' + token;
//         next();
//     })


// Method 1: Defining middleware in routes
router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
      return next()
    }

    const middleware = to.meta.middleware

    const context = {
      to,
      from,
      next,
      router,
      store
    }

    return middleware[0]({
      ...context, next: middlewarePipeline(context, middleware, 1)
    })
  })


export default router
