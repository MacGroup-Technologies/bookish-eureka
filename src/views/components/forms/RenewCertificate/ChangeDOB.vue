<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
import AppButton from '@/components/Button.vue'

const props = defineProps<{
  tab: string
}>()

const emit = defineEmits(['add-tabs', 'next'])

const data: Ref<any> = ref({})

const sendData = function () {
  emit('next', data.value)
}
</script>

<template>
    <section>
        <!-------------Heading  ----------------->
     <h2 class="border-b font-bold text-2xl text-primary pb-2">Date of Birth Change</h2>
     <div class="text-red border-l-2 border-red px-2 mt-3 mb-3">
        <b>NOTE: After completing this section, go to Part 9.</b>
      </div>

<!-------------------Form  ------------------------>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <span class="block font-bold mb-5">Change of Date of Birth Due To (Select all applicable boxes):</span>
        <div class="flex gap-3 items-start mb-5">
        <!----------- cause of name change -->
        <!----------marriage ---------->
        <label
            for="name_change_marriage"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="name_change_marriage"
             v-model="data.name_change_marriage"
             required />
            <span>Marriage, Divorce, or Annulment</span>
          </label>
        </div>
        </form>
    </section>
</template>