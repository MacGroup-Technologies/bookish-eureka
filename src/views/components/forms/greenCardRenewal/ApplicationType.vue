<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { isEmpty, omit } from 'lodash'

import AppButton from '@/components/Button.vue'

const props = defineProps<{
  tab: string
}>()

const route = useRoute()
const emit = defineEmits(['update-tab', 'next'])
const data: Ref<any> = ref({})

const sendData = function () {
  const payload = omit(data.value, ['reasonA'])

  switch (data.value.reasonA) {
    case 'lost_or_stolen':
      payload.previous_card_lost = true
      break;

    case 'never_received':
      payload.previous_card_never_received = true
      break;

    case 'multilated':
      payload.existing_card_mutilated = true
      break;

    case 'incorrect_data':
      payload.existing_card_incorrect_data_DHS = true
      break;

    case 'data_changed':
      payload.biographic_information_legally_changed = true
      break;

    case 'expired':
      payload.existing_card_expired = true
      break;

    case 'after14yo':
      payload.my_14_birthday_registering_after = true
      break;

    case '14yo':
      payload.my_14_birthday_registering_before = true
      break;

    case 'actual_residence':
      payload.permanent_resident = true
      break;

    case 'taking_up_commuter':
      payload.commuter = true
      break;

    case 'converted_to_perm':
      payload.convertered_to_lawful_permanent_resident = true
      break;

    case 'alien_reg':
      payload.prior_edition_alien_registration_card = true
      break;
  
    default:
      break;
  }

  switch (data.value.reasonB) {
    case 'lost_or_stolen':
      payload.previous_card_lost_B = true
      break;

    case 'never_received':
      payload.previous_card_never_received_B = true
      break;

    case 'multilated':
      payload.existing_card_mutilated_B = true
      break;

    case 'incorrect_data':
      payload.existing_card_incorrect_data_DHS_B = true
      break;

    case 'data_changed':
      payload.biographic_information_legally_changed_B = true
      break;
  
    default:
      break;
  }

  emit('next', payload)
}
</script>

