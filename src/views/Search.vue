<template>
  <main class="search">
    <search-field
      @search="getSearchResults"
    />
    <section class="search-results">
      <search-result-item
      v-for="result in results"
      :key="result.recipe.uri"
      :image="result.recipe.image"
      :title="result.recipe.label"
      :health-labels="result.recipe.healthLabels"
      :servings="result.recipe.yield" />
    </section>
  </main>
</template>

<script>
import SearchField from '@/components/SearchField'
import SearchResultItem from '@/components/SearchResultItem'
  export default {
    name: 'Search',
    components: {
      SearchField,
      SearchResultItem
    },
    data () {
      return {
        results: [
          {
            recipe: {
              image: 'img/logo.png',
              label: 'Chocolate Cupckacke',
              yield: 2, // servings
              calories: 2,
              uri: 'jkjkj',
              healthLabels: ['vegan', 'vegetarian', 'paleo', 'dairy-free', 'gluten-free', 'wheat-free', 'fat-free', 'low-sugar', 'egg-free', 'peanut-free', 'tree-nut-free', 'soy-free', 'fish-free', 'shellfish-free'],
            }
          },
          {
            recipe: {
              image: 'img/logo.png',
              label: 'Chocolate Cupckacke',
              yield: 2, // servings
              calories: 2,
              uri: 'fdsfs',
              healthLabels: ['vegan', 'vegetarian', 'paleo', 'dairy-free', 'gluten-free', 'wheat-free', 'fat-free', 'low-sugar', 'egg-free', 'peanut-free', 'tree-nut-free', 'soy-free', 'fish-free', 'shellfish-free'],
            }
          }
        ]
      }
    },

    methods: {
      getSearchResults (searchText) {
        this.$axios.get('/search', {
          params: {
            q: searchText
          }
        }).then(function(response) {
          console.log(response.data)
          if(response.data && response.data.length > 0) this.results = response.data
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    padding: 20px;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: auto auto;
  }
</style>
