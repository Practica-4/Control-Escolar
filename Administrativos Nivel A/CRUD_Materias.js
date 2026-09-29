document.getElementById('formMateria').addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombreMateria').value;
            const creds = document.getElementById('creditos').value;

            const lista = document.getElementById('listaMaterias');
            const li = document.createElement('li');
            li.className = "flex justify-between items-center p-3 border rounded bg-gray-50";
            li.innerHTML = `<span>${nombre} (${creds} Créditos)</span> <button onclick="this.parentElement.remove()" class="text-red-600 text-sm hover:underline">Eliminar</button>`;
            lista.appendChild(li);
            this.reset();
        });