<template>
  <div class="row">
        <div class="col-12">
            <card>
                <h5 slot="header" class="title">Save new site</h5>
                <div class="row">
                    <div class="col-md-5 pr-md-1">
                        <base-input label="Name"
                                v-model="model.company"
                                placeholder="site name">
                        </base-input>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <base-input label="Xpath"
                                v-model="model.address">
                        </base-input>
                    </div>
                </div>
                <base-button slot="footer" type="primary" fill>Save</base-button>
            </card>
        </div>
    </div>  
</template>
<script>
  export default {
    data() {
      return {
        model: {
          company: '',
          email: '',
        },
      }
    }
  }
</script>
<style>
</style>
