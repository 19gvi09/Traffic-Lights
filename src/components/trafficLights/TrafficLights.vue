<template>
    <div class="traffic-lights">
        <div class="block">
            <div v-bind:class="{active: isRed}" class="circle red">{{timerRed}}</div>
        </div>
        <div class="block">
            <div v-bind:class="{active: isYellow}" class="circle yellow">{{timerYellow}}</div>
        </div>
        <div class="block">
            <div v-bind:class="{active: isGreen}" class="circle green">{{timerGreen}}</div>
        </div>
    </div>
</template>

<script src="./trafficLights.js"></script>

<style lang="scss" src="./trafficLights.scss" scoped></style>