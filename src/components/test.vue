<template>
  <div class="test">
    {{ id }}
    <h1>{{ test }}</h1>
    <h1>{{ testData }}</h1>
    this is test
    {{ btnState ? 'True' : 'False'}}
    <div v-for="el in array">
      {{ el.skill }}
    </div>
    <div v-bind:class="{ 'color': classObject.showColor, 'testClass': classObject.showClass }">
      <button v-on:click="changeBtnState">Chage State</button>
      <form @submit.prevent="addName">
        <div>
            <input type="text" placeholder="Name" v-model="name" name="name" v-validate="{ min: 5, required: true }">
           <!--  <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span> -->
            <p class="alert" v-if="errors.has('name')">{{ errors.first( 'name' ) }}</p>
        </div>
        <div>
            <input type="checkbox" v-model="checked" v-on:change="checkboxChange">checked
        </div>
        <button v-on:click="change" v-bind:disabled="btnState">Change Name</button>
        <button v-on:click="getData" >get Data</button>
        <button v-on:click="testPostMethod" >test Post Method</button>

      </form>
    </div>
  </div>
</template>

<script>

import testMethods from '../methods/test'

export default {
  name: 'test',
  props: {
    test: String
  },
  data() {
    return {
      testData: "this is data test",
      btnState: true,
      array: [
          { skill: 1 },
          { skill: 2 }
      ],
      classObject: {
        showColor: true,
        showClass: true
      },
      name: '',
      checked: false,
      id: this.$route.params.id,
      domain: "http://localhost:3979"
    }
  },
  methods: testMethods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../public/css/test.css">

</style>
