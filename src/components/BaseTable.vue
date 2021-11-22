<template>
  <div>
    <table class="table tablesorter" :class="tableClass">
      <thead :class="theadClasses">
        <tr>
          <slot name="columns">
            <th v-for="column in columns" :key="column">{{ column }}</th>
            <th>Actions</th>
          </slot>
        </tr>
      </thead>
      <tbody :class="tbodyClasses">
        <tr v-for="(item, index) in table ? table : data" :key="index">
          <slot :row="item">
            <td
              v-for="(column, index) in columns"
              :key="index"
              v-if="hasValue(item, column)"
            >
              {{ itemValue(item, column) }}
            </td>
            <td class="text-left">
              <!-- <base-button type="info" size="sm" icon>  
              <i class="tim-icons icon-single-02"></i>
            </base-button>-->
              <!-- <base-button class="mr-2" type="success" size="sm" icon>
              <i class="tim-icons icon-settings"></i>
            </base-button>  -->
              <base-button class="mr-2" type="danger" size="sm" icon>
                <i class="tim-icons icon-simple-remove"></i>
              </base-button>
            </td>
          </slot>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <paginate
        v-if="meta"
        :page-count="meta.total_pages ? meta.total_pages : 0"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination-list'"
      >
      </paginate>
    </div>
  </div>
</template>
<script>
import Paginate from "vuejs-paginate";
import SiteService from "@/services/SiteService";

export default {
  name: "base-table",
  components: {
    Paginate,
  },
  data() {
    return {
      table: null,
    };
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
      description: "Table columns",
    },
    data: {
      type: Array,
      default: () => [],
      description: "Table data",
    },
    type: {
      type: String, // striped | hover
      default: "",
      description: "Whether table is striped or hover type",
    },
    theadClasses: {
      type: String,
      default: "",
      description: "<thead> css classes",
    },
    tbodyClasses: {
      type: String,
      default: "",
      description: "<tbody> css classes",
    },
    meta: {
      type: Object,
    },
  },
  computed: {
    tableClass() {
      return this.type && `table-${this.type}`;
    },
  },

  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
    clickCallback(pageNum) {
      SiteService.pagination(pageNum)
        .then((res) => {
          if (!res.data.error) {
            this.table = res.data.data;
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
.pagination {
  margin-left: auto;
  margin-right: auto;
  min-width: 100px;
  height: 35px;
  display: table !important;
}

.pagination-list {
  list-style: none;
}

.pagination-list li {
  float: left;
  padding: 10px;
  border: 1px solid #000000;
  font-size: 14px;
  border-radius: 10%;
  margin: 1px;
}

.active {
  background: #fff;
}
</style>
