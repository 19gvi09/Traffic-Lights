import TrafficLights from "../../components/trafficLights/TrafficLights.vue"

export default {
    name: "Yellow",
    components: {
        TrafficLights
    },
    data() {
        return {
            time: 3,
            isTrue: true
        }
    },
    methods: {
        checkRoute() { // Определение, куда будет произведен роутинг
            if (sessionStorage.to) {
                this.$router.push({path: sessionStorage.to})
            } else {
                this.$router.push({path: "/green"})
            }
        },
        routing() {
            setTimeout(this.checkRoute, this.time * 1000) // Функция перехода
        },
        timer() {
            this.a = setInterval(() => this.time--, 1000) // Функция таймера
        },
        blinking() {
            setInterval(() => this.isTrue = !this.isTrue, 500) // Функция мигания сигнала светофора
        },
        setSessionTime() {
            sessionStorage.timeYellow = this.time // Функция для того, чтобы задать время в сессионное хранилище
        },
        setTime() {
            this.time = +sessionStorage.timeYellow // Функция для того, чтобы извлечь время из сессионного хранилища
        }
    },
    watch: {
        time() {
            this.setSessionTime() // Отслеживание времени и обновление сессионного хранилища
        }
    },
    mounted() {
        if (sessionStorage.timeYellow) { // Проверка на наличие времени в сессионном хранилище
            this.setTime()
        }
        this.routing()
        this.timer()
        this.blinking()
    },
    beforeUnmount() {
        clearInterval(this.a)
        sessionStorage.timeYellow = 3
    }
}