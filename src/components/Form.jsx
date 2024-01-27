function Form () {
    return (
        <form className="task-form-add">
        <input type="text" className="task-input js-text-task-add" placeholder="Nueva tarea" />
        <button className="add-task-btn js-btn-add">Agregar</button>
        </form>
    )
}

export default Form