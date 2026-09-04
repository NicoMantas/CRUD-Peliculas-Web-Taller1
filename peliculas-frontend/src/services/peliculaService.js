const API_URL = 'http://localhost:3000/pelicula';

export async function ObtenerPeliculas() {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
        throw new Error('Error al tratar de obtener las peliculas');
    }

    return respuesta.json();
}

export async function ObtenerPelicula(id) {
    const respuesta = await fetch(`${API_URL}/${id}`);

    if (!respuesta.ok) {
        throw new Error('Error al obtener la pelicula');
    }

    return respuesta.json();
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
        method: 'PUT',
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