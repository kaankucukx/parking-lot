<template>
  <div class="home">
    <parking-lot-home/>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    ParkingLotHome: () => import('@/components/ParkingLotHome.vue'),
  },
};
</script>
