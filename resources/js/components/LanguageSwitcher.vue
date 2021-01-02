<template>
  <div class="lang">
      <select name="" id="" v-model="lang" @change="handleChange($event)">
          <option value="en">En</option>
          <option value="ur">Ur</option>
      </select>
      {{lang1}}
  </div>
</template>

<script>
export default {
   data: () => ({
       lang: '',
       rtl: false
    }),

    methods: {
        handleChange() {
          localStorage.setItem('lang', event.target.value);
          window.location.reload();
        }
    },

    computed: {
        lang1() {
            this.lang = localStorage.getItem('lang') || 'En';
        }
    }
}
</script>

<style>
.lang {
    width: 50px !important;
}
</style>
