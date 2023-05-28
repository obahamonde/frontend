<template>
  <Auth>
    <main class="container col center p-4 mx-auto my-4 gap-4 px-4">
      <h1 class="text-title">Welcome to SmartPro</h1>
      <p class="text-center">
        SmartPro is a platform for developers to deploy their applications with
        ease.
      </p>
      <p class="row center text-body">
        Deploy your <Icon icon="logos:github-icon" class="mx-2" /> Repo in
        seconds!
      </p>
      <Dark />
      <NavBar />
      <RouterView />
      <Footer />
    </main>
  </Auth>
</template>
