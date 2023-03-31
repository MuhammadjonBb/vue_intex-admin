<template>
  <q-layout>
    <q-page-container>
      <q-page class="login">
        <q-card class="login__modal modal">
          <q-card-section class="q-pa-xl">
            <q-btn class="absolute-top-left q-pa-sm" color="primary" style="top:25px;left: 27px;border-radius: 7px;"
              v-if="isResetMode || isSMSMode" @click="onBackBtn">
              <q-icon name="arrow_back_ios" style="left:5px;"></q-icon>
            </q-btn>
            <q-img src="src/assets/intex-logo.svg" alt="Logo" class="modal__logo" />
            <form style="position: relative;">
              <Transition name="slide-fade" mode="out-in">
                <MainAuth v-if="!(isResetMode || isSMSMode || isSetPasswordMode)" @to-reset-mode="onResetMode" />

                <ResetPassword v-else-if="isResetMode" @to-sms-mode="onSMSmode" />

                <ConfirmSMS v-else-if="isSMSMode" @to-reset-password-mode="onResetPasswordMode" />

                <SetPassword v-else-if="isSetPasswordMode" />
              </Transition>
            </form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import MainAuth from 'src/components/form/MainAuth.vue'
import ResetPassword from 'src/components/form/ResetPassword.vue'
import ConfirmSMS from 'src/components/form/ConfirmSMS.vue'
import SetPassword from 'src/components/form/SetPassword.vue'

const isResetMode: Ref<boolean> = ref(false)
const isSMSMode: Ref<boolean> = ref(false)
const isSetPasswordMode: Ref<boolean> = ref(false)

// eslint-disable-next-line space-before-function-paren
function onResetMode() {
  isResetMode.value = true
}
// eslint-disable-next-line space-before-function-paren
function onSMSmode() {
  isSMSMode.value = true
  isResetMode.value = false
}
// eslint-disable-next-line space-before-function-paren
function onResetPasswordMode() {
  isSetPasswordMode.value = true
  isSMSMode.value = false
}

// eslint-disable-next-line space-before-function-paren
function onBackBtn() {
  if (isResetMode.value) {
    isResetMode.value = false
  } else {
    isResetMode.value = true
    isSMSMode.value = false
  }
}
</script>

<style lang="scss">
.login {
  background-image: url('src/assets/login-bg.jpg');
  background-size: cover;
  width: 100vw;
  height: 100vh;
}

.modal {
  margin: 0 auto;
  border-radius: 12px;
  transform: translateY(20%);
  width: 450px;

  &__logo {
    width: 240px;
    display: block;
    margin: 0 auto 25px;
  }

  &__title {
    margin: 0 0 24px 0;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #464A4D;
  }
}

.auth {
  transition: all .3s ease;
}

.confirm-sms {
  &__input-group {
    margin-bottom: 20px;
    gap: 24px;
    justify-content: center;
    flex-wrap: nowrap;
  }

  &__input {
    width: 40px;
    height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
  }
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
