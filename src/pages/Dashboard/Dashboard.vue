<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <card type="chart">
          <template slot="header">
            <h3 class="card-title">
              {{ $t("dashboard.dadosPessoais") }}
            </h3>
          </template>
          <div class="chart-area">
            <bar-chart
              style="height: 100%"
              chart-id="blue-bar-chart"
              :chart-data="perosnalBarChart.chartData"
              :gradient-stops="perosnalBarChart.gradientStops"
              :extra-options="perosnalBarChart.extraOptions"
            >
            </bar-chart>
          </div>
        </card>
      </div>
      <div class="col-lg-6">
        <card type="chart">
          <template slot="header">
            <h3 class="card-title">
              {{ $t("dashboard.dadosSensiveis") }}
            </h3>
          </template>
          <div class="chart-area">
            <bar-chart
              style="height: 100%"
              chart-id="blue-bar-chart"
              :chart-data="sensitiveBarChart.chartData"
              :gradient-stops="sensitiveBarChart.gradientStops"
              :extra-options="sensitiveBarChart.extraOptions"
            >
            </bar-chart>
          </div>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6 text-left">
                <h5 class="card-category">{{ $t("dashboard.dados") }}</h5>
                <h2 class="card-title">{{ $t("dashboard.sites") }}</h2>
              </div>
              <div class="col-sm-6">
                <div
                  class="btn-group btn-group-toggle float-right"
                  data-toggle="buttons"
                >
                  <label
                    v-for="(option, index) in bigLineChart.categories"
                    :key="option"
                    class="btn btn-sm btn-primary btn-simple"
                    :class="{ active: bigLineChart.activeIndex === index }"
                    :id="index"
                  >
                    <input
                      type="radio"
                      @click="initBigChart(index)"
                      name="options"
                      autocomplete="off"
                      :checked="bigLineChart.activeIndex === index"
                    />
                    {{ option }}
                  </label>
                </div>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <line-chart
              style="height: 100%"
              ref="bigChart"
              chart-id="big-line-chart"
              :chart-data="this.bigLineChart.chartData"
              :gradient-colors="bigLineChart.gradientColors"
              :gradient-stops="bigLineChart.gradientStops"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import * as chartConfigs from "@/components/Charts/config";
import InputService from "@/services/InputService";

import config from "@/config";

export default {
  name: "starter-page",
  components: {
    LineChart,
    BarChart,
  },
  data() {
    return {
      bigLineChart: {
        allData: [],
        activeIndex: 0,
        chartData: {
          datasets: [{}],
          labels: [],
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: [],
      },
      dataBigLineChart: {
        allData: [],
        labels: [],
        categories: [],
      },
      perosnalBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: [],
          datasets: [
            {
              label: "",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },

      dataPersonalChart: {
        data: [],
        labels: [],
      },

      sensitiveBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: [],
          datasets: [
            {
              label: "",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },

      dataSensitiveChart: {
        data: [],
        labels: [],
      },
    };
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            fill: false,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.dataBigLineChart.allData[index],
          },
        ],
        labels: this.dataBigLineChart.labels,
      };

      this.bigLineChart.categories = this.dataBigLineChart.categories;
      this.bigLineChart.allData = this.dataBigLineChart.allData;
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
    initPersonalChart() {
      let chartData = {
        labels: this.dataPersonalChart.labels,
        datasets: [
          {
            label: "",
            fill: true,
            borderColor: config.colors.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: this.dataPersonalChart.data,
          },
        ],
      };

      this.perosnalBarChart.chartData = chartData;
    },

    initSensitiveChart() {
      let chartData = {
        labels: this.dataSensitiveChart.labels,
        datasets: [
          {
            label: "",
            fill: true,
            borderColor: config.colors.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: this.dataSensitiveChart.data,
          },
        ],
      };

      this.sensitiveBarChart.chartData = chartData;
    },
    loadBigChart() {
      InputService.sitesInformation()
        .then((res) => {
          if (!res.data.error) {
            let categories = res.data.categories.map((el) => {
              return el.name;
            });

            let labels = res.data.labels.map((el) => {
              return el.name;
            });

            this.dataBigLineChart.categories = categories;
            this.dataBigLineChart.labels = labels;
            this.dataBigLineChart.allData = res.data.allData;

            this.initBigChart(0);
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

    loadPersonalChart() {
      InputService.personalInformation()
        .then((res) => {
          if (!res.data.error) {
            let labels = res.data.labels.map((el) => {
              return el.name;
            });

            this.dataPersonalChart.labels = labels;
            this.dataPersonalChart.data = res.data.data;

            this.initPersonalChart();
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

    loadSensitiveChart() {
      InputService.sensitiveInformation()
        .then((res) => {
          if (!res.data.error) {
            let labels = res.data.labels.map((el) => {
              return el.name;
            });

            this.dataSensitiveChart.labels = labels;
            this.dataSensitiveChart.data = res.data.data;

            this.initSensitiveChart();
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
  mounted() {
    this.loadBigChart();
    this.loadPersonalChart();
    this.loadSensitiveChart();
  },
};
</script>
<style></style>
