class GestorTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(tarea) {
        // Lógica para agregar una nueva tarea
        this.tareas.push({
            tarea: tarea,
            completada: false,
            hotel: "trivago",
        });
        console.log("Nueva tarea agregada:", tarea);
    }

    obtenerTareas() {
        return this.tareas;
    }
}
