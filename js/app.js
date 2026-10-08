const inputTarea = document.getElementById("tarea");
const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("lista");

botonAgregar.addEventListener("click", function () {
	const texto = inputTarea.value.trim();

	if (texto !== "") {
		const nuevaTarea = document.createElement("li");
		nuevaTarea.textContent = texto;

		lista.appendChild(nuevaTarea);
		inputTarea.value = "";
	}
});