<template>
  <section class="">
    <div class="" v-if="tab === 'status'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Status</h2>
      <form
        @submit.prevent="
          emit('update-tab', data.resident === 'conditional' ? 'reason-b' : 'reason-a')
        "
        class="py-5 md:w-2/3"
      >
        <div class="text-red border-l-2 border-red px-2 mb-5 font-[500]">
          <b>NOTE:</b> If your conditional permanent resident status (for example: CR1, CR2, CF1,
          CF2) is expiring within the next 90 days, then do <b>not</b> file this application. (See
          the
          <a
            href=""
            class="font-semibold underline"
            target="_blank"
            title="Click to view this instruction"
            >What is the Purpose of this Application</a
          >
          section of the Form I-90 Instructions for further information.)
        </div>

        <div class="mb-5">
          <span class="block mb-2">My Status is: <i>(Select only one option)</i></span>
          <div class="flex flex-col gap-3">
            <label
              for="lawful_perm_resident"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="lawful_perm_resident"
                value="lawful"
                name="resident"
                v-model="data.resident"
                required
              />
              <span>Lawful Permanent resident</span>
            </label>

            <label
              for="perm_resident"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="perm_resident"
                value="permanent"
                name="resident"
                v-model="data.resident"
                required
              />
              <span>Permanent Resident - In Commuter Status</span>
            </label>

            <label
              for="conditional_resident"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="conditional_resident"
                value="conditional"
                name="resident"
                v-model="data.resident"
                required
              />
              <span>Conditional Permanent Resident</span>
            </label>
          </div>
        </div>

        <AppButton
          mode="submit"
          type="solid"
          size="large"
          color="primary"
          class="mt-5 bg-primary text-white"
        >
          Continue
        </AppButton>
      </form>
    </div>

    <div class="" v-else-if="tab === 'reason-a'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2 mb-5">Reason for Application</h2>
      <div
        class="text-red border-l-2 border-red px-2 mb-5 font-[500] text-xl md:w-2/3"
        v-if="data.resident === 'conditional'"
      >
        This form is to be used only by a lawful permanent resident or a permanent resident in
        commuter status.

        <button
          class="mt-5 block py-2 px-5 rounded-sm !text-[16px] bg-red text-white"
          @click="emit('update-tab', 'status')"
        >
          Change your status
        </button>
      </div>
      <form v-else @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <div class="mb-5">
          <span class="block mb-2">Select only one option</span>
          <div class="flex flex-col gap-3">
            <label
              for="lost_or_stolen"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="lost_or_stolen"
                value="lost_or_stolen"
                name="reasona"
                v-model="data.reasonA"
                required
              />
              <span>My previous card has been lost, stolen, or destroyed</span>
            </label>

            <label
              for="never_received"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="never_received"
                value="never_received"
                name="reasona"
                v-model="data.reasonA"
                required
              />
              <span>My previous card was issued but never received</span>
            </label>

            <label
              for="multilated"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="multilated"
                value="multilated"
                name="reasona"
                v-model="data.reasonA"
                required
              />
              <span>My previous card has been multilated</span>
            </label>

            <label
              for="incorrect_data"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="incorrect_data"
                value="incorrect_data"
                name="reasona"
                v-model="data.reasonA"
                required
              />
              <span
                >My previous card has incorrect data because of Department of Homeland Security
                (DHS) error. (Attach your existing card with incorrect data along with this
                application)</span
              >
            </label>

            <label
              for="data_changed"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="data_changed"
                value="data_changed"
                name="reasona"
                v-model="data.reasonA"
                required
              />
              <span>
                My name or other biographic information has been legally changed since issuance of my existing card
              </span>
            </label>

            <a name="2f" id="2f"></a>
            <label
              for="expired"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
              :class="{ 'border-primary/50' : route.hash === '#2f' }"
            >
              <input
                type="radio"
                id="expired"
                value="expired"
                name="reasona"
                v-model="data.reasonA"
                required
              />
              <span>
                My existing card has already expired or will expire within six months
              </span>
            </label>

            <label
              for="after14yo"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="after14yo"
                value="after14yo"
                name="reasona"
                v-model="data.reasonA"
                required
              />
              <span>
                I have reached my 14th birthday and am registering as required. My existing card will expire AFTER my 16th birthday. <b class="text-red">[See Note below]</b>
              </span>
            </label>

            <label
              for="14yo"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="14yo"
                value="14yo"
                name="reasona"
                v-model="data.reasonA"
                required
              />
              <span>
                I have reached my 14th birthday and am registering as required. My existing card will expire BEFORE my 16th birthday.
              </span>
            </label>

            <div class="text-red border-l-2 border-red px-2 my-1 text-sm font-[600]">
              NOTE: If you are filing this application before your 14th birthday, or more than 30 days after your 14th birthday, you must select
              <a href="#2j" class="underline">this option</a>.
              However, if your card has expired, you must select <a href="#2f" class="underline">this option instead</a>.
            </div>

            <label
              for="taking_up_commuter"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="taking_up_commuter"
                value="taking_up_commuter"
                name="reasona"
                v-model="data.reasonA"
                required
              />
              <span>
                I am a permanent resident who is taking up commuter status
              </span>
            </label>

            <template v-if="data.reasonA === 'taking_up_commuter' || data.reasonA === 'actual_residence' || !isEmpty(data.port_of_entry)">
              <label
                for="port_of_entry"
                class="ml-10 flex flex-col gap-2 border p-3 rounded-md cursor-pointer"
              >
                <span class="text-sm">
                  <b>My Port-of-Entry (POE) into the United States will be:</b>
                  City or Town and State
                </span>
                <input
                  type="text"
                  id="port_of_entry"
                  class="p-2 border focus:outline-primary rounded-md"
                  name="reasona"
                  v-model="data.port_of_entry"
                  required
                />
              </label>

              <label
                for="actual_residence"
                class="ml-10 flex items-center gap-2 border p-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="actual_residence"
                  value="actual_residence"
                  name="reasona"
                  v-model="data.reasonA"
                  required
                />
                <span>
                  I am a permanent resident who is taking up actual residence in the United States.
                </span>
              </label>
            </template>

            <label
              for="converted_to_perm"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="converted_to_perm"
                value="converted_to_perm"
                name="reasona"
                v-model="data.reasonA"
                required
              />
              <span>
                I have been automatically converted to lawful permanent resident status.
              </span>
            </label>

            <a name="2j" id="2j"></a>
            <label
              for="alien_reg"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
              :class="{ 'border-primary/50' : route.hash === '#2j' }"
            >
              <input
                type="radio"
                id="alien_reg"
                value="alien_reg"
                name="reasona"
                v-model="data.reasonA"
                required
              />
              <span>
                I have a prior edition of the Alien Registration Card, or I am applying to replace my current Permanent Resident Card for a reason that is not specified above.
              </span>
            </label>
          </div>
        </div>

        <AppButton
          mode="submit"
          type="solid"
          size="large"
          color="primary"
          class="mt-5 bg-primary text-white"
        >
          Continue
        </AppButton>
      </form>
    </div>

    <div class="" v-else-if="tab === 'reason-b'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2 mb-5">Reason for Application - Conditional</h2>
      <div
        class="text-red border-l-2 border-red px-2 mb-5 font-[500] text-xl md:w-2/3"
        v-if="data.resident !== 'conditional'"
      >
        This form is to be used only by a conditional permanent resident.

        <button
          class="mt-5 block py-2 px-5 rounded-sm !text-[16px] bg-red text-white"
          @click="emit('update-tab', 'status')"
        >
          Change your status
        </button>
      </div>
      <form v-else @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <div class="mb-5">
          <span class="block mb-2">Select only one option</span>
          <div class="flex flex-col gap-3">
            <label
              for="lost_or_stolen"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="lost_or_stolen"
                value="lost_or_stolen"
                name="reasona"
                v-model="data.reasonB"
                required
              />
              <span>My previous card has been lost, stolen, or destroyed</span>
            </label>

            <label
              for="never_received"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="never_received"
                value="never_received"
                name="reasona"
                v-model="data.reasonB"
                required
              />
              <span>My previous card was issued but never received</span>
            </label>

            <label
              for="multilated"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="multilated"
                value="multilated"
                name="reasona"
                v-model="data.reasonB"
                required
              />
              <span>My previous card has been multilated</span>
            </label>

            <label
              for="incorrect_data"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="incorrect_data"
                value="incorrect_data"
                name="reasona"
                v-model="data.reasonB"
                required
              />
              <span
                >My previous card has incorrect data because of Department of Homeland Security
                (DHS) error. (Attach your existing card with incorrect data along with this
                application)</span
              >
            </label>

            <label
              for="data_changed"
              class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="data_changed"
                value="data_changed"
                name="reasona"
                v-model="data.reasonB"
                required
              />
              <span>
                My name or other biographic information has been legally changed since issuance of my existing card
              </span>
            </label>
          </div>
        </div>

        <AppButton
          mode="submit"
          type="solid"
          size="large"
          color="primary"
          class="mt-5 bg-primary text-white"
        >
          Continue
        </AppButton>
      </form>
    </div>
  </section>
</template>
