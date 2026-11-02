# El Atalaya y el Pastor (multijugador con celulares)

- `index.html`: pantalla del maestro (laptop/proyector). Corre todo el juego y muestra un QR.
- `play.html`: control en el celular de cada alumno.
- `js/net.js`: comunicación en tiempo real con Supabase Realtime (Broadcast).
- `js/config.js`: aquí pegas tu URL y clave pública de Supabase.

## 1. Crear el proyecto de Supabase (gratis)
1. Entra a https://supabase.com y crea un proyecto.
2. Ve a **Project Settings > API** y copia **Project URL** y la clave **anon public**.
3. Pégalas en `js/config.js`. No hay que crear tablas: se usa solo Broadcast, que viene activado.

## 2. Publicar en Vercel
1. Sube esta carpeta a un repositorio de GitHub.
2. En https://vercel.com elige **Add New > Project**, importa el repo y presiona **Deploy**. Es un sitio estático: no necesita configuración.

## 3. Jugar
1. En la laptop abre `https://TU-SITIO.vercel.app/` y proyéctala.
2. Los alumnos escanean el QR (o abren `/play.html` y escriben el código de 4 letras) y ponen su nombre.
3. Cuando estén todos, el maestro presiona **Enter** en la laptop.

Teclas del maestro: **Enter** avanza pantallas, **F** construye el cerco, **R** reintenta el capítulo 2, **Esc** cierra un diálogo trabado.

## Roles
- Capítulo 1: 1 Atalaya por cada 4 alumnos (el primero que entra) y el resto son Caminantes. Con 1 solo jugador (prueba) hace ambos roles.
- Capítulo 2: se alternan Sanador y Proveedor. El primer jugador tiene el botón del cerco.
- Quien se desconecta vuelve a entrar con el mismo navegador y recupera su lugar.

## Notas
- Recomendado de 2 a 10 celulares por sala; el plan gratuito de Supabase tiene límites de mensajes por segundo (revísalos en su documentación).
- La clave `anon` es pública por diseño. No pongas otras claves en este repo.
- Las respuestas de reflexión ("Quiero seguir al profeta porque…", "Mi oveja") se escriben en el celular y no se envían a la pantalla.
