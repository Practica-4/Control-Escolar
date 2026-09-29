
        document.getElementById('formCalif').addEventListener('submit', function(e) {
            e.preventDefault();
            const alumno = document.getElementById('alumno').value;
            const materia = document.getElementById('materia').value;
            const calif = document.getElementById('calificacion').value;

            const tbody = document.getElementById('tablaCalif');
            const row = document.createElement('tr');
            row.innerHTML = `<td class="border p-2">${alumno}</td><td class="border p-2">${materia}</td><td class="border p-2">${calif}</td><td class="border p-2"><button onclick="this.closest('tr').remove()" class="text-red-600 hover:underline">Eliminar</button></td>`;
            tbody.appendChild(row);
            this.reset();
        });
