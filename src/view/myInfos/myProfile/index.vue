<template>
  <Header>
    <div>Client Profile</div>
  </Header>
  <div class="w-80% ma mt-[49px] mb-[27px] h-full">
    <div class="px-6 pt-6 pb-13 bg-[#F5F5F5] rounded-[8px]">
      <div class="h-full content-box bg-white">
        <div class="flex p-6 border-0 border-b border-solid border-[#E4E3E6]">
          <div class="flex justify-between gap-6">
            <div class="img-con">
              <img :src="userInfo.profileImg" alt="" />
            </div>
            <div class="flex flex-col gap-2 justify-center">
              <div class="font-semibold text-[28px] text-[#333333]">
                {{ userInfo.fullName }}
              </div>
              <!-- <div class="">Account: {{ userInfo.memberId }}</div> -->
              <div
                class="flex bg-[#F86C00] text-white font-semibold text-[16px] w-17 h-7 justify-center items-center rounded-[4px]"
              >
                Client
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div
            class="px-12 py-[47px] border-r border-solid border-0 border-[#E4E3E6] w-1/2"
          >
            <div class="font-semibold text-[20px] text-[#333333] mb-[41px]">
              About
            </div>
            <div class="info-box">
              <div class="info-row">
                <span class="label">Full Name</span
                ><span class="value">{{ userInfo.fullName }}</span>
              </div>
              <div class="info-row">
                <span class="label">Cell Number</span
                ><span class="value">{{ userInfo.cellPhone }}</span>
              </div>
              <div class="info-row">
                <span class="label">Email</span
                ><span class="value">{{ userInfo.email }}</span>
              </div>
              <div class="info-row">
                <span class="label">DOB</span
                ><span class="value">{{ userInfo.dateOfBirth }}</span>
              </div>
              <div class="info-row">
                <span class="label">Address</span
                ><span class="value">{{ userInfo.address }}</span>
              </div>
              <div class="info-row">
                <span class="label">Address Details</span
                ><span class="value">{{ userInfo.addressDetail }}</span>
              </div>
            </div>
          </div>
          <div class="px-12 py-[47px] w-1/2">
            <div class="font-semibold text-[20px] text-[#333333] mb-[41px]">
              More
            </div>
            <div
              class="flex gap-5 items-center pl-4 pr-6 py-[10px] rounded-[8px] border border-solid border-gray-300 mb-3"
              @click="handleClick('transaction')"
            >
              <div
                class="flex w-9 h-9 bg-orange-100 rounded-full justify-center items-center"
              >
                <img
                  :src="iconTransactions"
                  width="16"
                  height="16"
                  alt="Transactions Icon"
                />
              </div>
              <div class="text-[14px] text-[#333333] font-normal">
                Transactions
              </div>
              <div class="ml-auto">
                <img :src="iconArrow" width="6" height="12" alt="Arrow Icon" />
              </div>
            </div>
            <div
              class="flex gap-5 items-center pl-4 pr-6 py-[10px] rounded-[8px] border border-solid border-gray-300 mb-3"
              @click="handleClick('payment')"
            >
              <div
                class="flex w-9 h-9 bg-orange-100 rounded-full justify-center items-center"
              >
                <img
                  :src="iconPayment"
                  width="16"
                  height="16"
                  alt="Payment Methods Icon"
                />
              </div>
              <div class="text-[14px] text-[#333333] font-normal">
                Payment Methods
              </div>
              <div class="ml-auto">
                <img :src="iconArrow" width="6" height="12" alt="Arrow Icon" />
              </div>
            </div>
            <div
              class="flex gap-5 items-center pl-4 pr-6 py-[10px] rounded-[8px] border border-solid border-gray-300 mb-3"
              @click="handleClick('edit')"
            >
              <div
                class="flex w-9 h-9 bg-orange-100 rounded-full justify-center items-center"
              >
                <img
                  :src="iconUser"
                  width="16"
                  height="16"
                  alt="Edit Profile Icon"
                />
              </div>
              <div class="text-[14px] text-[#333333] font-normal">
                Edit Profile
              </div>
              <div class="ml-auto">
                <img :src="iconArrow" width="6" height="12" alt="Arrow Icon" />
              </div>
            </div>
            <div
              class="flex gap-5 items-center pl-4 pr-6 py-[10px] rounded-[8px] border border-solid border-gray-300 mb-3"
              @click="handleClick('changePwd')"
            >
              <div
                class="flex w-9 h-9 bg-orange-100 rounded-full justify-center items-center"
              >
                <img
                  :src="iconChangePwd"
                  width="16"
                  height="16"
                  alt="Change Password Icon"
                />
              </div>
              <div class="text-[14px] text-[#333333] font-normal">
                Change Password
              </div>
              <div class="ml-auto">
                <img :src="iconArrow" width="6" height="12" alt="Arrow Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <EditProfileModal
      v-if="editModal.visible"
      :modal="editModal"
      @confirm="handleConfirm"
    />
    <ChangePwdModal
      v-if="changeModal.visible"
      :modal="changeModal"
      @confirm="changeModal.visible = false"
    />
  </div>
