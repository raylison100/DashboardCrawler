<template>
  <div class="contact-us full-screen">
    <nav class="navbar navbar-ct-default" role="navigation-demo">
      <div class="container">
        <div class="navbar-header">
          <router-link :to="{path:'/'}" class="navbar-brand">{{$t('sidebar.title')}}</router-link>
        </div>
      </div>
    </nav>
    <div class="wrapper wrapper-full-page section content"> 
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="title text-danger">404 Not Found</h2>
              <h2 class="title">Oops! It seems that this page does not exist.</h2>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
