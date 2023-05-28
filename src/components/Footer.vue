<template>
  <div
    class="flex flex-row items-center justify-center bottom-0 right-0 left-0 fixed z-50 mx-auto h-16 gap-4 w-1/2 opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out bg-gray-500 rounded-lg shadow-lg cursor-pointer hover:shadow-xl hover:bg-gray-600 hover:text-white hover:opacity-100 text-black text-3xl rounded-full"
  >
    <RouterLink to="/app">
      <Icon
        icon="mdi-account"
        title="Account"
        class="text-4xl text-black opacity-100 transition-all duration-500 ease-in-out bg-transparent hover:scale-150 hover:mr-4 hover:text-white hover:opacity-100 hover:shadow-xl hover:bg-transparent hover:translate--y-4 hover:translate-x-4"
      />
    </RouterLink>
    <RouterLink to="/app/settings">
      <Icon
        icon="mdi-cog"
        title="Settings"
        class="text-4xl text-black opacity-100 transition-all duration-500 ease-in-out bg-transparent hover:scale-150 hover:mr-4 hover:text-white hover:opacity-100 hover:shadow-xl hover:bg-transparent hover:translate--y-4 hover:translate-x-4"
      />
    </RouterLink>
    <RouterLink to="/app/code">
      <Icon
        icon="mdi-microsoft-visual-studio-code"
        title="Editor"
        class="text-4xl text-black opacity-100 transition-all duration-500 ease-in-out bg-transparent hover:scale-150 hover:mr-4 hover:text-white hover:opacity-100 hover:shadow-xl hover:bg-transparent hover:translate--y-4 hover:translate-x-4"
      />
    </RouterLink>
    <RouterLink to="/app/deploy">
      <Icon
        icon="mdi-rocket"
        title="Deployments"
        class="text-4xl text-black opacity-100 transition-all duration-500 ease-in-out bg-transparent hover:scale-150 hover:mr-4 hover:text-white hover:opacity-100 hover:shadow-xl hover:bg-transparent hover:translate--y-4 hover:translate-x-4"
      />
    </RouterLink>
    <RouterLink to="app/operate">
      <Icon
        icon="mdi-console-line"
        title="Terminal"
        class="text-4xl text-black opacity-100 transition-all duration-500 ease-in-out bg-transparent hover:scale-150 hover:mr-4 hover:text-white hover:opacity-100 hover:shadow-xl hover:bg-transparent hover:translate--y-4 hover:translate-x-4"
      />
    </RouterLink>
    <RouterLink to="app/monitor">
      <Icon
        icon="mdi-chart-line"
        title="Metrics"
        class="text-4xl text-black opacity-100 transition-all duration-500 ease-in-out bg-transparent hover:scale-150 hover:mr-4 hover:text-white hover:opacity-100 hover:shadow-xl hover:bg-transparent hover:translate--y-4 hover:translate-x-4"
      />
    </RouterLink>
  </div>
</template>
