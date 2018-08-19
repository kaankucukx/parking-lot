<template>
<div>
  <div class="main--header">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="main-inner main--description">
      <h1>Awesome Parking Lot in the CITY.</h1>
      <p>Tens of HTML cars, fast parking. Flow checkout is easy just provide the plate of your vehicle, pay and go!.</p>
      <ul class="main--list">
        <li>Awesome Parking Slot Description</li>
        <li>Awesome Parking Slot Description</li>
        <li>Awesome Parking Slot Description</li>
        <li>Awesome Parking Slot Description</li>
        <li>Awesome Parking Slot Description</li>
        <li>Awesome Parking Slot Description</li>
        <li>Awesome Parking Slot Description</li>
      </ul>
      <div class="main--description--button">
        <Button :cls="''" :w="''" :h="''" :title="'CHECK IN'" @buttonClicked="transactionEmit"/>
        <Button :cls="'checkOut'" :w="''" :h="''" :title="'CHECK OUT'" @buttonClicked="transactionEmit"/>
      </div>
    </div>
    <div class="main-inner">
      <h1>ÇOK ACAYİP GÜZEL RESİM</h1>
    </div>
  </div>
  <div class="main-parking-lots">
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  <parking-lots />
  </div>
  </div>
</template>

<script>
export default {
  name: 'ParkingLotHome',
  props: {
    msg: String,
  },
  components: {
    Button: () => import('@/components/button/button'),
    ParkingLots: () => import('@/components/parking-lots/parking-lots'),

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main--header {
	min-height: 600px;
	height: 100%;
	background: #323b46;
	display: flex;
	.main-inner {
		flex: 1;
		background: #323b46;
	}
}
.main--description {
	padding: 50px 150px;
	font-size: 3rem;
}
.main--list {
	display: flex;
	flex-flow: column nowrap;
	li {
		color: #9ba2aa;
		font: normal 400 1.2rem/120% "Gotham-Medium", sans-serif;
		letter-spacing: -0.4px;
	}
}
.main--description--button {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
}

.main-parking-lots {
	display: flex;
	flex-flow: row wrap;
  padding: 150px;
  background: #37404D;
}
h1 {
	color: #fff;
	font: normal 400 3rem/100% "Gotham-Black", sans-serif;
	letter-spacing: -0.4px;
}
p {
	color: #9ba2aa;
	font: normal 400 1.5rem/100% "Gotham-Medium", sans-serif;
	letter-spacing: -0.4px;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #88d1b0;
}
</style>
