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
          <Button :cls="''" :w="''" :h="''" :title="'CHECK IN'" @buttonClicked="checkIn = true" />
          <Button :cls="'checkOut'" :w="''" :h="''" :title="'CHECK OUT'" @buttonClicked="checkOut = true" />
        </div>
        <div class="main--description--button">
          <Button :cls="'button-full-width'" :w="''" :h="''" :title="'DASHBOARD'" @buttonClicked="navToDashborad" />
        </div>
      </div>
      <div class="main-inner">
        <img :src="require('@/assets/img/hmmbird.png')" alt="justmop challenge">
      </div>
    </div>

    <div class="main-parking-lots">
      <template v-for="(lot, key) in reactiveLots">
        <parking-lots :key="key" :lot="lot" />
      </template>
    </div>

    <check-in v-if="checkIn" :checkInData="checkedInCar" @close="checkIn = false" @saveCar="CheckIn" @getCar="getCheckInCar"/>

    <check-out v-if="checkOut" :checkOutData="checkedOutCar" @close="checkOut = false" @remove="CheckOut" @getID="getCheckoutID"/>

  </div>
</template>
<script>
import db from '@/firebase/init';

export default {
  name: 'ParkingLotHome',

  data() {
    return {
      checkIn: false,
      checkOut: false,
      lots: [],
      checkInCar: {},
      checkOutPlate: null,
      checkedOutCar: null,
      checkedInCar: null,
    };
  },
  created() {
    db.collection('lots').onSnapshot((snapshot) => {
      this.lots = snapshot.docs.map(e => Object.assign({ id: e.id }, { ...e.data() }));
    });
  },
  methods: {
    getCheckInCar(o) {
      this.checkInCar = o;
    },
    CheckIn() {
      const Park = this.lots.sort((a, b) => a.orderNo - b.orderNo).filter(f => f.parking === false)[0];
      db.collection('lots').doc(Park.id).update({
        parking: true,
        parkTime: this.$moment().add(new Date(), 'd').format(),
        hoomanTime: this.$moment()
          .add(new Date().getDay() == 6 ? 2 : 1, 'd')
          .format('DD-MM-YYYY, h:mm'),
        color: this.checkInCar.carColor,
        plate: this.checkInCar.plate,
      }).then((c) => {
        const customer = {
          time: this.$moment()
            .add(new Date().getDay() == 6 ? 2 : 1, 'd')
            .format('DD-MM-YYYY, h:mm'),
          refNO: Park.id,
          plate: this.checkInCar.plate,
          slot: Park.orderNo,
        };
        this.checkedInCar = customer;
      });
    },
    getCheckoutID(p) {
      console.log(p);
      this.checkOutPlate = this.lots.filter(f => f.plate === p);
    },
    CheckOut() {
      db.collection('lots').doc(this.checkOutPlate[0].id).get().then((e) => {
        const duration = this.$moment(e.data().parkTime).fromNow(true);
        const customer = {
          time: duration,
          refNO: this.checkOutPlate[0].id,
          plate: e.data().plate,
        };
        this.checkedOutCar = customer;
      })
        .then(() => {
          db.collection('lots').doc(this.checkOutPlate[0].id).update({
            parking: false,
            plate: '',
            parkTime: null,
            color: '',
            hoomanTime: '',
          });
        });
    },
    makeData() {
      for (let index = 0; index < 100; index++) {
        db.collection('lots').add({
          color: 'red',
          orderNo: index,
          parkTime: this.$moment().add(new Date(), 'd').format(),
          parking: false,
          plate: '34AB1234',
          hoomanTime: this.$moment()
            .add(new Date().getDay() == 6 ? 2 : 1, 'd')
            .format('DD-MM-YYYY, h:mm'),
        });
      }
    },
    navToDashborad() {
      this.$router.push({ name: 'Dashboard', params: { data: this.reactiveLots } });
    },
  },
  watch: {
    checkOut() {
      if (this.checkedOutCar) {
        this.checkedOutCar = null;
      }
      if (this.checkedInCar) {
        this.checkedInCar = null;
      }
    },
  },
  computed: {
    reactiveLots() {
      return this.lots.sort((a, b) => a.orderNo - b.orderNo);
    },
  },
  components: {
    Button: () =>
        import('@/components/button/button'),
    ParkingLots: () =>
        import('@/components/parking-lots/parking-lots'),
    checkIn: () => import('@/components/checkInAndOut/check-in'),
    checkOut: () => import('@/components/checkInAndOut/check-out'),
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
	background: #37404d;
}
h1 {
	color: #fff;
	font: normal 400 3rem/100% "Gotham-Black", sans-serif;
	letter-spacing: -0.4px;
}
</style>
