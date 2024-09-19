<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex flex-1">
      <Sidebar />
      <div class="flex-1 p-8 bg-gray-100">
        <h1 class="text-2xl font-bold mb-6">Clearance Status</h1>
        <table class="table-auto w-full bg-white shadow-lg rounded">
          <thead>
            <tr>
              <th class="px-4 py-2">Subject</th>
              <th class="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="subject in subjects" :key="subject.id">
              <td class="border px-4 py-2">{{ subject.name }}</td>
              <td class="border px-4 py-2">
                <span :class="getStatusClass(subject.status)">
                  {{ subject.status === 'approved' ? 'Approved' : 'Pending' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

// Simulate fetching subjects from API
const subjects = ref([]);

onMounted(() => {
  // Call API here to get student's subjects clearance status
  // For now, mock data
  subjects.value = [
    { id: 1, name: 'Math 101', status: 'approved' },
    { id: 2, name: 'Science 102', status: 'pending' },
    { id: 3, name: 'History 201', status: 'approved' },
    { id: 4, name: 'Art 101', status: 'pending' },
  ];
});

const getStatusClass = (status) => {
  return status === 'approved' ? 'text-green-600' : 'text-red-600';
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
