<template>
  <div class="dashboard">
    <input v-model="search" type="text" />
    <div class="dashboard-listing">
      <div class="dashboard-headings">
        <div>Slot</div>
        <div>Color</div>
        <div>Plate</div>
        <div>Reg. Number</div>
        <div>Time Entered</div>
        <div>Time Elapsed</div>
      </div>
      <div class="dashboard--list" v-for="lot in lotList" :key="lot.id">
        <div>{{lot.orderNo}}</div>
        <div>{{lot.color}}</div>
        <div>{{lot.plate}}</div>
        <div>{{lot.id}}</div>
        <div>{{lot.hoomanTime}}</div>
        <div v-html="generateTimeElapsed(lot.parkTime)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      search: '',
      lots: [],
    };
  },
  methods: {
    generateTimeElapsed(t) {
      return this.$moment(t).fromNow(true);
    },
  },
  computed: {
    lotList() {
      const matcher = new RegExp(this.search, 'i');
      return this.lots.filter(lot => matcher.test([lot.plate, lot.orderNo, lot.parkTime, lot.id, lot.parking,
        lot.color,
      ].join()));
    },
  },
  created() {
    this.lots = this.$route.params.data;
  },
};
</script>
<style lang="scss" scoped>
.dashboard {
	display: flex;
	flex-flow: column nowrap;
}
.dashboard-headings,
.dashboard--list {
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	div {
		flex: 1;
	}
}
</style>
