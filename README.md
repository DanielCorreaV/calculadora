Este es un proyecto cencillo de una calculadora con NestJs, solo se realizo la parte de backend con fines de mostrar y probar el funcionamiento de los workflows y github actions por lo que ese seria su proposito final.


# CI/CD 

## 1.  Diferencia entre CI y CD

### **CI – Integración Continua (Continuous Integration)**

La Integración Continua es la práctica de integrar código en un repositorio de forma frecuente, cada vez que se hace un push o un pull request se sigue una secuencia de pasos definida de la siguiente manera:

1. Se instala el proyecto.
2. Se ejecuta el linter.
3. Se compila.
4. Se ejecutan las pruebas.
5. Se genera un reporte de cobertura.

El objetivo del CI es detectar errores tan pronto sea posible, ya que si se mantiene un ciclo constante de revision, pruebas y errores se puede asegurar un mayor resultado, a costa de por supuesto suponer un mayor esfuerzo.

---

### **CD – Despliegue Continuo o Entrega continua (Continuous Deployment or Continuous Delivery)**

**CD tiene dos posibles significados:**

#### *Continuous Delivery*

El pipeline deja el proyecto listo para desplegar, pero requiere aprobación manual. La última etapa genera un build verificado, pero no lo publica automáticamente.

#### *Continuous Deployment*

El despliegue es automático a producción o al entorno configurado, sin intervención humana. En ambos casos, CD ocurre *después* del CI y garantiza que el software siempre esté listo para usarse o para enviarse a producción de forma confiable.

---

## 2. Lenguaje, Linter y Cobertura utilizados

### **Lenguaje elegido: TypeScript**

Este proyecto utiliza TypeScript debido a las posibilidades y comodidades que ofrece a la hora de trabajar, adicionalmente se resalta que estoy utilizando el framework orientado al backend NestJs el cual ultiliza Typescript como lenguaje principal, asi que podriamos decir que es una conveniencia y consecuencia de la practica.

---

### **Linter: ESLint**

Para la evalucación de errores y su detección decidi emplear ESLint ya que es la herramienta estandar actual ya que permite reglas personalizadas y puede adaptarse a todo tipo de proyectos, su compatibilidad con TypeScript tambien resulta de mucha ayuda y ademas el framework NestJs ya lo tiene integrado por defecto, con lo cual solo me tome libertades en su configuración, sin mencionar que lo ocupamos antes de hacer build o pruebas en el proyecto.

Comando típico:

**Ejecutar Lint:**
```
npm run lint
```

**Ejecutar Build:**
```
npm run build
```

**Ejecutar Tests:**
```
npm run test
```

---

### **Herramienta de cobertura: Jest (test runner + coverage)**

NestJs por defecto tiene integrado jest para realizar las pruebas unitarias y con cierto comando se permite ejecutar los test y obtener el coverage, permite generar reportes de covertura en formato Icov, tiene buena integración con GitHub Actions y es ideal para pruebas asincronas tambien.

Generación de cobertura:

```
npm run test:cov
```

Esto crea:

```
coverage/lcov.info
```

el cual puede ser evaluado por herramientas de CI.

---

## 3. Umbral mínimo de cobertura (threshold): **80%**

### Justificación del umbral

Un rango recomendado para proyectos reales suele ser **70–90%**, para este proyecto se seleccionó **80%** por los siguientes motivos:

- 70% puede permitir demasiado código no probado.
- 90% o más es ideal en proyectos críticos, pero aumenta mucho el esfuerzo y puede llevar a pruebas poco útiles solo para subir el número.

 En otras palabras 80% es el punto óptimo entre calidad y productividad.

Si el umbral se incumple, el pipeline debe fallar, evitando que código con pruebas insuficientes llegue a `master`.

# nektos/act

act es una herramienta de línea de comandos que permite ejecutar workflows de GitHub Actions directamente en la computadora, sin necesidad de hacer commits ni usar GitHub.
Simula el entorno de GitHub Actions utilizando contenedores Docker.

Permite:

- Probar workflows antes de subirlos al repositorio.
- Depurar errores de CI/CD más rápido.
- Ya que no se envia a github puedes revizar todo de forma local.

Aunque se debe aclarar que esto supone un esfuerzo mayo en la maquina local asi que se debe requerir de una potencia minima para que funcione sin estorvar otras actividades.


Para usar `act` se necesita:

1. **Docker instalado y en ejecución**
   `act` ejecuta los jobs dentro de contenedores Docker que simulan los runners de GitHub.

### Ejecutar el workflow localmente

```
act push
```
```
act --artifact-server-path $PWD/.artifactsv
```
este ultimo crea un servidor local en el cual se pueden subir artifacts, ya que por si solo el act push no los maneja debido que no tienen donde subirse. Esto normalmente no afecta cuando se sube a github ya que se ocupa el servidor de github propiamente.



