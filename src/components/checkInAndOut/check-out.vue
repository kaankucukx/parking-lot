<template>
  <modal :esc="true" @close="$emit('close')">
    <div v-if="!checkOutData">
      <h6>Plate Number</h6>
      <input v-model="customer.plate" type="text" name="plate-number" id="" class="plate-number" @keyup="$emit('getID', customer.plate)">

      <div class="check-in--buttons">
        <Button :cls="'checkOut'" :w="''" :h="''" :title="'CHECK OUT'" @buttonClicked="$emit('remove', customer.plate)" />
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
    };
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
</style>
