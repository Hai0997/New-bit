<template>
    <div class="event">
        <event1></event1>
        <event2></event2>
        <event></event>
    </div>
</template>

<script>
    import Event from "../components/event/Event";
    import Event1 from "../components/event/Event1";
    import Event2 from "../components/event/Event2";
    export default {
        name: "04-Events",
        components: {Event2, Event1, Event}
    }
</script>

<style scoped>

</style>
