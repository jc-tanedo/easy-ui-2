<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <h1>🔭 Track new account</h1>
      </v-card>
      <v-card class="pa-8">
        <v-card-title class="headline">
          Account number: {{ accountNumber }}
        </v-card-title>
        <v-card-text> Your balance is: {{ balance }} </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/"> Go back </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  name: 'SpecificAccountPage',

  data() {
    return {
      balance: 0.0,
    }
  },

  computed: {
    accountNumber() {
      return this.$route.params.account
    },

    infoType() {
      return this.$route.params.type
    },

    additionalInfo() {
      return this.$route.params.extra
    },
  },
}
</script>
