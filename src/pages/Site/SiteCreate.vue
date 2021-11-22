<template>
  <div class="row">
        <div class="col-12">
            <card>
              <form @submit.prevent="create">
                <h5 slot="header" class="title">Save new site</h5>                
                <div class="row">
                  <div class="col-md-5 pr-md-1">
                    <base-input label="Name"
                            v-model="model.name"
                            placeholder="site name">
                    </base-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <base-input label="Link"
                            v-model="model.link"
                            placeholder="site link">
                    </base-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <base-input label="Xpatch"
                            v-model="model.xpatch"
                            placeholder="site xpatch">
                    </base-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <base-input label="Selector"
                            v-model="model.selector"
                            placeholder="site selector">
                    </base-input>
                  </div>
                </div>
                  <base-button slot="footer" native-type="submit" type="primary" fill >Save</base-button>
              </form>
            </card>
        </div>
    </div>  
</template>
<script>
  import SiteService from "@/services/SiteService"

  export default {
    data() {
      return {
        model: {
          name: '',
          link: '',
          xpatch: '',
          selector: '',
        },
      }
    },
    methods: {
      create(){
        console.log(this.model)
        SiteService.create(this.model)
          .then((res) => {            
            if (!res.data.error) {
              this.$notify({
                  type: 'primary', 
                  verticalAlign: 'top', 
                  horizontalAlign: 'right', 
                  message: 'Salvo com sucesso'
                });
              this.clear()
            }
          })
          .catch((err) => {
            this.$notify({
              type: 'danger',
              verticalAlign: 'top',
              horizontalAlign: 'right',
              message: err.message});
            console.error(err);
          });
      },

      clear(){
        this.model.name     = ""
        this.model.link     = ""
        this.model.xpatch   = ""
        this.model.selector = ""
      }
    }
  }
</script>
<style>
</style>