</template>
<script setup lang="ts">
import { reactive, computed, ref, onMounted } from "vue";
// import * as echarts from "echarts";
import { useRouter } from "vue-router";
import { formatDate } from "@/utils/utils";
// import SIcon from "@/components/SIcon.vue";
import EditProfileModal from "./components/EditProfileModal.vue";
import ChangePwdModal from "./components/ChangePwdModal.vue";
import Header from "../../components/Header.vue";
import iconTransactions from "@/assets/icons/icon_transactions.svg";
import iconPayment from "@/assets/icons/icon_payment.svg";
import iconUser from "@/assets/icons/icon_profile_user.svg";
import iconChangePwd from "@/assets/icons/icon_change_password.svg";
import iconArrow from "@/assets/icons/icon_arrow.svg";
// import { getDeliverChartApi } from "@/api/job";
// import type { MemberJobDeliverChartResponse as ChartRes } from "@/api/index";

import userStore from "@/store/userStore";

const store = userStore();

userStore();

const userInfo = computed(() => {
  const user = store.userInfo;
  return {
    ...user,
    dateOfBirth: user.dateOfBirth ? formatDate(user.dateOfBirth) : "N/A",
  };
});
const editModal = reactive({
  visible: false,
  title: "Edit Profile",
});
const changeModal = reactive({
  visible: false,
  title: "Change Password",
});

const router = useRouter();
const handleClick = (act: string) => {
  switch (act) {
    case "edit":
      editModal.visible = true;
      break;
    case "changePwd":
      changeModal.visible = true;
      break;
    case "payment":
      router.push({ name: "Payment" });
      break;
    case "transaction":
      router.push({ name: "MyTransaction" });
      break;
  }
};

// const color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//   { offset: 0, color: "#FF947C" },
//   { offset: 1, color: "#F17068" },
// ]);
// const extendsSelf = reactive({
//   title: "successfull Deliveries",
//   color,
// });

// const loading = ref(false);
// const chartData = ref(<ChartRes>[]);
// const getChartData = async () => {
//   loading.value = true;
//   try {
//     const [err, res] = await getDeliverChartApi({});
//     if (err === null && res.code === 200) {
//       chartData.value = res.data;
//     }
//   } catch (err: any) {
//     message.error(err.message);
//   } finally {
//     loading.value = false;
//   }
// };

const handleConfirm = () => {
  editModal.visible = false;
  store.getUserInfo();
};
onMounted(() => {
  //   getChartData();
});
</script>
<style scoped lang="scss">
.content-box {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 2px 12px 0px rgba(29, 35, 58, 0.2);
  //   padding: 48px 24px;

  .img-con {
    // padding: 6px;
    background: #f7f7fa;
    width: 96px;
    height: 96px;
    border-radius: 6px;
    overflow: hidden;
    margin: auto;
    // margin-bottom: 18px;

    img {
      width: 100%;
      height: 100%;
      //   border-radius: 50%;
      object-fit: cover;
    }
  }

  .info-box {
    color: $sub-font-color;
    margin-bottom: 24px;

    .info-row {
      padding: 12px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #d8d8d8;

      .label {
        color: $font-color;
      }

      .value {
        max-width: 360px;
        text-align: right;
      }
    }
  }

  .card-box {
    border: 1px dashed $primary-color;
    box-shadow: 0px 2px 12px 0px rgba(29, 35, 58, 0.2);
    border-radius: 8px;
    cursor: pointer;
    padding: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
