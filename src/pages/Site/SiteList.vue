<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title">
        <div class="table">
          <base-table
            :data="table1.data"
            :columns="table1.columns"
            :meta="table1.meta"
            thead-classes="text-primary"
          >
          </base-table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { BaseTable } from "@/components";
import SiteService from "@/services/SiteService";

export default {
  name: "site-list",
  components: {
    BaseTable,
  },
  data() {
    return {
      table1: {
        title: "Registered Sites",
        columns: ["name", "run", "error", "created"],
        data: [],
        meta: {},
      },
    };
  },
  created() {
    this.getSites();
  },
  methods: {
    getSites() {
      SiteService.list()
        .then((res) => {
          if (!res.data.error) {
            this.table1.data = res.data.data;
            this.table1.meta = res.data.meta.pagination;
          }
        })
        .catch((err) => {
          this.$notify({
            type: "danger",
            verticalAlign: "top",
            horizontalAlign: "right",
            message: err.message,
          });
          console.error(err);
        });
    },
  },
};
</script>
<style>
</style>
