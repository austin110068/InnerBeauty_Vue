<template>
  <div class="home">
    <section class="hero is-small mb-6" style="background-color: #FFADB3">
        <div class="hero-body has-text-centered">
            <p class="title mb-6">
                Welcome to Inner Beauty
            </p>
            <p class="subtitle">
                Discover your the deepest secret
            </p>
        </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">Maybe you'll like...</h2>
      </div>

      <ProductBox 
        v-for="product in randomProducts"
        v-bind:key="product.id"
        v-bind:product="product" />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import ProductBox from '@/components/ProductBox'

  export default {
    name: 'Home',
    data() {
      return {
        randomProducts: []
      }
    },
    components: {
      ProductBox
    },
    mounted() {
      this.getRandomProducts();

      document.title = 'Home | Inner Beauty';
    },
    methods: {
      async getRandomProducts() {
        this.$store.commit('setIsLoading', true);

        await axios
          .get('/api/v1/random-products/')
          .then(response => {
            this.randomProducts = response.data
          })
          .catch(error => {
            console.log(error)
          });

        this.$store.commit('setIsLoading', false);
      },
    },
  };
</script>