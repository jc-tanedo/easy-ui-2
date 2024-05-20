<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <h1>🔭 Track new account</h1>
      </v-card>
      <v-card class="pa-8">
        <v-card-title class="headline"> Input your details below </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="accountNumber"
            label="Account number"
            outlined
          />
          <v-radio-group v-model="additionalInfoType" row>
            <v-radio
              v-for="option in infoTypeOptions"
              :key="option.value"
              :label="option.text"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
          <v-text-field v-model="extra" :label="extraLabel" outlined />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            :disabled="hasMissingFields"
            color="primary"
            nuxt
            :to="balanceRoute"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      accountNumber: '',
      extra: '',
      additionalInfoType: 1,
      infoTypeOptions: [
        { text: 'Plate Number', value: 1 },
        { text: 'Email', value: 2 },
        { text: 'Contact Number', value: 3 },
      ],
    }
  },

  computed: {
    extraLabel() {
      return {
        1: 'Plate number',
        2: 'Email',
        3: 'Contact number',
      }[this.additionalInfoType]
    },

    balanceRoute() {
      return `${this.accountNumber}/${this.additionalInfoType}/${this.extra}`
    },

    hasMissingFields() {
      return !this.accountNumber || !this.extra
    },
  },
}
</script>
