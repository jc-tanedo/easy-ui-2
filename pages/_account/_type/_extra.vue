<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <h1>💰 Your current balance</h1>
      </v-card>
      <v-card class="pa-8">
        <v-card-title class="headline">
          Account number: {{ accountNumber }}
        </v-card-title>
        <v-card-text>
          <h1 v-if="!errors.length">₱ {{ balance }}</h1>
          <div v-else>
            <div v-for="error in errors" :key="error" class="text-red-500">
              {{ error }}
            </div>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/">Check another</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  name: 'SpecificAccountPage',

  data() {
    return {
      balance: 'Loading...' as number | string,
      errors: [] as any[],
    }
  },

  computed: {
    accountNumber(): string {
      return this.$route.params.account
    },

    infoType(): string {
      return this.$route.params.type
    },

    additionalInfo(): string {
      return this.$route.params.extra
    },
  },

  mounted() {
    this.fetchBalance()
  },

  methods: {
    async fetchBalance() {
      try {
        const response = await axios.get('/api/get-balance', {
          params: {
            account: this.accountNumber,
            type: this.infoType,
            extra: this.additionalInfo,
          },
        })
        this.balance = response.data.balance
      } catch (error: any) {
        this.errors.push(error.message)
      }
    },
  },
})
</script>
