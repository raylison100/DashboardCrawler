<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <base-table :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
  import { BaseTable } from "@/components";

const tableColumns = ["name", "run", "xpath"];
const tableData = [
  {
    id: 1,
    name: "Dakota Rice",
    run: false,
    xpath: "Niasdpsadiupoasíudóasudiuasiudasodypiasuydyasodysaiuydiuger",
  },
  {
    id: 2,
    name: "Dakota Rice",
    run: false,
    xpath: "Niasdpsadiupoasíudóasudiuasiudasodypiasuydyasodysaiuydiuger",
  },
  {
    id: 3,
    name: "Dakota Rice",
    run: false,
    xpath: "Niasdpsadiupoasíudóasudiuasiudasodypiasuydyasodysaiuydiuger",
  },
  { 
    id: 4,
    name: "Dakota Rice",
    run: false,
    xpath: "Niasdpsadiupoasíudóasudiuasiudasodypiasuydyasodysaiuydiuger",
  },
  {
  id: 5,
  name: "Dakota Rice",
  run: false,
  xpath: "Niasdpsadiupoasíudóasudiuasiudasodypiasuydyasodysaiuydiuger",
},
 
];

export default {
  name: 'site-list',
  components: {
    BaseTable
  },
    data() {
        return {
            table1: {
            title: "Registered Sites",
            columns: [...tableColumns],
            data: [...tableData]
            },
        };
    }
}
</script>
<style>
</style>
