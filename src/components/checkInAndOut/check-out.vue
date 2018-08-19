<template>
  <modal :esc="true" @close="$emit('close')">
<div>
    <h6>Plate Number</h6>
    <input v-model="customer.plate" type="text" name="plate-number" id="" class="plate-number" @keyup="$emit('getID', customer.plate)">

    <div class="check-in--buttons">
      <Button :cls="'checkOut'" :w="''" :h="''" :title="'CHECK OUT'" @buttonClicked="$emit('remove', customer.plate)" />
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
      default: () => {}
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
