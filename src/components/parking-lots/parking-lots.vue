<template>
  <div class="parking-lots">
    <span class="parking-slot--number">01</span>
    <div class="parking-lots--inner"></div>

  </div>
</template>

<script></script>
export default {
  name: 'ParkingLots',
};
</script>

<style scoped lang="scss">
.parking-lots {
	display: flex;
	flex: 1 0 9%;
	flex-flow: column nowrap;
	margin: 15px 3px;
	min-height: 120px;
	max-width: 108px;
	min-width: 108px;
	border-radius: 3px;
	border-top: 1px solid #88d1b0;
	border-right: 1px solid #88d1b0;
	border-left: 1px solid #88d1b0;
	&:hover {
	}
}
.parking-lots--inner {
	background: #b4c4bd;
	flex: 1;
	margin: 0px 3px 0px 3px;
}
.parking-slot--number {
	font-size: 25px;
	text-align: center;
  color: wheat;
  font: normal 400 1.5rem/1.67 "Gotham-Bold", sans-serif;
	letter-spacing: -0.4px;
}
</style>
