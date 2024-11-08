const app = Vue.createApp({
    data() {
        return {
            nuevaActividad: '',  // Actividad a agregar
            actividades: []      // Lista de actividades
        };
    },
    computed: {
        // Progreso de la barra de acuerdo a las tareas completadas
        progreso() {
            const actividadesCompletadas = this.actividades.filter(actividad => actividad.completada).length;
            // Aseguramos que la barra se llene aunque haya solo una actividad
            return (actividadesCompletadas / Math.max(this.actividades.length, 1)) * 100;
        },
        // Número de actividades completadas
        actividadesCompletadas() {
            return this.actividades.filter(actividad => actividad.completada).length;
        }
    },
    methods: {
        // Función para agregar actividad
        agregarActividad() {
            if (this.nuevaActividad.trim() !== '') {
                this.actividades.push({
                    id: Date.now(),
                    nombre: this.nuevaActividad,
                    completada: false
                });
                this.nuevaActividad = ''; // Limpiar el input
            }
        },
        // Función para eliminar actividad
        eliminarActividad(indice) {
            this.actividades.splice(indice, 1);
        },
        // Función para actualizar progreso (cuando se cambia el estado de la actividad)
        actualizarProgreso() {
            // La barra de progreso se actualiza automáticamente gracias a la propiedad computed
        }
    }
});

app.mount('#app');
