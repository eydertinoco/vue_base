<template>
  <form action="">
    <div>
      <InputText/>
    </div>
    <div>
      <InputText/>
    </div>
    <div>
      <SubmitInfo/>
    </div>
  </form>
</template>

<script>
import InputText from "@/components/form/InputText";
import SubmitInfo from "@/components/form/SubmitInfo";

export default {
  name: 'MyForm',
  components: {
    SubmitInfo,
    InputText,
  }
}
</script>

<style scoped>

</style>