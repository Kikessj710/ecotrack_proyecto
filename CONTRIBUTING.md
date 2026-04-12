# Guía de Contribución del proyecto EcoTrack

Para mantener el orden y la calidad de nuestro código, todos los integrantes del equipo deben seguir estas reglas estrictas.

## 1. Reglas de Ramas (GitFlow)

Seguimos el modelo GitFlow. La estructura de ramas es la siguiente:

- **`main`**: Rama de producción. **NUNCA** hacer push directo aquí.
- **`develop`**: Rama principal de desarrollo. Todas las nuevas features se integran aquí.
- **`feature/*`**: Ramas para nuevas funcionalidades. Siempre se crean desde `develop` (ej. `feature/navbar`).
- **`release/*`**: Rama para preparar la versión final antes de enviarla a producción.
- **`hotfix/*`**: Rama para corregir errores urgentes. Se crea directamente desde `main`.

## 2. Formato de Commits

Usamos Conventional Commits para mantener un historial claro. Los mensajes deben ser en minúsculas y descriptivos:

- `feat`: Para una nueva funcionalidad (ej. `feat(calculadora): agregar nuevos parametros`).
- `fix`: Para solucionar un error (ej. `fix(navbar): corregir menu hamburguesa en movil`).
- `docs`: Para cambios en la documentación (ej. `docs(contributing): agregar reglas del equipo`).

## 3. Reglas de Pull Requests (PRs)

La integración de código está estrictamente controlada:

1. **No merges locales:** Todo código debe integrarse a `develop` mediante un Pull Request en GitHub.
2. **Revisión obligatoria:** Cada PR necesita al menos **1 comentario o revisión** de un compañero antes de ser aprobado y fusionado.
3. **Calidad:** Verifica que tu código cumpla con los estilos globales y no rompa funcionalidades existentes antes de abrir el PR.

## 4. Cómo Reportar inconvenientes

Si encuentras un error o necesitas proponer una mejora:

1. Ve a la pestaña "Issues" en GitHub.
2. Haz clic en "New Issue".
3. Describe el problema detalladamente, incluyendo cómo reproducirlo y qué comportamiento esperabas.
