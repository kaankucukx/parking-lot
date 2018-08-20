<template>
  <span
    :style="`width:${w ? w : ''}; height:${h ? h : ''}`"
    :class="cls"
    class=""
    @click="handleClick">
    <template>{{title}}</template>
    <!-- <Loader v-if="setLoader" :preLoader="setLoader" /> -->
    </span>
</template>

<script>


export default {
  name: 'Button',
  data() {
    return {
    };
  },
  created() {

  },
  components: {
  },
  methods: {
    handleClick() {
      this.$emit('buttonClicked');
    },
  },
  props: {
    title: {
      type: String,
      default: 'SORGULA',
    },
    cls: {
      type: String,
      default: 'btn',
    },
    w: {
      type: String,
      default: '',
    },
    h: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.commentsButton {
	border-radius: 3px;
	background: #6c0c33;
	color: #fff;
}

span {
	padding: 20px 23px;
	font: normal 400 1rem/1.67 "Gotham-Bold", sans-serif;
	letter-spacing: 1.4px;
	color: #f8f8f8;
	background-color: #82cf62;
	width: fit-content;
	cursor: pointer;
	border-radius: 3px;
	flex: 0 0 47%;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background-color: #057a77;
	}
}

.checkOut {
	background-color: #ff8400;
	color: #fff;
	&:hover {
		background-color: #f10028;
	}
}
.button-full-width {
	flex: 1;
	margin-top: 30px;
	background: #343e48;
	&:hover {
		background: #88d1b0;
	}
}
.disable {
	opacity: 0.5;
	pointer-events: none;
	cursor: help;
}
</style>
