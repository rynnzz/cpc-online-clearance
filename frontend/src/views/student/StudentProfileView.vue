<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex flex-1">
      <Sidebar />
      <div class="flex-1 p-8 bg-gray-100">
        <h1 class="text-2xl font-bold mb-6">User Profile</h1>

        <!-- Profile Information (Read-Only) -->
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-4">Profile Information</h2>
          <div class="mb-2">
            <label class="font-semibold">First Name:</label>
            <input v-model="profile.first_name" class="border p-2 mb-2 w-full bg-gray-200" readonly />
          </div>
          <div class="mb-2">
            <label class="font-semibold">Middle Name:</label>
            <input v-model="profile.middle_name" class="border p-2 mb-2 w-full bg-gray-200" readonly />
          </div>
          <div class="mb-2">
            <label class="font-semibold">Last Name:</label>
            <input v-model="profile.last_name" class="border p-2 mb-2 w-full bg-gray-200" readonly />
          </div>
          <div class="mb-2">
            <label class="font-semibold">Email:</label>
            <input v-model="profile.email" class="border p-2 mb-2 w-full bg-gray-200" readonly />
          </div>
          <div class="mb-2">
            <label class="font-semibold">Degree:</label>
            <input v-model="profile.degree" class="border p-2 mb-2 w-full bg-gray-200" readonly />
          </div>
          <div class="mb-2">
            <label class="font-semibold">Year and Section:</label>
            <input v-model="profile.year" class="border p-2 mb-2 w-full bg-gray-200" readonly />
          </div>
        </div>

        <!-- Change Password -->
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-4">Change Password</h2>
          <form @submit.prevent="changePassword">
            <div class="mb-2">
              <label>New Password: </label>
              <input type="password" v-model="newPassword" class="border p-2 mb-2 w-full" required />
            </div>
            <div class="mb-2">
              <label>Confirm Password: </label>
              <input type="password" v-model="confirmPassword" class="border p-2 mb-2 w-full" required />
            </div>
            <button type="submit" class="bg-blue-500 text-white p-2 rounded">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import { useStudentStore } from '@/stores/studentStore';
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

const studentStore = useStudentStore();
const profile = ref({}); // Student profile data
const newPassword = ref('');
const confirmPassword = ref('');
const route = useRoute();

onMounted(async () => {
  await studentStore.fetchStudentProfile(); // Adjust this to match your API call
  profile.value = studentStore.studentProfile; // Assuming studentProfile is the single student's data
});

const changePassword = async () => {
  if (newPassword.value !== confirmPassword.value) {
    alert('Passwords do not match');
    return;
  }

  try {
    await studentStore.updatePassword(newPassword.value); // Call the store action to update the password
    alert('Password successfully changed');
    newPassword.value = '';
    confirmPassword.value = '';
  } catch (error) {
    alert('Error updating password');
  }
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
