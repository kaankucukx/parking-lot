<template>
  <modal :esc="true" @close="$emit('close')">
    <div v-if="!checkInData">
      <h6>Plate Number</h6>
      <input v-model="customer.plate"
      @keyup="$emit('getCar', customer)"
      type="text" name="plate-number" placeholder="PLATE NUMBER"
        class="plate-number input--text">
      <h6>Color</h6>
      <div class="check-in-color-input">
        <span :style="`background: ${inputColor}`" class="check-in-color"></span>
        <input v-model="customer.carColor"
        type="text" required
        name="color" id=""
        class="input--text" placeholder="SET COLOR">
      </div>
      <div v-if="error"><h2 class="error">{{error}}</h2></div>
      <div class="check-in--buttons">
        <Button :cls="''" :w="''" :h="''" :title="'CHECK IN'" @buttonClicked="handleClick()" />
      </div>
    </div>
    <div v-else class="checkin-success">
      <h1 class="checkin-success--main-heading">Check-inn Success!</h1>
      <div class="checkin-success--inner">
        <p class="checkin-success--heading">Plate:</p>
        <p class="checkin-success--desc">{{checkInData.plate}}</p>
      </div>
      <div class="checkin-success--inner">
        <p class="checkin-success--heading">Time:</p>
        <p class="checkin-success--desc">{{checkInData.time}}</p>
      </div>
      <div class="checkin-success--inner">
        <p class="checkin-success--heading">Reference No:</p>
        <p class="checkin-success--desc">{{checkInData.refNO}}</p>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'CheckIn',
  props: {
    checkInData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      customer: {
        plate: null,
        carColor: null,
      },
      error: null,
    };
  },
  methods: {
    handleClick() {
      if (this.customer.plate && this.customer.carColor) {
        this.$emit('saveCar');
      } else {
        this.error = 'You must set all the fields.';
      }
    },
  },
  computed: {
    inputColor() {
      return this.customer.carColor;
    },
  },
  watch: {
    'customer.plate': function (val) {
      this.customer.plate = val.toUpperCase();
    },
  },
  beforeDestroy() {
    this.error = null;
  },
  components: {
    Button: () =>
        import('@/components/button/button'),
  },
};
</script>

<style lang="scss" scoped>
.check-in--buttons {
	margin: 50px 0 30px 0;
}

.check-in-color-input {
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
}

.check-in-color {
	border-radius: 50%;
	height: 32px;
	width: 32px;
	background: red;
	margin-right: 20px;
}

input {
	border-style: none;
	border-bottom: 1px solid grey;
	appearance: none;
	&:focus {
		outline: 0;
	}
}

.input--text {
	font: normal 400 2rem/1.67 "Gotham-Black", sans-serif;
	letter-spacing: -0.4px;
}

.checkin-success {
	display: flex;
	flex-flow: column nowrap;
	.checkin-success--inner {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;
	}
	.checkin-success--main-heading {
		color: #323b46;
	}
	.checkin-success--heading {
		margin-right: 30px;
	}
	.checkin-success--desc {
		text-transform: uppercase;
		color: #323b46;
	}
}
.error {
	color: rgb(182, 59, 59);
	font: normal 400 1.5rem/1.67 "Gotham-Black", sans-serif;
	letter-spacing: -0.4px;
}
</style>
