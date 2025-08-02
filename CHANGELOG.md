# Changelog

## [Unreleased]

### Fixed
- Corregida la configuración de la ruta base en `vite.config.js` para evitar errores 404 en producción.
- Ajustada la función `resolvePath` en `src/hooks/utils/_file-utils.js` para manejar correctamente rutas absolutas y relativas.
- Forzado valor por defecto `'/'` para `BASE_URL` en `_file-utils.js` para evitar rutas incorrectas en entornos sin configuración.
- Corregida la función `loadJSON` en `_file-utils.js` para usar la ruta pasada como parámetro.
- Comentada la recarga infinita en `src/components/Portfolio.jsx` para evitar que la app se quede en blanco.
- Verificación y aseguramiento de que los archivos estáticos (imágenes, JSON) se copian correctamente durante la compilación.

---

Este conjunto de cambios solucionó los errores 404 y problemas de carga de recursos al desplegar en Vercel, manteniendo la funcionalidad correcta en desarrollo local.
