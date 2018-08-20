<template>
  <modal :esc="true" @close="$emit('close')">
    <div v-if="!checkOutData">
      <h6>Plate Number</h6>
      <input v-model="customer.plate" type="text" name="plate-number" id="" class="plate-number input--text" @keyup="$emit('getID', customer.plate)">
       <div v-if="error"><h2 class="error">{{error}}</h2></div>
      <div class="check-in--buttons">
        <Button :cls="'checkOut'" :w="''" :h="''" :title="'CHECK OUT'" @buttonClicked="handleClick()" />
      </div>
    </div>
    <div v-if="checkOutData" class="checkout-success">
      <h1 class="checkout-success--main-heading">Check-out Success!</h1>
      <div class="checkout-success--inner">
        <p class="checkout-success--heading">Plate:</p>
        <p class="checkout-success--desc">{{checkOutData.plate}}</p>
      </div>
      <div class="checkout-success--inner">
        <p class="checkout-success--heading">Time:</p>
        <p class="checkout-success--desc">{{checkOutData.time}}</p>
      </div>
      <div class="checkout-success--inner">
        <p class="checkout-success--heading">Reference No:</p>
        <p class="checkout-success--desc">{{checkOutData.refNO}}</p>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'CheckOut',
  props: {
    checkOutData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      customer: {
        plate: null,
      },
      error: null,
    };
  },
  methods: {
    handleClick() {
      if (this.customer.plate) {
        this.$emit('remove', this.customer.plate)
      } else {
        this.error = 'You must set all the fields.';
      }
    },
  },
  watch: {
    'customer.plate': function (val, oldVal) {
      this.customer.plate = val.toUpperCase();
    },
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
}

.input--text {
	font: normal 400 2rem/1.67 "Gotham-Black", sans-serif;
	letter-spacing: -0.4px;
}

.checkout-success {
	display: flex;
	flex-flow: column nowrap;
	.checkout-success--inner {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;
	}
	.checkout-success--main-heading {
		color: #323b46;
	}
	.checkout-success--heading {
		margin-right: 30px;
	}
	.checkout-success--desc {
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
