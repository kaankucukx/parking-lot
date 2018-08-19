<template>
  <div class="home">
    <parking-lot-home msg="Justmop Parking Lot Project is Ready to GO! ! !"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    ParkingLotHome: () => import('@/components/ParkingLotHome.vue'),
  },
};
</script>
