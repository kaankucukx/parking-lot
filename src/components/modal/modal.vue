<template>
  <transition
    name="modal"
    appear>
    <section
      :tabindex="tabIndex"
      class="modal"
      @keyup.esc="onEsc">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <slot
                v-if="esc"
                name="modal-close">
                <a
                  href="#"
                  class="modal-close"
                  @click.prevent="$emit('close')">CLOSE X</a>
              </slot>
            </slot>
          </div>
          <div class="modal-body">
            <slot/>
          </div>
          <div class="modal-footer">
            <slot name="footer"/>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    closeButton: {},
    esc: { default: false },
    tabIndex: { default: -1 },
  },
  data() {
    return {};
  },
  beforeCreate() {
    document.body.style.overflowY = 'hidden';
  },
  created() {

  },
  mounted() {
    this.$el.focus();
  },
  beforeDestroy() {

    document.body.style.overflowY = 'auto';
  },
  methods: {
    onEsc() {
      if (this.esc) {
        this.$emit('close');
      }
    },
  },
};
</script>

<style scoped>
.modal-close {
	color: #fff;
	float: right;
}

.modal {
	z-index: 40;
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}

.modal-container {
  margin-top: 3%;
  min-width: 40%;
}

.modal-enter .modal-container {
	transform: scale(1.5) translate3d(0, 0, 0);
	will-change: transform;
}
.modal-leave-active .modal-container {
	transform: scale(1) translate3d(0, 0, 0);
	will-change: transform;
}
.modal-header {
	background: transparent;
	display: flex;
	padding: 5px 0;
	justify-content: flex-end;
}
.modal-body {
  background: #fff;
  padding: 50px;
}

.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.25s;
	will-change: opacity;
}

/* .modal-overlay {
	background-color: rgba(0, 0, 0, 0.8);
	position: fixed;

	width: 100%;
	height: 100%;
} */

.modal-wrapper {
	display: flex;
	align-items: flex-start;
	justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
}

.modal-footer {
	display: flex;
	background: #fff;
	align-items: center;
}
</style>
