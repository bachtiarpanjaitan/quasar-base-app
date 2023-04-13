<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Your App
        </q-toolbar-title>
        <div class="q-mx-md">Welcome <b>{{ me.name }}</b></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menus
        </q-item-label>
          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { mapGetters } from 'vuex'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard',
    caption: 'Simple Data Presentation',
    icon: 'dashboard',
    link: '/'
  },
  {
    title: 'Menu 1',
    caption: 'Description',
    icon: 'calendar_month',
    link: '/schedules'
  },
  {
    title: 'Logout',
    caption: '',
    icon: 'logout',
    link: '/auth/logout'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed: {
    ...mapGetters({
      me: 'auth/getMe'
    })
  }
})
</script>
