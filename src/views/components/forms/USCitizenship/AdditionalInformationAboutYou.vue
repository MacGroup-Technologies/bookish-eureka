<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

import AppButton from '@/components/Button.vue'

defineProps<{ tab: string }>()

const { currentForm } = useUserStore()
const emit = defineEmits(['next'])
const data: Ref<any> = ref({ ...currentForm })

const sendData = function () {
  emit('next', data.value)
}
</script>
<template>
  <section class="">
    <h2 class="border-b font-bold text-2xl text-primary pb-2">Additional Information About You</h2>
    <p class="mt-3 pl-2 text-red border-l-2 border-red">
      When a question includes the word <b>“EVER,”</b> you must provide information about any of
      your actions or conduct that occurred anywhere in the world at any time, unless the question
      specifies otherwise.
    </p>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <div class="my-5">
        Have you <b>Ever</b> claimed to be a U.S citizen <i>(in writing or any way)</i>?

        <div class="flex gap-3 mt-2">
          <label
            for="claim_us_citizen_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="claim_us_citizen_true"
              name="claim_us_citizen"
              v-model="data.claim_us_citizen_yes"
              :checked="data.claim_us_citizen_yes"
              :value="data.claim_us_citizen_yes ? false : true"
              @change="
                data.claim_us_citizen_yes
                  ? (data.claim_us_citizen_no = false)
                  : (data.claim_us_citizen_no = true)
              "
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="claim_us_citizen_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="claim_us_citizen_false"
              name="claim_us_citizen"
              v-model="data.claim_us_citizen_no"
              :checked="data.claim_us_citizen_no"
              :value="data.claim_us_citizen_no ? false : true"
              @change="
                data.claim_us_citizen_no
                  ? (data.claim_us_citizen_yes = false)
                  : (data.claim_us_citizen_yes = true)
              "
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="mb-5">
        Have you <b>Ever</b> been registered to vote or voted in any Federal, state, or local
        election in the United States? If you lawfully voted only in a local election where
        noncitizens are eligible to vote, you may answer <i>No</i>

        <div class="flex gap-3 mt-2">
          <label
            for="register_to_vote_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="register_to_vote_true"
              name="register_to_vote"
              v-model="data.register_to_vote_yes"
              :checked="data.register_to_vote_yes"
              :value="data.register_to_vote_yes ? false : true"
              @change="
                data.register_to_vote_yes
                  ? (data.register_to_vote_no = false)
                  : (data.register_to_vote_no = true)
              "
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="register_to_vote_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="register_to_vote_false"
              name="register_to_vote"
              v-model="data.register_to_vote_no"
              :checked="data.register_to_vote_no"
              :value="data.register_to_vote_no ? false : true"
              @change="
                data.register_to_vote_no
                  ? (data.register_to_vote_yes = false)
                  : (data.register_to_vote_yes = true)
              "
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="mb-5">
        Do you currently owe any overdue Federal, state or local taxes in the United States?

        <div class="flex gap-3 mt-2">
          <label
            for="owe_state_tax_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="owe_state_tax_true"
              name="owe_state_tax"
              v-model="data.owe_state_tax_yes"
              :checked="data.owe_state_tax_yes"
              :value="data.owe_state_tax_yes ? false : true"
              @change="
                data.owe_state_tax_yes
                  ? (data.owe_state_tax_no = false)
                  : (data.owe_state_tax_no = true)
              "
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="owe_state_tax_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="owe_state_tax_false"
              name="owe_state_tax"
              v-model="data.owe_state_tax_no"
              :checked="data.owe_state_tax_no"
              :value="data.owe_state_tax_no ? false : true"
              @change="
                data.owe_state_tax_no
                  ? (data.owe_state_tax_yes = false)
                  : (data.owe_state_tax_yes = true)
              "
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="mb-5">
        Since you became a lawful permanent resident, have you called yourself a
        <i>"nonresident alien"</i> on a Federal, state or local tax return or decided not to file a
        tax return because you considered yourself to be a nonresident?

        <div class="flex gap-3 mt-2">
          <label
            for="called_alien_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="called_alien_true"
              name="called_alien"
              v-model="data.called_alien_yes"
              :checked="data.called_alien_yes"
              :value="data.called_alien_yes ? false : true"
              @change="
                data.called_alien_yes
                  ? (data.called_alien_no = false)
                  : (data.called_alien_no = true)
              "
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="called_alien_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="called_alien_false"
              name="called_alien"
              v-model="data.called_alien_no"
              :checked="data.called_alien_no"
              :value="data.called_alien_no ? false : true"
              @change="
                data.called_alien_no
                  ? (data.called_alien_yes = false)
                  : (data.called_alien_yes = true)
              "
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <h3 class="mb-2 text-lg">Have you <b>EVER</b>:</h3>

      <div class="mb-5">
        Been a member of, involved in, or in any way associated with any Communist or Totalitarian
        party <b>anywhere in the world</b>?

        <div class="flex gap-3 mt-2">
          <label
            for="join_communist_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="join_communist_true"
              name="join_communist"
              v-model="data.join_communist_yes"
              :checked="data.join_communist_yes"
              :value="data.join_communist_yes ? false : true"
              @change="
                data.join_communist_yes
                  ? (data.join_communist_no = false)
                  : (data.join_communist_no = true)
              "
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="join_communist_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="join_communist_false"
              name="join_communist"
              v-model="data.join_communist_no"
              :checked="data.join_communist_no"
              :value="data.join_communist_no ? false : true"
              @change="
                data.join_communist_no
                  ? (data.join_communist_yes = false)
                  : (data.join_communist_yes = true)
              "
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="mb-5">
        Advocated <i>(supported and promoted)</i> any of the following, or been a member of,
        involved in, or any way associated with any group <b>anywhere in the world</b> that
        advocated any of the following:
        <ul class="my-1 list-inside list-disc text-[16px]">
          <li>Opposition to all organized government;</li>
          <li>World communism;</li>
          <li>The establishment in the United States of a totalitarian dictatorship;</li>
          <li>
            The overthrow by force or violence or other unconstitutional means of the Government of
            the United States or all forms of law;
          </li>
          <li>
            The unlawful assaulting or killing of any officier or officiers of the Government of the
            United States or of any organized governement because of their official character;
          </li>
          <li>The unlawful damage, injury, or destruction of property; or</li>
          <li>Sabotage?</li>
        </ul>

        <div class="flex gap-3 mt-2">
          <label
            for="advocate_list_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="advocate_list_true"
              name="advocate_list"
              v-model="data.advocate_list_yes"
              :checked="data.advocate_list_yes"
              :value="data.advocate_list_yes ? false : true"
              @change="
                data.advocate_list_yes
                  ? (data.advocate_list_no = false)
                  : (data.advocate_list_no = true)
              "
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="advocate_list_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="advocate_list_false"
              name="advocate_list"
              v-model="data.advocate_list_no"
              :checked="data.advocate_list_no"
              :value="data.advocate_list_no ? false : true"
              @change="
                data.advocate_list_no
                  ? (data.advocate_list_yes = false)
                  : (data.advocate_list_yes = true)
              "
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <h3 class="mb-2 text-lg">
        Have you <b>EVER</b> been a member of, involved in, or in any way associated with, or have
        you <b>EVER</b> provided money, a thing of value, service or labor, or any other assistance
        or support to a group that:
      </h3>

      <div class="pl-5 border-l">
        <div class="mb-5">
          Used a weapon or explosive with intent to harm another person or cause damage to property?

          <div class="flex gap-3 mt-2">
            <label
              for="use_wepon_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="use_wepon_true"
                name="use_wepon"
                v-model="data.use_wepon_yes"
                :checked="data.use_wepon_yes"
                :value="data.use_wepon_yes ? false : true"
                @change="
                  data.use_wepon_yes ? (data.use_wepon_no = false) : (data.use_wepon_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="use_wepon_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="use_wepon_false"
                name="use_wepon"
                v-model="data.use_wepon_no"
                :checked="data.use_wepon_no"
                :value="data.use_wepon_no ? false : true"
                @change="
                  data.use_wepon_no ? (data.use_wepon_yes = false) : (data.use_wepon_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="mb-5">
          Engaged <i>(participated)</i> in kidnapping, assasination, or hijacking or sabotage of an
          airplane, ship, vehicle, or other mode of transportation?

          <div class="flex gap-3 mt-2">
            <label
              for="enguage_kidnap_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="enguage_kidnap_true"
                name="enguage_kidnap"
                v-model="data.enguage_kidnap_yes"
                :checked="data.enguage_kidnap_yes"
                :value="data.enguage_kidnap_yes ? false : true"
                @change="
                  data.enguage_kidnap_yes
                    ? (data.enguage_kidnap_no = false)
                    : (data.enguage_kidnap_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="enguage_kidnap_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="enguage_kidnap_false"
                name="enguage_kidnap"
                v-model="data.enguage_kidnap_no"
                :checked="data.enguage_kidnap_no"
                :value="data.enguage_kidnap_no ? false : true"
                @change="
                  data.enguage_kidnap_no
                    ? (data.enguage_kidnap_yes = false)
                    : (data.enguage_kidnap_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="mb-5">
          Threatened,attempted <i>(tried)</i> conspired <i>(planned with others)</i>, prepared,
          planned, advocated for, or incited <i>(encouraged)</i> others to commit any of the acts
          listed above.

          <div class="flex gap-3 mt-2">
            <label
              for="threatened_attempted_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="threatened_attempted_true"
                name="threatened_attempted"
                v-model="data.threatened_attempted_yes"
                :checked="data.threatened_attempted_yes"
                :value="data.threatened_attempted_yes ? false : true"
                @change="
                  data.threatened_attempted_yes
                    ? (data.threatened_attempted_no = false)
                    : (data.threatened_attempted_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="threatened_attempted_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="threatened_attempted_false"
                name="threatened_attempted"
                v-model="data.threatened_attempted_no"
                :checked="data.threatened_attempted_no"
                :value="data.threatened_attempted_no ? false : true"
                @change="
                  data.threatened_attempted_no
                    ? (data.threatened_attempted_yes = false)
                    : (data.threatened_attempted_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>

      <h3 class="mb-2 text-lg">
        Have you <b>EVER</b> ordered, incited, called for, committed, assisted, helped with, or
        otherwise participated in any of the following:
      </h3>

      <div class="pl-5 border-l">
        <div class="mb-5 flex gap-10 items-center">
          Torture?

          <div class="flex gap-3">
            <label
              for="torture_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="torture_true"
                name="torture"
                v-model="data.torture_yes"
                :checked="data.torture_yes"
                :value="data.torture_yes ? false : true"
                @change="data.torture_yes ? (data.torture_no = false) : (data.torture_no = true)"
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="torture_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="torture_false"
                name="torture"
                v-model="data.torture_no"
                :checked="data.torture_no"
                :value="data.torture_no ? false : true"
                @change="data.torture_no ? (data.torture_yes = false) : (data.torture_yes = true)"
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="mb-5 flex gap-10 items-center">
          Genocide?

          <div class="flex gap-3">
            <label
              for="genocide_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="genocide_true"
                name="genocide"
                v-model="data.genocide_yes"
                :checked="data.genocide_yes"
                :value="data.genocide_yes ? false : true"
                @change="data.genocide_yes ? (data.genocide_no = false) : (data.genocide_no = true)"
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="genocide_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="genocide_false"
                name="genocide"
                v-model="data.genocide_no"
                :checked="data.genocide_no"
                :value="data.genocide_no ? false : true"
                @change="
                  data.genocide_no ? (data.genocide_yes = false) : (data.genocide_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="mb-5 flex gap-10 items-center">
          Killing or trying to kill any person?

          <div class="flex gap-3">
            <label
              for="kill_person_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="kill_person_true"
                name="kill_person"
                v-model="data.kill_person_yes"
                :checked="data.kill_person_yes"
                :value="data.kill_person_yes ? false : true"
                @change="
                  data.kill_person_yes
                    ? (data.kill_person_no = false)
                    : (data.kill_person_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="kill_person_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="kill_person_false"
                name="kill_person"
                v-model="data.kill_person_no"
                :checked="data.kill_person_no"
                :value="data.kill_person_no ? false : true"
                @change="
                  data.kill_person_no
                    ? (data.kill_person_yes = false)
                    : (data.kill_person_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="mb-5 flex gap-10 items-center">
          Intentionally and severely injuring or trying to injure any person?

          <div class="flex gap-3">
            <label
              for="intentionally_injure_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="intentionally_injure_true"
                name="intentionally_injure"
                v-model="data.intentionally_injure_yes"
                :checked="data.intentionally_injure_yes"
                :value="data.intentionally_injure_yes ? false : true"
                @change="
                  data.intentionally_injure_yes
                    ? (data.intentionally_injure_no = false)
                    : (data.intentionally_injure_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="intentionally_injure_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="intentionally_injure_false"
                name="intentionally_injure"
                v-model="data.intentionally_injure_no"
                :checked="data.intentionally_injure_no"
                :value="data.intentionally_injure_no ? false : true"
                @change="
                  data.intentionally_injure_no
                    ? (data.intentionally_injure_yes = false)
                    : (data.intentionally_injure_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="mb-5">
          <p>
            Any king of sexual contact or activity with any person who did not consent
            <i>(did not agree)</i> or was unable to consent <i>(could not agree)</i>, or was being
            forced or threatened by you or someone else?
          </p>

          <div class="flex gap-3 mt-2">
            <label
              for="sexual_contact_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="sexual_contact_true"
                name="sexual_contact"
                v-model="data.sexual_contact_yes"
                :checked="data.sexual_contact_yes"
                :value="data.sexual_contact_yes ? false : true"
                @change="
                  data.sexual_contact_yes
                    ? (data.sexual_contact_no = false)
                    : (data.sexual_contact_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="sexual_contact_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="sexual_contact_false"
                name="sexual_contact"
                v-model="data.sexual_contact_no"
                :checked="data.sexual_contact_no"
                :value="data.sexual_contact_no ? false : true"
                @change="
                  data.sexual_contact_no
                    ? (data.sexual_contact_yes = false)
                    : (data.sexual_contact_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="mb-5 flex gap-10 items-center">
          Not letting someone practice their religion?

          <div class="flex gap-3">
            <label
              for="not_let_religion_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="not_let_religion_true"
                name="not_let_religion"
                v-model="data.not_let_religion_yes"
                :checked="data.not_let_religion_yes"
                :value="data.not_let_religion_yes ? false : true"
                @change="
                  data.not_let_religion_yes
                    ? (data.not_let_religion_no = false)
                    : (data.not_let_religion_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="not_let_religion_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="not_let_religion_false"
                name="not_let_religion"
                v-model="data.not_let_religion_no"
                :checked="data.not_let_religion_no"
                :value="data.not_let_religion_no ? false : true"
                @change="
                  data.not_let_religion_no
                    ? (data.not_let_religion_yes = false)
                    : (data.not_let_religion_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="mb-5">
          Causing harm or suffering to any person because of their race, religion, national origin,
          membership in a particular social group, or political opinion?

          <div class="flex gap-3 mt-2">
            <label
              for="cause_harm_or_suffring_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="cause_harm_or_suffring_true"
                name="cause_harm_or_suffring"
                v-model="data.cause_harm_or_suffring_yes"
                :checked="data.cause_harm_or_suffring_yes"
                :value="data.cause_harm_or_suffring_yes ? false : true"
                @change="
                  data.cause_harm_or_suffring_yes
                    ? (data.cause_harm_or_suffring_no = false)
                    : (data.cause_harm_or_suffring_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="cause_harm_or_suffring_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="cause_harm_or_suffring_false"
                name="cause_harm_or_suffring"
                v-model="data.cause_harm_or_suffring_no"
                :checked="data.cause_harm_or_suffring_no"
                :value="data.cause_harm_or_suffring_no ? false : true"
                @change="
                  data.cause_harm_or_suffring_no
                    ? (data.cause_harm_or_suffring_yes = false)
                    : (data.cause_harm_or_suffring_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>

      <div class="mb-5">
        Have you <b>EVER</b> served in, been a member of, assisted <i>(helped)</i>, or participated
        in any military or police unit?

        <div class="flex gap-3 mt-2">
          <label
            for="assited_police_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="assited_police_true"
              name="assited_police"
              v-model="data.assited_police_yes"
              :checked="data.assited_police_yes"
              :value="data.assited_police_yes ? false : true"
              @change="
                data.assited_police_yes
                  ? (data.assited_police_no = false)
                  : (data.assited_police_no = true)
              "
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="assited_police_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="assited_police_false"
              name="assited_police"
              v-model="data.assited_police_no"
              :checked="data.assited_police_no"
              :value="data.assited_police_no ? false : true"
              @change="
                data.assited_police_no
                  ? (data.assited_police_yes = false)
                  : (data.assited_police_yes = true)
              "
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="mb-5">
        Have you <b>EVER</b> served in, been a member of, assisted <i>(helped)</i>, or participated
        in any armed group <i>(a group that carries weapons)</i>, for example: paramilitary unit
        <i>
          (a group of people who act like a military group but are not part of the official
          military) </i
        >, self defence unnit, vigilante group, rebel group, or guerilla group?

        <div class="flex gap-3 mt-2">
          <label
            for="assited_police_true2"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="assited_police_true2"
              name="assited_police2"
              v-model="data.assited_police_yes2"
              :checked="data.assited_police_yes2"
              :value="data.assited_police_yes2 ? false : true"
              @change="
                data.assited_police_yes2
                  ? (data.assited_police_no2 = false)
                  : (data.assited_police_no2 = true)
              "
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="assited_police_false2"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="assited_police_false2"
              name="assited_police2"
              v-model="data.assited_police_no2"
              :checked="data.assited_police_no2"
              :value="data.assited_police_no2 ? false : true"
              @change="
                data.assited_police_no2
                  ? (data.assited_police_yes2 = false)
                  : (data.assited_police_yes2 = true)
              "
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="mb-5">
        Have you <b>EVER</b> worked, volunteered, or otherwise served in a place where people were
        detained <i>(forced to stay)</i>, for example, a prison jail, prison camp
        <i>(a camp where prisoners of war or political prisoners are kept)</i>, detention facility,
        or labor camp, or have you <b>EVER</b> directed or participated in any other activity that
        involved detaining people?

        <div class="flex gap-3 mt-2">
          <label
            for="volunteer_jail_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="volunteer_jail_true"
              name="volunteer_jail"
              v-model="data.volunteer_jail_yes"
              :checked="data.volunteer_jail_yes"
              :value="data.volunteer_jail_yes ? false : true"
              @change="
                data.volunteer_jail_yes
                  ? (data.volunteer_jail_no = false)
                  : (data.volunteer_jail_no = true)
              "
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="volunteer_jail_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="volunteer_jail_false"
              name="volunteer_jail"
              v-model="data.volunteer_jail_no"
              :checked="data.volunteer_jail_no"
              :value="data.volunteer_jail_no ? false : true"
              @change="
                data.volunteer_jail_no
                  ? (data.volunteer_jail_yes = false)
                  : (data.volunteer_jail_yes = true)
              "
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="mb-5">
        Were you <b>EVER</b> a part of any group, or did you <b>EVER</b> help any group, unit, or
        organization that used a weapon against a person, or threatened to do so?

        <div class="flex gap-3 mt-2">
          <label
            for="organization_use_weapon_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="organization_use_weapon_true"
              name="organization_use_weapon"
              v-model="data.organization_use_weapon_yes"
              :checked="data.organization_use_weapon_yes"
              :value="data.organization_use_weapon_yes ? false : true"
              @change="
                data.organization_use_weapon_yes
                  ? (data.organization_use_weapon_no = false)
                  : (data.organization_use_weapon_no = true)
              "
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="organization_use_weapon_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="organization_use_weapon_false"
              name="organization_use_weapon"
              v-model="data.organization_use_weapon_no"
              :checked="data.organization_use_weapon_no"
              :value="data.organization_use_weapon_no ? false : true"
              @change="
                data.organization_use_weapon_no
                  ? (data.organization_use_weapon_yes = false)
                  : (data.organization_use_weapon_yes = true)
              "
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="pl-5 border-l" v-if="data.organization_use_weapon_yes">
        <div class="mb-5">
          When you were part of the group above, or when you helped this group, did you ever use a
          weapon against another person?

          <div class="flex gap-3 mt-2">
            <label
              for="organization_use_weapon_true2"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="organization_use_weapon_true2"
                name="organization_use_weapon2"
                v-model="data.organization_use_weapon_yes2"
                :checked="data.organization_use_weapon_yes2"
                :value="data.organization_use_weapon_yes2 ? false : true"
                @change="
                  data.organization_use_weapon_yes2
                    ? (data.organization_use_weapon_no2 = false)
                    : (data.organization_use_weapon_no2 = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="organization_use_weapon_false2"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="organization_use_weapon_false2"
                name="organization_use_weapon2"
                v-model="data.organization_use_weapon_no2"
                :checked="data.organization_use_weapon_no2"
                :value="data.organization_use_weapon_no2 ? false : true"
                @change="
                  data.organization_use_weapon_no2
                    ? (data.organization_use_weapon_yes2 = false)
                    : (data.organization_use_weapon_yes2 = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="mb-5">
          When you were part of the group above, or when you helped this group, did you ever
          threaten another person that you would use a weapon against that person?

          <div class="flex gap-3 mt-2">
            <label
              for="organization_use_weapon_true3"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="organization_use_weapon_true3"
                name="organization_use_weapon3"
                v-model="data.organization_use_weapon_yes3"
                :checked="data.organization_use_weapon_yes3"
                :value="data.organization_use_weapon_yes3 ? false : true"
                @change="
                  data.organization_use_weapon_yes3
                    ? (data.organization_use_weapon_no3 = false)
                    : (data.organization_use_weapon_no3 = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="organization_use_weapon_false3"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="organization_use_weapon_false3"
                name="organization_use_weapon3"
                v-model="data.organization_use_weapon_no3"
                :checked="data.organization_use_weapon_no3"
                :value="data.organization_use_weapon_no3 ? false : true"
                @change="
                  data.organization_use_weapon_no3
                    ? (data.organization_use_weapon_yes3 = false)
                    : (data.organization_use_weapon_yes3 = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>

      <div class="mb-5">
        Have you <b>EVER</b> sold, provided, or transported weapons, or assisted any person in
        selling, providing, or transporting weapons, which yo knew or believed would be against
        another person?

        <div class="flex gap-3 mt-2">
          <label
            for="Q11_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q11_true"
              name="Q11"
              v-model="data.Q11_yes"
              :checked="data.Q11_yes"
              :value="data.Q11_yes ? false : true"
              @change="data.Q11_yes ? (data.Q11_no = false) : (data.Q11_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q11_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q11_false"
              name="Q11"
              v-model="data.Q11_no"
              :checked="data.Q11_no"
              :value="data.Q11_no ? false : true"
              @change="data.Q11_no ? (data.Q11_yes = false) : (data.Q11_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="mb-5">
        Have you <b>EVER</b> sold, provided, or transported weapons, or assisted any person in
        selling, providing, or transporting weapons, which you knew or believed would be used
        against another person?

        <div class="flex gap-3 mt-2">
          <label
            for="Q12_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q12_true"
              name="Q12"
              v-model="data.Q12_yes"
              :checked="data.Q12_yes"
              :value="data.Q12_yes ? false : true"
              @change="data.Q12_yes ? (data.Q12_no = false) : (data.Q12_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q12_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q12_false"
              name="Q12"
              v-model="data.Q12_no"
              :checked="data.Q12_no"
              :value="data.Q12_no ? false : true"
              @change="data.Q12_no ? (data.Q12_yes = false) : (data.Q12_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="mb-5">
        Have you <b>EVER</b> recruited <i>(asked)</i>, enlisted <i>(signed up)</i>, conscripted
        <i>(required to join)</i>, or used any person under 15 years of age to serve in or help an
        armed group, or attempted or worked with others to do so?

        <div class="flex gap-3 mt-2">
          <label
            for="Q13_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q13_true"
              name="Q13"
              v-model="data.Q13_yes"
              :checked="data.Q13_yes"
              :value="data.Q13_yes ? false : true"
              @change="data.Q13_yes ? (data.Q13_no = false) : (data.Q13_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q13_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q13_false"
              name="Q13"
              v-model="data.Q13_no"
              :checked="data.Q13_no"
              :value="data.Q13_no ? false : true"
              @change="data.Q13_no ? (data.Q13_yes = false) : (data.Q13_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="mb-5">
        Have you <b>EVER</b> used any person under 15 years of age to take part inhostilities or
        attempted or worked with others to do so? This could include participating in combact or
        providing services related to combact
        <i>(such as serving as a messanger or transporting supplies)</i>.

        <div class="flex gap-3 mt-2">
          <label
            for="Q14_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q14_true"
              name="Q14"
              v-model="data.Q14_yes"
              :checked="data.Q14_yes"
              :value="data.Q14_yes ? false : true"
              @change="data.Q14_yes ? (data.Q14_no = false) : (data.Q14_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q14_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q14_false"
              name="Q14"
              v-model="data.Q14_no"
              :checked="data.Q14_no"
              :value="data.Q14_no ? false : true"
              @change="data.Q14_no ? (data.Q14_yes = false) : (data.Q14_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="my-5">
        <div class="text-red border-l-2 border-red px-2 mb-5">
          <b
            >If you answer "YES" to any part of the questions below, complete the crime history
            section afterwards with each crime or offense even if your records have been sealed,
            expunged, or otherwise cleared.</b
          >
          <br />
          You must disclose this information even if someone, including a judge, law enforcement, or
          attorney, told you that it is no longer on your record, or told you that you do not have
          to disclose the information.
          <p class="underline inline">
            Submit evidence to support your answers with your Form N-400
          </p>
        </div>
      </div>

      <div class="mb-5">
        Include all the crimes and offenses in the United States or <b>anywhere in the world</b>
        <i>
          (including domestic violence, driving under the influence of drugs or alcohol, and crimes
          and offenses while you were under 18 years of age)
        </i>
        which you <b>EVER</b>:

        <ul class="mt-3 list-inside list-disc">
          <li>Committed, agreed to commit, or asked someone else to commit;</li>
          <li>
            Were arrested, cited, detained, or confined by any law enforcement officer, military
            <i>(in the U.S or elsewhere)</i>, or immigration official;
          </li>
          <li>Were charged with committing, helping commit, or trying to commit;</li>
          <li>Pled guilty to;</li>
          <li>Were convicted of;</li>
          <li>
            Were placed in alternative sentencing or a rehabilitative program for
            <i
              >(for example, diversion, deferred prosecution, withheld adjudication, or deferred
              adjudication); or</i
            >
          </li>
          <li>
            Received a suspended sentence, clemency, amnesty, or pardon for, or were placed on
            probation or paroled for.
          </li>
        </ul>
      </div>

      <div class="my-5">
        Have you <b>EVER</b> committed, agreed to commit, asked someone else to commit, helped
        commit, or tried to commit a crime or offense for which you were not arrested?

        <div class="flex gap-3 mt-2">
          <label
            for="Q15a_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q15a_true"
              name="Q15a"
              v-model="data.Q15a_yes"
              :checked="data.Q15a_yes"
              :value="data.Q15a_yes ? false : true"
              @change="data.Q15a_yes ? (data.Q15a_no = false) : (data.Q15a_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q15a_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q15a_false"
              name="Q15a"
              v-model="data.Q15a_no"
              :checked="data.Q15a_no"
              :value="data.Q15a_no ? false : true"
              @change="data.Q15a_no ? (data.Q15a_yes = false) : (data.Q15a_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="my-5">
        Have you <b>EVER</b> been arrested, cited, detained or confined by any law enforcement
        officier, military official <i>(in the U.S or elsewhere)</i>, or immigration official for
        any reason charged with a crime or offense?

        <div class="flex gap-3 mt-2">
          <label
            for="Q15b_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q15b_true"
              name="Q15b"
              v-model="data.Q15b_yes"
              :checked="data.Q15b_yes"
              :value="data.Q15b_yes ? false : true"
              @change="data.Q15b_yes ? (data.Q15b_no = false) : (data.Q15b_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q15b_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q15b_false"
              name="Q15b"
              v-model="data.Q15b_no"
              :checked="data.Q15b_no"
              :value="data.Q15b_no ? false : true"
              @change="data.Q15b_no ? (data.Q15b_yes = false) : (data.Q15b_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="" v-if="data.Q15a_yes || data.Q15b_yes">
        <h3 class="font-semibold mb-3">Crime History</h3>
        <div class="p-3 bg-primary-10 rounded-xl mb-5">
          <label for="crime_commited" class="flex flex-col gap-2 mb-5">
            <span>What was the crime or offense?</span>
            <small
              >If convicted, provide crime of conviction, If not convicted, provide crime or offense
              listed in arrest, citation, charging document, or crime committed.</small
            >
            <textarea
              id="crime_commited"
              v-model="data.crime_commited"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Crime committed"
            />
          </label>
          <div class="flex gap-5 mb-5">
            <label for="date_of_crime" class="flex flex-col gap-2 md:w-1/2">
              <span>Date of the Crime or Offense</span>
              <input
                type="date"
                id="date_of_crime"
                v-model="data.date_of_crime"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>

            <label for="date_of_conviction" class="flex flex-col gap-2 md:w-1/2">
              <span>Date of Conviction</span>
              <input
                type="date"
                id="date_of_conviction"
                v-model="data.date_of_conviction"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>
          </div>

          <label for="place_of_crime" class="flex flex-col gap-2 mb-5">
            <span>Place of Crime or Offense</span>
            <input
              type="text"
              id="place_of_crime"
              v-model="data.crime_state"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="City or Town, State, Country"
            />
          </label>

          <div class="flex items-end gap-5 mb-5">
            <label for="displosition" class="flex flex-col gap-2 md:w-1/2">
              <span>What was the result or disposition of the arrest, citation or charge?</span>
              <small
                >(no charges filed, convicted, charges dismissed, detention, jail, prohibition,
                e.t.c)</small
              >
              <input
                type="text"
                id="displosition"
                v-model="data.arrest_result"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="What was the result or disposition of the arrest, citation or charge?"
              />
            </label>

            <label for="sentence" class="flex flex-col gap-2 md:w-1/2">
              <span>What was your sentence</span>
              <small
                ><b>if applicable:</b> (For example: 90 days in jail, 90 days on probation)</small
              >
              <input
                type="text"
                id="sentence"
                v-model="data.sentence"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Sentence"
              />
            </label>
          </div>
        </div>

        <div class="p-3 bg-primary/10 rounded-xl mb-5">
          <label for="crime_commited2" class="flex flex-col gap-2 mb-5">
            <span>What was the crime or offense?</span>
            <small
              >If convicted, provide crime of conviction, If not convicted, provide crime or offense
              listed in arrest, citation, charging document, or crime committed.</small
            >
            <textarea
              id="crime_commited2"
              v-model="data.crime_commited2"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Crime committed"
            />
          </label>
          <div class="flex gap-5 mb-5">
            <label for="date_of_crime2" class="flex flex-col gap-2 md:w-1/2">
              <span>Date of the Crime or Offense</span>
              <input
                type="date"
                id="date_of_crime2"
                v-model="data.date_of_crime2"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>

            <label for="date_of_conviction2" class="flex flex-col gap-2 md:w-1/2">
              <span>Date of Conviction</span>
              <input
                type="date"
                id="date_of_conviction2"
                v-model="data.date_of_conviction2"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>
          </div>

          <label for="place_of_crime2" class="flex flex-col gap-2 mb-5">
            <span>Place of Crime or Offense</span>
            <input
              type="text"
              id="place_of_crime2"
              v-model="data.crime_state2"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="City or Town, State, Country"
            />
          </label>

          <div class="flex items-end gap-5 mb-5">
            <label for="displosition2" class="flex flex-col gap-2 md:w-1/2">
              <span>What was the result or disposition of the arrest, citation or charge?</span>
              <small
                >(no charges filed, convicted, charges dismissed, detention, jail, prohibition,
                e.t.c)</small
              >
              <input
                type="text"
                id="displosition2"
                v-model="data.arrest_result2"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="What was the result or disposition of the arrest, citation or charge?"
              />
            </label>

            <label for="sentence2" class="flex flex-col gap-2 md:w-1/2">
              <span>What was your sentence</span>
              <small
                ><b>if applicable:</b> (For example: 90 days in jail, 90 days on probation)</small
              >
              <input
                type="text"
                id="sentence2"
                v-model="data.sentence2"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Sentence"
              />
            </label>
          </div>
        </div>

        <div class="p-3 bg-primary/20 rounded-xl mb-5">
          <label for="crime_commited3" class="flex flex-col gap-2 mb-5">
            <span>What was the crime or offense?</span>
            <small
              >If convicted, provide crime of conviction, If not convicted, provide crime or offense
              listed in arrest, citation, charging document, or crime committed.</small
            >
            <textarea
              id="crime_commited3"
              v-model="data.crime_commited3"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Crime committed"
            />
          </label>
          <div class="flex gap-5 mb-5">
            <label for="date_of_crime3" class="flex flex-col gap-2 md:w-1/2">
              <span>Date of the Crime or Offense</span>
              <input
                type="date"
                id="date_of_crime3"
                v-model="data.date_of_crime3"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>

            <label for="date_of_conviction3" class="flex flex-col gap-2 md:w-1/2">
              <span>Date of Conviction</span>
              <input
                type="date"
                id="date_of_conviction3"
                v-model="data.date_of_conviction3"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>
          </div>

          <label for="place_of_crime3" class="flex flex-col gap-2 mb-5">
            <span>Place of Crime or Offense</span>
            <input
              type="text"
              id="place_of_crime3"
              v-model="data.crime_state3"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="City or Town, State, Country"
            />
          </label>

          <div class="flex items-end gap-5 mb-5">
            <label for="displosition3" class="flex flex-col gap-2 md:w-1/2">
              <span>What was the result or disposition of the arrest, citation or charge?</span>
              <small
                >(no charges filed, convicted, charges dismissed, detention, jail, prohibition,
                e.t.c)</small
              >
              <input
                type="text"
                id="displosition3"
                v-model="data.arrest_result3"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="What was the result or disposition of the arrest, citation or charge?"
              />
            </label>

            <label for="sentence3" class="flex flex-col gap-2 md:w-1/2">
              <span>What was your sentence</span>
              <small
                ><b>if applicable:</b> (For example: 90 days in jail, 90 days on probation)</small
              >
              <input
                type="text"
                id="sentence3"
                v-model="data.sentence3"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Sentence"
              />
            </label>
          </div>
        </div>

        <div class="p-3 bg-red/5 rounded-xl mb-5">
          <label for="crime_commited4" class="flex flex-col gap-2 mb-5">
            <span>What was the crime or offense?</span>
            <small
              >If convicted, provide crime of conviction, If not convicted, provide crime or offense
              listed in arrest, citation, charging document, or crime committed.</small
            >
            <textarea
              id="crime_commited4"
              v-model="data.crime_commited4"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Crime committed"
            />
          </label>
          <div class="flex gap-5 mb-5">
            <label for="date_of_crime4" class="flex flex-col gap-2 md:w-1/2">
              <span>Date of the Crime or Offense</span>
              <input
                type="date"
                id="date_of_crime4"
                v-model="data.date_of_crime4"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>

            <label for="date_of_conviction4" class="flex flex-col gap-2 md:w-1/2">
              <span>Date of Conviction</span>
              <input
                type="date"
                id="date_of_conviction4"
                v-model="data.date_of_conviction4"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>
          </div>

          <label for="place_of_crime4" class="flex flex-col gap-2 mb-5">
            <span>Place of Crime or Offense</span>
            <input
              type="text"
              id="place_of_crime4"
              v-model="data.crime_state4"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="City or Town, State, Country"
            />
          </label>

          <div class="flex items-end gap-5 mb-5">
            <label for="displosition4" class="flex flex-col gap-2 md:w-1/2">
              <span>What was the result or disposition of the arrest, citation or charge?</span>
              <small
                >(no charges filed, convicted, charges dismissed, detention, jail, prohibition,
                e.t.c)</small
              >
              <input
                type="text"
                id="displosition4"
                v-model="data.arrest_result4"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="What was the result or disposition of the arrest, citation or charge?"
              />
            </label>

            <label for="sentence4" class="flex flex-col gap-2 md:w-1/2">
              <span>What was your sentence</span>
              <small
                ><b>if applicable:</b> (For example: 90 days in jail, 90 days on probation)</small
              >
              <input
                type="text"
                id="sentence4"
                v-model="data.sentence4"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Sentence"
              />
            </label>
          </div>
        </div>

        <div class="p-3 bg-red/10 rounded-xl mb-5">
          <label for="crime_commited5" class="flex flex-col gap-2 mb-5">
            <span>What was the crime or offense?</span>
            <small
              >If convicted, provide crime of conviction, If not convicted, provide crime or offense
              listed in arrest, citation, charging document, or crime committed.</small
            >
            <textarea
              id="crime_commited5"
              v-model="data.crime_commited5"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Crime committed"
            />
          </label>
          <div class="flex gap-5 mb-5">
            <label for="date_of_crime5" class="flex flex-col gap-2 md:w-1/2">
              <span>Date of the Crime or Offense</span>
              <input
                type="date"
                id="date_of_crime5"
                v-model="data.date_of_crime5"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>

            <label for="date_of_conviction5" class="flex flex-col gap-2 md:w-1/2">
              <span>Date of Conviction</span>
              <input
                type="date"
                id="date_of_conviction5"
                v-model="data.date_of_conviction5"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>
          </div>

          <label for="place_of_crime5" class="flex flex-col gap-2 mb-5">
            <span>Place of Crime or Offense</span>
            <input
              type="text"
              id="place_of_crime5"
              v-model="data.crime_state4"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="City or Town, State, Country"
            />
          </label>

          <div class="flex items-end gap-5 mb-5">
            <label for="displosition5" class="flex flex-col gap-2 md:w-1/2">
              <span>What was the result or disposition of the arrest, citation or charge?</span>
              <small
                >(no charges filed, convicted, charges dismissed, detention, jail, prohibition,
                e.t.c)</small
              >
              <input
                type="text"
                id="displosition5"
                v-model="data.arrest_result5"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="What was the result or disposition of the arrest, citation or charge?"
              />
            </label>

            <label for="sentence5" class="flex flex-col gap-2 md:w-1/2">
              <span>What was your sentence</span>
              <small
                ><b>if applicable:</b> (For example: 90 days in jail, 90 days on probation)</small
              >
              <input
                type="text"
                id="sentence5"
                v-model="data.sentence5"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Sentence"
              />
            </label>
          </div>
        </div>
      </div>

      <div class="my-5">
        If you received a suspended sentence, were placed on probation, or were paroled, have you
        completed your suspension sentence, probation, or parole?

        <div class="flex gap-3 mt-2">
          <label
            for="Q16_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q16_true"
              name="Q16"
              v-model="data.Q16_yes"
              :checked="data.Q16_yes"
              :value="data.Q16_yes ? false : true"
              @change="data.Q16_yes ? (data.Q16_no = false) : (data.Q16_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q16_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q16_false"
              name="Q16"
              v-model="data.Q16_no"
              :checked="data.Q16_no"
              :value="data.Q16_no ? false : true"
              @change="data.Q16_no ? (data.Q16_yes = false) : (data.Q16_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="my-5">
        <div class="">Have you <b>EVER</b></div>
        <div class="pl-3 border-l">
          <div class="my-5">
            Engaged in prostitution, attempted to procure or import prostitutes or persons for the
            purpose of prostitution, or received any proceeds or money from prostitution?

            <div class="flex gap-3 mt-2">
              <label
                for="Q17a_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17a_true"
                  name="Q17a"
                  v-model="data.Q17a_yes"
                  :checked="data.Q17a_yes"
                  :value="data.Q17a_yes ? false : true"
                  @change="data.Q17a_yes ? (data.Q17a_no = false) : (data.Q17a_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q17a_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17a_false"
                  name="Q17a"
                  v-model="data.Q17a_no"
                  :checked="data.Q17a_no"
                  :value="data.Q17a_no ? false : true"
                  @change="data.Q17a_no ? (data.Q17a_yes = false) : (data.Q17a_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="my-5">
            Manufactured, cultivated, produced, distributed, dispensed, sold, or smuggled
            (trafficked) any controlled substances, illegal drugs, narcotics, or drug paraphernalia
            in violation of any law or regulation of a U.S state, the United States, or foreign
            country?

            <div class="flex gap-3 mt-2">
              <label
                for="Q17b_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17b_true"
                  name="Q17b"
                  v-model="data.Q17b_yes"
                  :checked="data.Q17b_yes"
                  :value="data.Q17b_yes ? false : true"
                  @change="data.Q17b_yes ? (data.Q17b_no = false) : (data.Q17b_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q17b_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17b_false"
                  name="Q17b"
                  v-model="data.Q17b_no"
                  :checked="data.Q17b_no"
                  :value="data.Q17b_no ? false : true"
                  @change="data.Q17b_no ? (data.Q17b_yes = false) : (data.Q17b_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="my-5">
            Been married to more than one person at the same time?

            <div class="flex gap-3 mt-2">
              <label
                for="Q17c_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17c_true"
                  name="Q17c"
                  v-model="data.Q17c_yes"
                  :checked="data.Q17c_yes"
                  :value="data.Q17c_yes ? false : true"
                  @change="data.Q17c_yes ? (data.Q17c_no = false) : (data.Q17c_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q17c_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17c_false"
                  name="Q17c"
                  v-model="data.Q17c_no"
                  :checked="data.Q17c_no"
                  :value="data.Q17c_no ? false : true"
                  @change="data.Q17c_no ? (data.Q17c_yes = false) : (data.Q17c_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="my-5">
            Married someone in order to obtain an immigration benefit?

            <div class="flex gap-3 mt-2">
              <label
                for="Q17d_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17d_true"
                  name="Q17d"
                  v-model="data.Q17d_yes"
                  :checked="data.Q17d_yes"
                  :value="data.Q17d_yes ? false : true"
                  @change="data.Q17d_yes ? (data.Q17d_no = false) : (data.Q17d_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q17d_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17d_false"
                  name="Q17d"
                  v-model="data.Q17d_no"
                  :checked="data.Q17d_no"
                  :value="data.Q17d_no ? false : true"
                  @change="data.Q17d_no ? (data.Q17d_yes = false) : (data.Q17d_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="my-5">
            Helped anyone to enter, or try to enter, the United States illegally?

            <div class="flex gap-3 mt-2">
              <label
                for="Q17e_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17e_true"
                  name="Q17e"
                  v-model="data.Q17e_yes"
                  :checked="data.Q17e_yes"
                  :value="data.Q17e_yes ? false : true"
                  @change="data.Q17e_yes ? (data.Q17e_no = false) : (data.Q17e_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q17e_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17e_false"
                  name="Q17e"
                  v-model="data.Q17e_no"
                  :checked="data.Q17e_no"
                  :value="data.Q17e_no ? false : true"
                  @change="data.Q17e_no ? (data.Q17e_yes = false) : (data.Q17e_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="my-5">
            Gambled illegally or recieved income from illegal gambling?

            <div class="flex gap-3 mt-2">
              <label
                for="Q17f_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17f_true"
                  name="Q17f"
                  v-model="data.Q17f_yes"
                  :checked="data.Q17f_yes"
                  :value="data.Q17f_yes ? false : true"
                  @change="data.Q17f_yes ? (data.Q17f_no = false) : (data.Q17f_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q17f_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17f_false"
                  name="Q17f"
                  v-model="data.Q17f_no"
                  :checked="data.Q17f_no"
                  :value="data.Q17f_no ? false : true"
                  @change="data.Q17f_no ? (data.Q17f_yes = false) : (data.Q17f_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="my-5">
            Failed to support your dependents (pay child support) or pay alimony (court-ordered
            financial support after divorce or seperation)?

            <div class="flex gap-3 mt-2">
              <label
                for="Q17g_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17g_true"
                  name="Q17g"
                  v-model="data.Q17g_yes"
                  :checked="data.Q17g_yes"
                  :value="data.Q17g_yes ? false : true"
                  @change="data.Q17g_yes ? (data.Q17g_no = false) : (data.Q17g_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q17g_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17g_false"
                  name="Q17g"
                  v-model="data.Q17g_no"
                  :checked="data.Q17g_no"
                  :value="data.Q17g_no ? false : true"
                  @change="data.Q17g_no ? (data.Q17g_yes = false) : (data.Q17g_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="my-5">
            Made any misrepresentation to obtain any public benefits in the United States?

            <div class="flex gap-3 mt-2">
              <label
                for="Q17h_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17h_true"
                  name="Q17h"
                  v-model="data.Q17h_yes"
                  :checked="data.Q17h_yes"
                  :value="data.Q17h_yes ? false : true"
                  @change="data.Q17h_yes ? (data.Q17h_no = false) : (data.Q17h_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q17h_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q17h_false"
                  name="Q17h"
                  v-model="data.Q17h_no"
                  :checked="data.Q17h_no"
                  :value="data.Q17h_no ? false : true"
                  @change="data.Q17h_no ? (data.Q17h_yes = false) : (data.Q17h_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="my-5">
        Have you <b>EVER</b> given any US Governemtnofficials <b>any</b> information or
        documentation that was false, fraudulent, or misleading?

        <div class="flex gap-3 mt-2">
          <label
            for="Q18_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q18_true"
              name="Q18"
              v-model="data.Q18_yes"
              :checked="data.Q18_yes"
              :value="data.Q18_yes ? false : true"
              @change="data.Q18_yes ? (data.Q18_no = false) : (data.Q18_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q18_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q18_false"
              name="Q18"
              v-model="data.Q18_no"
              :checked="data.Q18_no"
              :value="data.Q18_no ? false : true"
              @change="data.Q18_no ? (data.Q18_yes = false) : (data.Q18_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="my-5">
        Have you <b>EVER</b> lied to any U.S Governement officials to gain entry or admission into
        the United States or to gain immigration benefits while in the United States?

        <div class="flex gap-3 mt-2">
          <label
            for="Q19_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q19_true"
              name="Q19"
              v-model="data.Q19_yes"
              :checked="data.Q19_yes"
              :value="data.Q19_yes ? false : true"
              @change="data.Q19_yes ? (data.Q19_no = false) : (data.Q19_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q19_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q19_false"
              name="Q19"
              v-model="data.Q19_no"
              :checked="data.Q19_no"
              :value="data.Q19_no ? false : true"
              @change="data.Q19_no ? (data.Q19_yes = false) : (data.Q19_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="my-5">
        Have you <b>EVER</b> been placed in removal, recission, or deportation proceedings?

        <div class="flex gap-3 mt-2">
          <label
            for="Q20_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q20_true"
              name="Q20"
              v-model="data.Q20_yes"
              :checked="data.Q20_yes"
              :value="data.Q20_yes ? false : true"
              @change="data.Q20_yes ? (data.Q20_no = false) : (data.Q20_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q20_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q20_false"
              name="Q20"
              v-model="data.Q20_no"
              :checked="data.Q20_no"
              :value="data.Q20_no ? false : true"
              @change="data.Q20_no ? (data.Q20_yes = false) : (data.Q20_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="my-5">
        Have you <b>EVER</b> been removed or deported from the United States?

        <div class="flex gap-3 mt-2">
          <label
            for="Q21_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q21_true"
              name="Q21"
              v-model="data.Q21_yes"
              :checked="data.Q21_yes"
              :value="data.Q21_yes ? false : true"
              @change="data.Q21_yes ? (data.Q21_no = false) : (data.Q21_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q21_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q21_false"
              name="Q21"
              v-model="data.Q21_no"
              :checked="data.Q21_no"
              :value="data.Q21_no ? false : true"
              @change="data.Q21_no ? (data.Q21_yes = false) : (data.Q21_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="my-5">
        <div class="">
          Federal Law requires nearly all people born as male who are wither U.S citizens or
          immigrants, 18 through 25 years of age, to register with Selective Service.
          <br />
          See
          <a href="https://www.sss.gov" class="text-primary underline" target="_blank"
            >https://www.sss.gov</a
          >
        </div>
        <div class="pl-3 border-l">
          <div class="my-5">
            Are you a person born as male who lived in the United States at any time between your
            18th and 26th birthdays? (Do not select "Yes" if you were a lawful nonimmigrant for all
            of that period)

            <div class="flex gap-3 mt-2">
              <label
                for="Q22a_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q22a_true"
                  name="Q22a"
                  v-model="data.Q22a_yes"
                  :checked="data.Q22a_yes"
                  :value="data.Q22a_yes ? false : true"
                  @change="data.Q22a_yes ? (data.Q22a_no = false) : (data.Q22a_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q22a_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q22a_false"
                  name="Q22a"
                  v-model="data.Q22a_no"
                  :checked="data.Q22a_no"
                  :value="data.Q22a_no ? false : true"
                  @change="data.Q22a_no ? (data.Q22a_yes = false) : (data.Q22a_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="my-5" v-if="data.Q22a_yes">
            Did you register for the Selective Service?

            <div class="flex gap-3 mt-2">
              <label
                for="Q22b_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q22b_true"
                  name="Q22b"
                  v-model="data.Q22b_yes"
                  :checked="data.Q22b_yes"
                  :value="data.Q22b_yes ? false : true"
                  @change="data.Q22b_yes ? (data.Q22b_no = false) : (data.Q22b_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q22b_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q22b_false"
                  name="Q22b"
                  v-model="data.Q22b_no"
                  :checked="data.Q22b_no"
                  :value="data.Q22b_no ? false : true"
                  @change="data.Q22b_no ? (data.Q22b_yes = false) : (data.Q22b_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="my-5" v-if="data.Q22b_yes">
            Provide information about your registration

            <div class="flex gap-3 mt-2">
              <label for="date_registered" class="flex flex-col gap-2 w-1/2">
                <span>Date Registered</span>
                <input
                  type="date"
                  id="date_registered"
                  v-model="data.date_registered"
                  class="p-2 border focus:outline-primary rounded-md"
                />
              </label>

              <label for="selective_service_number" class="flex flex-col gap-2 w-1/2">
                <span>Selective Service Number</span>
                <input
                  type="number"
                  id="selective_service_number"
                  v-model="data.selective_service_number"
                  class="p-2 border focus:outline-primary rounded-md"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="my-5">
        Have you <b>EVER</b> left the United States to avoid being drafted in the U.S Armed Forces

        <div class="flex gap-3 mt-2">
          <label
            for="Q23_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q23_true"
              name="Q23"
              v-model="data.Q23_yes"
              :checked="data.Q23_yes"
              :value="data.Q23_yes ? false : true"
              @change="data.Q23_yes ? (data.Q23_no = false) : (data.Q23_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q23_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q23_false"
              name="Q23"
              v-model="data.Q23_no"
              :checked="data.Q23_no"
              :value="data.Q23_no ? false : true"
              @change="data.Q23_no ? (data.Q23_yes = false) : (data.Q23_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="my-5">
        Have you <b>EVER</b> applied for any kind of exemption from the military service in the U.S
        Armed Forces?

        <div class="flex gap-3 mt-2">
          <label
            for="Q24_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q24_true"
              name="Q24"
              v-model="data.Q24_yes"
              :checked="data.Q24_yes"
              :value="data.Q24_yes ? false : true"
              @change="data.Q24_yes ? (data.Q24_no = false) : (data.Q24_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q24_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q24_false"
              name="Q24"
              v-model="data.Q24_no"
              :checked="data.Q24_no"
              :value="data.Q24_no ? false : true"
              @change="data.Q24_no ? (data.Q24_yes = false) : (data.Q24_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="my-5">
        Have you <b>EVER</b> served in the U.S Armed Forces?

        <div class="flex gap-3 mt-2">
          <label
            for="Q25_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q25_true"
              name="Q25"
              v-model="data.Q25_yes"
              :checked="data.Q25_yes"
              :value="data.Q25_yes ? false : true"
              @change="data.Q25_yes ? (data.Q25_no = false) : (data.Q25_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q25_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q25_false"
              name="Q25"
              v-model="data.Q25_no"
              :checked="data.Q25_no"
              :value="data.Q25_no ? false : true"
              @change="data.Q25_no ? (data.Q25_yes = false) : (data.Q25_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <template v-if="data.Q25_yes">
        <div class="my-5">
          Are you <b>currently</b> a member of the U.S Armed Forces?

          <div class="flex gap-3 mt-2">
            <label
              for="Q26a_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="Q26a_true"
                name="Q26a"
                v-model="data.Q26a_yes"
                :checked="data.Q26a_yes"
                :value="data.Q26a_yes ? false : true"
                @change="data.Q26a_yes ? (data.Q26a_no = false) : (data.Q26a_no = true)"
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="Q26a_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="Q26a_false"
                name="Q26a"
                v-model="data.Q26a_no"
                :checked="data.Q26a_no"
                :value="data.Q26a_no ? false : true"
                @change="data.Q26a_no ? (data.Q26a_yes = false) : (data.Q26a_yes = true)"
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <template v-if="data.Q26a_yes">
          <div class="my-5">
            Are you scheduled to deploy outside the United States, including to a vessel, within the
            next 3 months?
            <br />
            <small>
              (Call the Military Help Line at <b>877-247-4645</b> if you transfer to a new duty
              station after you file your Form N-400, including if you are deployed outside the
              United States or a vessel)
            </small>

            <div class="flex gap-3 mt-2">
              <label
                for="Q26b_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q26b_true"
                  name="Q26b"
                  v-model="data.Q26b_yes"
                  :checked="data.Q26b_yes"
                  :value="data.Q26b_yes ? false : true"
                  @change="data.Q26b_yes ? (data.Q26b_no = false) : (data.Q26b_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q26b_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q26b_false"
                  name="Q26b"
                  v-model="data.Q26b_no"
                  :checked="data.Q26b_no"
                  :value="data.Q26b_no ? false : true"
                  @change="data.Q26b_no ? (data.Q26b_yes = false) : (data.Q26b_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="my-5">
            Are you <b>currently</b> stationed outside the United States?

            <div class="flex gap-3 mt-2">
              <label
                for="Q26c_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q26c_true"
                  name="Q26c"
                  v-model="data.Q26c_yes"
                  :checked="data.Q26c_yes"
                  :value="data.Q26c_yes ? false : true"
                  @change="data.Q26c_yes ? (data.Q26c_no = false) : (data.Q26c_no = true)"
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="Q26c_false"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="Q26c_false"
                  name="Q26c"
                  v-model="data.Q26c_no"
                  :checked="data.Q26c_no"
                  :value="data.Q26c_no ? false : true"
                  @change="data.Q26c_no ? (data.Q26c_yes = false) : (data.Q26c_yes = true)"
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </template>

        <div class="my-5" v-if="data.Q26a_no">
          Are you a former US military service member who is currently residing outside of the U.S?

          <div class="flex gap-3 mt-2">
            <label
              for="Q26d_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="Q26d_true"
                name="Q26d"
                v-model="data.Q26d_yes"
                :checked="data.Q26d_yes"
                :value="data.Q26d_yes ? false : true"
                @change="data.Q26d_yes ? (data.Q26d_no = false) : (data.Q26d_no = true)"
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="Q26d_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="Q26d_false"
                name="Q26d"
                v-model="data.Q26d_no"
                :checked="data.Q26d_no"
                :value="data.Q26d_no ? false : true"
                @change="data.Q26d_no ? (data.Q26d_yes = false) : (data.Q26d_yes = true)"
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="my-5">
          Have you <b>EVER</b> been court-martialed or have you received a discharge characterized
          as other than honorable, bad conduct, or dishonorable, while in the U.S Armed Forces?

          <div class="flex gap-3 mt-2">
            <label
              for="Q27_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="Q27_true"
                name="Q27"
                v-model="data.Q27_yes"
                :checked="data.Q27_yes"
                :value="data.Q27_yes ? false : true"
                @change="data.Q27_yes ? (data.Q27_no = false) : (data.Q27_no = true)"
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="Q27_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="Q27_false"
                name="Q27"
                v-model="data.Q27_no"
                :checked="data.Q27_no"
                :value="data.Q27_no ? false : true"
                @change="data.Q27_no ? (data.Q27_yes = false) : (data.Q27_yes = true)"
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="my-5">
          Have you <b>EVER</b> been discharged from training or service in the U.S Armed Forces
          because you were an alien?

          <div class="flex gap-3 mt-2">
            <label
              for="Q28_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="Q28_true"
                name="Q28"
                v-model="data.Q28_yes"
                :checked="data.Q28_yes"
                :value="data.Q28_yes ? false : true"
                @change="data.Q28_yes ? (data.Q28_no = false) : (data.Q28_no = true)"
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="Q28_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="Q28_false"
                name="Q28"
                v-model="data.Q28_no"
                :checked="data.Q28_no"
                :value="data.Q28_no ? false : true"
                @change="data.Q28_no ? (data.Q28_yes = false) : (data.Q28_yes = true)"
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="my-5">
          Have you <b>EVER</b> deserted from the U.S Armed Forces?

          <div class="flex gap-3 mt-2">
            <label
              for="Q29_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="Q29_true"
                name="Q29"
                v-model="data.Q29_yes"
                :checked="data.Q29_yes"
                :value="data.Q29_yes ? false : true"
                @change="data.Q29_yes ? (data.Q29_no = false) : (data.Q29_no = true)"
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="Q29_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="Q29_false"
                name="Q29"
                v-model="data.Q29_no"
                :checked="data.Q29_no"
                :value="data.Q29_no ? false : true"
                @change="data.Q29_no ? (data.Q29_yes = false) : (data.Q29_yes = true)"
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </template>

      <div class="my-5">
        Do you now have, or did you <b>EVER</b> have, a hereditary title or an order of nobility in
        any foreign country?

        <div class="flex gap-3 mt-2">
          <label
            for="Q30a_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q30a_true"
              name="Q30a"
              v-model="data.Q30a_yes"
              :checked="data.Q30a_yes"
              :value="data.Q30a_yes ? false : true"
              @change="data.Q30a_yes ? (data.Q30a_no = false) : (data.Q30a_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q30a_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q30a_false"
              name="Q30a"
              v-model="data.Q30a_no"
              :checked="data.Q30a_no"
              :value="data.Q30a_no ? false : true"
              @change="data.Q30a_no ? (data.Q30a_yes = false) : (data.Q30a_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="my-5" v-if="data.Q30a_yes">
        Are you willing to give up any inherited titles or orders of nobility,
        <input type="text" v-model="data.Q30b_text" placeholder="Titles" class="border-b-2" />, that
        you have in a foreign country at your naturalization ceremony?

        <div class="flex gap-3 mt-2">
          <label
            for="Q30b_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q30b_true"
              name="Q30b"
              v-model="data.Q30b_yes"
              :checked="data.Q30b_yes"
              :value="data.Q30b_yes ? false : true"
              @change="data.Q30b_yes ? (data.Q30b_no = false) : (data.Q30b_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q30b_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q30b_false"
              name="Q30b"
              v-model="data.Q30b_no"
              :checked="data.Q30b_no"
              :value="data.Q30b_no ? false : true"
              @change="data.Q30b_no ? (data.Q30b_yes = false) : (data.Q30b_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>
      
      <div class="my-5">
        Do you support the Constitution and Governement of the United States?

        <div class="flex gap-3 mt-2">
          <label
            for="Q31_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q31_true"
              name="Q31"
              v-model="data.Q31_yes"
              :checked="data.Q31_yes"
              :value="data.Q31_yes ? false : true"
              @change="data.Q31_yes ? (data.Q31_no = false) : (data.Q31_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q31_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q31_false"
              name="Q31"
              v-model="data.Q31_no"
              :checked="data.Q31_no"
              :value="data.Q31_no ? false : true"
              @change="data.Q31_no ? (data.Q31_yes = false) : (data.Q31_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>
      
      <div class="my-5">
        Do you understand the Oath of Allegiance of the United States?

        <div class="flex gap-3 mt-2">
          <label
            for="Q32_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q32_true"
              name="Q32"
              v-model="data.Q32_yes"
              :checked="data.Q32_yes"
              :value="data.Q32_yes ? false : true"
              @change="data.Q32_yes ? (data.Q32_no = false) : (data.Q32_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q32_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q32_false"
              name="Q32"
              v-model="data.Q32_no"
              :checked="data.Q32_no"
              :value="data.Q32_no ? false : true"
              @change="data.Q32_no ? (data.Q32_yes = false) : (data.Q32_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>
      
      <div class="my-5">
        Are you unable to take the Oath of Allegiance because of a physical or developmental disability or mental impairment?

        <div class="flex gap-3 mt-2">
          <label
            for="Q33_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q33_true"
              name="Q33"
              v-model="data.Q33_yes"
              :checked="data.Q33_yes"
              :value="data.Q33_yes ? false : true"
              @change="data.Q33_yes ? (data.Q33_no = false) : (data.Q33_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q33_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q33_false"
              name="Q33"
              v-model="data.Q33_no"
              :checked="data.Q33_no"
              :value="data.Q33_no ? false : true"
              @change="data.Q33_no ? (data.Q33_yes = false) : (data.Q33_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>
      
      <div class="my-5">
        Are you willing to take the full Oath of Allegiance to the United States?

        <div class="flex gap-3 mt-2">
          <label
            for="Q34_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q34_true"
              name="Q34"
              v-model="data.Q34_yes"
              :checked="data.Q34_yes"
              :value="data.Q34_yes ? false : true"
              @change="data.Q34_yes ? (data.Q34_no = false) : (data.Q34_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q34_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q34_false"
              name="Q34"
              v-model="data.Q34_no"
              :checked="data.Q34_no"
              :value="data.Q34_no ? false : true"
              @change="data.Q34_no ? (data.Q34_yes = false) : (data.Q34_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>
      
      <div class="my-5">
        If the law requires it, are you willing to bear arms (carry weapons) on behalf od the United States?

        <div class="flex gap-3 mt-2">
          <label
            for="Q35_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q35_true"
              name="Q35"
              v-model="data.Q35_yes"
              :checked="data.Q35_yes"
              :value="data.Q35_yes ? false : true"
              @change="data.Q35_yes ? (data.Q35_no = false) : (data.Q35_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q35_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q35_false"
              name="Q35"
              v-model="data.Q35_no"
              :checked="data.Q35_no"
              :value="data.Q35_no ? false : true"
              @change="data.Q35_no ? (data.Q35_yes = false) : (data.Q35_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>
      
      <div class="my-5">
        If the law requires it, are you willing to perform noncombantant services (do something that does not include fighting in a war) in the U.S Armed Forces?

        <div class="flex gap-3 mt-2">
          <label
            for="Q36_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q36_true"
              name="Q36"
              v-model="data.Q36_yes"
              :checked="data.Q36_yes"
              :value="data.Q36_yes ? false : true"
              @change="data.Q36_yes ? (data.Q36_no = false) : (data.Q36_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q36_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q36_false"
              name="Q36"
              v-model="data.Q36_no"
              :checked="data.Q36_no"
              :value="data.Q36_no ? false : true"
              @change="data.Q36_no ? (data.Q36_yes = false) : (data.Q36_yes = true)"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>
      
      <div class="my-5">
        If the law requires it, are you willing to perform work of national importance under civilian direction (do non-military work that the US Government says is important to the country)?

        <div class="flex gap-3 mt-2">
          <label
            for="Q37_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q37_true"
              name="Q37"
              v-model="data.Q37_yes"
              :checked="data.Q37_yes"
              :value="data.Q37_yes ? false : true"
              @change="data.Q37_yes ? (data.Q37_no = false) : (data.Q37_no = true)"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="Q37_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="Q37_false"
              name="Q37"
              v-model="data.Q37_no"
              :checked="data.Q37_no"
              :value="data.Q37_no ? false : true"
              @change="data.Q37_no ? (data.Q37_yes = false) : (data.Q37_yes = true)"
              required
            />
            <span>No</span>
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
  </section>
</template>
