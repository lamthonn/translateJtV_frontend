<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Search..." />
      </div>
    </div>
  </div>
  <div v-for="sentence in sentence_list" v-bind:key="sentence.id">
    <h2>{{ sentence.sentenceJV }}</h2>
    <h3>{{ sentence.sentenceVN }}</h3>
    <p>{{ sentence.style }}</p>
  </div>
  <resultView />
</template>

<script>
import Result from "./resultView.vue";
// @ is an alias to /src
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      sentence_list: [],
    };
  },
  components: {
    resultView: Result,
  },

  mounted() {
    this.getSentence_list();
  },

  methods: {
    getSentence_list() {
      axios
        .get("/api/v1/app/sentence_list/")
        .then((Response) => {
          this.sentence_list = Response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid black;
}
.container {
  margin-top: 5rem;
}
</style>
