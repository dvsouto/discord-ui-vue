<template>
  <Container>
    <Sidebar />
    <Base>
      <MessageBar />
      <Content />
    </Base>
  </Container>
</template>

<script setup>
  import Container from "@/components/Container.vue";

  // import Navbar from "@/components/Navbar.vue";
  import Sidebar from "@/components/Sidebar/Sidebar.vue";
  import Base from "@/components/Base.vue";
  import MessageBar from "@/components/MessageBar/MessageBar.vue";
  import Content from "@/components/Content/Content.vue";
</script>