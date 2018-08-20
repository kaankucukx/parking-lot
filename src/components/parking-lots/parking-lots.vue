<template>
  <div class="parking-lots" :class="{'parking-lots--deactive__border' : lot.parking}">
    <span class="parking-slot--number">{{lot.orderNo}}</span>
    <div :class="{'parking-lots--active' : !lot.parking, 'parking-lots--deactive' : lot.parking}">
			<span v-if="lot.plate">{{lot.plate}}</span>
			<span v-if="lot.parking" v-html="generateTimeElapsed(lot.parkTime)"></span>
		</div>

  </div>
</template>

<script>
export default {
  name: 'ParkingLots',
  props: {
    lot: {
      type: Object,
      default: () => ({

      }),
    },
  },
  methods: {
    generateTimeElapsed(t) {
      return this.$moment(t).fromNow(true);
    },
  },
};
</script>

<style scoped lang="scss">
.parking-lots {
	display: flex;
	flex: 1 0 9%;
	flex-flow: column nowrap;
	margin: 15px 3px;
	min-height: 120px;
	border-radius: 3px;
	border-top: 1px solid #88d1b0;
	border-right: 1px solid #88d1b0;
	border-left: 1px solid #88d1b0;
}
.parking-lots--deactive__border {
	border-top: 1px solid #d18888;
	border-right: 1px solid #d18888;
	border-left: 1px solid #d18888;
}
.parking-lots--active {
	background: #b4c4bd;
	flex: 1;
	margin: 0px 3px 0px 3px;
}
.parking-lots--deactive {
	display: flex;
	background: #c4b4b4;
	flex: 1;
	margin: 0px 3px 0px 3px;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	font: normal 400 1rem/1.67 "Gotham-Black", sans-serif;
	letter-spacing: -0.4px;
}
.parking-slot--number {
	text-align: center;
	color: wheat;
	font: normal 400 1.5rem/1.67 "Gotham-Bold", sans-serif;
	letter-spacing: -0.4px;
}
</style>
