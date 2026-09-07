const API_URL = 'http://localhost:3000/pelicula';

export async function ObtenerPeliculas(nombre = '', pagina = 1, limite = 5) {
    const parametros = new URLSearchParams({
        pagina: pagina.toString(),
        limite: limite.toString(),
    });

    if (nombre.trim()) {
        parametros.set('nombre', nombre.trim());
    }

    const respuesta = await fetch(`${API_URL}?${parametros.toString()}`);

    if (!respuesta.ok) {
        throw new Error('Error al tratar de obtener las peliculas');
    }

    return respuesta.json();
}

export async function ObtenerPelicula(nombre = '', pagina = 1, limite = 5) {
    return ObtenerPeliculas(nombre, pagina, limite);
}

export async function CrearPelicula(pelicula) {
    const respuesta = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pelicula),
    });

    if (!respuesta.ok) {
        throw new Error('Error al crear la pelicula');
    }

    return respuesta.json();
}

export async function ActualizarPelicula(id, pelicula) {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pelicula)
    });

    if (!respuesta.ok) {
        throw new Error('Error al actualizar la pelicula');
    }

    return respuesta.json();
}

export async function EliminarPelicula(id) {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });

    if (!respuesta.ok) {
        throw new Error('Error al eliminar la pelicula');
    }

    return respuesta.json();
}