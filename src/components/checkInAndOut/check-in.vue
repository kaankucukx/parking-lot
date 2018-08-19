<template>
  <modal :esc="true" @close="$emit('close')">
    <h6>Plate Number</h6>
    <input v-model="customer.plate" @keyup="$emit('getCar', customer)" type="text" name="plate-number" id="" class="plate-number">
    <h6>Color</h6>
    <div class="check-in-color-input">
      <span :style="`background: ${inputColor}`" class="check-in-color"></span>
      <input v-model="customer.carColor" type="text" name="color" id="">
    </div>
    <div class="check-in--buttons">
      <Button :cls="''" :w="''" :h="''" :title="'CHECK IN'" @buttonClicked="$emit('saveCar')" />
    </div>
  </modal>
</template>

<script>
export default {
  name: 'CheckIn',
  data() {
    return {
      customer: {
        plate: null,
        carColor: null,
      },
    };
  },
  computed: {
    inputColor() {
      return this.customer.carColor;
    },
  },
  components: {
    Button: () => import('@/components/button/button'),
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
</style>
