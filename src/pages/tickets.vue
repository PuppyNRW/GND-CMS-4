<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const externalUrl = 'https://shop.pupplay.nrw/';

  // Redirect to the external URL
  window.location.href = externalUrl;
});
</script>
