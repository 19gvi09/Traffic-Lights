import TrafficLights from "../../components/trafficLights/TrafficLights.vue"

export default {
    name: "Green",
    components: {
        TrafficLights
    },
    data() {
        return {
            time: 15,
            isTrue: true
        }
    },
    methods: {
        routing() {
            setTimeout(() => this.$router.push({path: "/yellow"}), this.time * 1000) // Функция перехода
        },
        timer() {
            this.a = setInterval(() => this.time--, 1000) // Функция таймера
        },
        blinking() {
            setTimeout(() => {setInterval(() => this.isTrue = !this.isTrue, 500)}, (this.time - 3) * 1000) // Функция мигания сигнала светофора
        },
        setSessionTime() {
            sessionStorage.timeGreen = this.time // Функция для того, чтобы задать время в сессионное хранилище
        },
        setTime() {
            this.time = +sessionStorage.timeGreen // Функция для того, чтобы извлечь время из сессионного хранилища
        }
    },
    watch: {
        time() {
            this.setSessionTime() // Отслеживание времени и обновление сессионного хранилища
        }
    },
    mounted() {
        if (sessionStorage.timeGreen) { // Проверка на наличие времени в сессионном хранилище
            this.setTime()
        }
        this.routing()
        this.timer()
        this.blinking()
    },
    beforeUnmount() {
        clearInterval(this.a)
        sessionStorage.timeGreen = 15
        sessionStorage.to = "/red" // Определение пути, куда будет произведен роутинг после желтого
    }
}