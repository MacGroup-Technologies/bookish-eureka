<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
import { isEmpty } from 'lodash'
import AppButton from '@/components/Button.vue'

const emit = defineEmits(['next'])
const data: Ref<any> = ref({})

const sendData = function () {
  emit('next', data.value)
}

</script>

<template>
    <section>
        <h2 class="border-b font-bold text-2xl text-primary pb-2">
            Type of Application
        </h2>
        <!--------------typeofapp  --------------->
        <div class="text-red border-l-2 border-red px-2 mt-5 mb-5">
            <b>NOTE:Select only one box</b>
        </div>
        <span class="block mb-2 font-bold">I am applying for a:</span>
        <div class="mt-5 flex gap-3">
            <label
              for="new_certificate_of_citizenship"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="new_certificate_of_citizenship"  
              name="application" 
              v-model="data.application"
               required />
              <span>New Certificate of Citizenship</span>
            </label>

           <label
              for="new_certificate_of_naturalization"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="new_certificate_of_naturalization"  
              name="application" 
              v-model="data.application"
               required />
              <span>New Certificate of Naturalization</span>
            </label>



          </div>

          <div class="mt-5 flex gap-3">
            <label
              for="new_certificate_of_repatriation"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="new_certificate_of_repatriation"  
              name="application" 
              v-model="data.application"
               required />
              <span>New Certificate of Repatriation</span>
            </label>

           <label
              for="new_declaration_of_intention"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="new_declaration_of_intention"  
              name="application" 
              v-model="data.application"
               required />
              <span>New Declaration of Intention</span>
            </label>

          </div>
        <div class="mt-5 flex gap-3">
          <label
              for="special_certificate_of_naturalization"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="special_certificate_of_naturalization"  
              name="application" 
              v-model="data.application"
               required />
              <span>Special Certificate of Naturalization to Obtain Recognition </span>
            </label>

        </div>
    </section>
</template>