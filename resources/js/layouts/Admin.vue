<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :right="$vuetify.rtl"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="item in items1"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>

        <!-- accounts -->
        <v-list-group :value="false" prepend-icon="mdi-account-cash-outline">
          <template v-slot:activator>
            <v-list-item-title>Accounts</v-list-item-title>
          </template>

          <v-list-item
            v-for="(item, i) in accounts"
            :key="i"
            link
            dense
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- procut Management -->
        <v-list-group :value="false" prepend-icon="mdi-shopping">
          <template v-slot:activator>
            <v-list-item-title>Product Management</v-list-item-title>
          </template>

          <v-list-item
            v-for="(item, i) in products"
            :key="i"
            link
            dense
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- Customers -->
        <v-list-group :value="false" prepend-icon="mdi-account-arrow-left">
          <template v-slot:activator>
            <v-list-item-title>Customers</v-list-item-title>
          </template>

          <v-list-item
            v-for="(item, i) in custs"
            :key="i"
            link
            dense
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- suppliers -->
        <v-list-group :value="false" prepend-icon="mdi-account-arrow-left">
          <template v-slot:activator>
            <v-list-item-title>Suppliers</v-list-item-title>
          </template>

          <v-list-item
            v-for="(item, i) in suppliers"
            :key="i"
            link
            dense
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- Employees -->
        <v-list-group :value="false" prepend-icon="mdi-account-group-outline">
          <template v-slot:activator>
            <v-list-item-title>Employees</v-list-item-title>
          </template>

          <v-list-item
            v-for="(item, i) in employees"
            :key="i"
            link
            dense
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- Expenses -->
        <v-list-group :value="false" prepend-icon="mdi-cash-minus">
          <template v-slot:activator>
            <v-list-item-title>Expenses</v-list-item-title>
          </template>

          <v-list-item
            v-for="(item, i) in expenses"
            :key="i"
            link
            dense
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- users -->
        <v-list-group
          :value="false"
          prepend-icon="mdi-account-multiple-outline"
        >
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
          </template>

          <v-list-item
            v-for="(item, i) in users"
            :key="i"
            link
            dense
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- company info -->
        <v-list-item
          v-for="item in company"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <login-avatar />
      <language-switcher />
    </v-app-bar>
    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      {{ lang1 }}
    </v-footer>
  </v-app>
</template>

<script>
import LoginAvatar from "../components/LoginAvatar";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    LoginAvatar,
    LanguageSwitcher,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/admin/dashboard",
        },
        {
          icon: "mdi-account-arrow-left",
          title: "Customers",
          to: "/admin/customers",
        },
        {
          icon: "mdi-account-arrow-right",
          title: "Suppliers",
          to: "/admin/suppliers",
        },
      ],

      items1: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/admin/dashboard",
        },
        {
          icon: "mdi-point-of-sale",
          title: "Sales",
          to: "/admin/invoice",
        },
        {
          icon: "mdi-cart-arrow-right",
          title: "Purchase",
          to: "/admin/purchases",
        },
      ],

      products: [
        {
          icon: "mdi-collage",
          title: "Category",
          to: "/admin/categories",
        },
        {
          icon: "mdi-certificate",
          title: "Brand",
          to: "/admin/brands",
        },
        {
          icon: "mdi-pound-box-outline",
          title: "Slab",
          to: "/admin/slabs",
        },
        {
          icon: "mdi-pound-box-outline",
          title: "Units",
          to: "/admin/units",
        },
        {
          icon: "mdi-barcode",
          title: "Products",
          to: "/admin/products",
        },
        {
          icon: "mdi-check-circle-outline",
          title: "Adjust Qty",
          to: "/admin/adjustqty",
        },
      ],

      custs: [
        {
          icon: "mdi-account-arrow-left",
          title: "Customers",
          to: "/admin/customers",
        },
        {
          icon: "mdi-database-export",
          title: "Receivables",
          to: "/admin/receivables",
        },
      ],

      suppliers: [
        {
          icon: "mdi-account-arrow-right",
          title: "Suppliers",
          to: "/admin/suppliers",
        },
        {
          icon: "mdi-database-import",
          title: "Payables",
          to: "/admin/payables",
        },
      ],

      accounts: [
        {
          icon: "mdi-cash",
          title: "Cash Register",
          to: "/admin/cash",
        },
        {
          icon: "mdi-bank",
          title: "Bank",
          to: "/admin/bank",
        },
        {
          icon: "mdi-bank-transfer",
          title: "Transaction",
          to: "/admin/transaction",
        },
      ],

      users: [
        {
          icon: "mdi-account-multiple-plus",
          title: "Users",
          to: "/admin/users",
        },
        {
          icon: "mdi-account-box",
          title: "Profile",
          to: "/account",
        },
      ],

      employees: [
        {
          icon: "mdi-account-tie",
          title: "Employees",
          to: "/admin/employees",
        },
        {
          icon: "mdi-cash-usd-outline",
          title: "Salary",
          to: "/admin/salaries",
        },
      ],

      expenses: [
        {
          icon: "mdi-animation",
          title: "Expense Items",
          to: "/admin/expenseitems",
        },
        {
          icon: "mdi-cash-minus",
          title: "Expense",
          to: "/admin/expenses",
        },
      ],

      company: [
        {
          icon: "mdi-cogs",
          title: "Company",
          to: "/admin/company",
        },
      ],

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Karim Glass and Aluminum",
      lang: localStorage.getItem("lang"),

      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"],
      ],
    };
  },

  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),

    logout() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "signin",
        });
      });
    },
  },

  computed: {
    lang1() {
      if (this.lang == "ur") {
        this.$vuetify.rtl = true;
        document.documentElement.dir = "rtl";
      } else {
        this.$vuetify.rtl = false;
      }
    },
  },
};
</script>
