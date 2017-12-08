
<template>
  <div>
    <autocomplete
      url="http://127.0.0.1:8000/api/getCustomerAccount"
      anchor="id"
      label="user_email"
      name="autocomplete"
      :classes="{ input: 'form-control', wrapper: 'input-wrapper'}"
      :process="processJSON"
      :onSelect="handleSelect"
    >
    </autocomplete>

    <pre v-if="preContent" :style="preStyle">
      <b>Selected Data:</b>
      {{ preContent }}
    </pre>
  </div>
</template>

<script>

import Autocomplete from 'vue2-autocomplete-js'
  // require("../../../dist/style/vue2-autocomplete.css")
  // var Autocomplete = require('vue2-autocomplete-js');

  export default {
    components: {
        Autocomplete
    },


    data () {
      return  {
        preContent: "",
        preStyle: {
          background: "#f2f2f2",
          fontFamily: "monospace",
          fontSize: "1em",
          display: "inline-block",
          padding: "15px 7px",
        }
      }
    },

    methods: {
      processJSON(json) {
        return json.results;
      },

      handleSelect(data) {
        this.preContent = JSON.stringify(data, null, 4)
      }
    }
  };

</script>
