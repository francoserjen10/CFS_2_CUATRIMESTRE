# Como correr el proyecto

## 1°: Ejecutar el comando "tsc {Nombre del archivo.ts}", por ejemplo kiosco.js.

**Preguntas**

• 1) ¿Qué pasa cuando se corre el comando “tsc”?

• 2) ¿Cómo está organizada una clase?

• 3) ¿Es correcto que un método auxiliar de una clase

sea público? ¿Por qué?

• 4) Enumerar las características de una interfaz

<-------------------------------------Respuestas---------------------------------->

1. Cuando se corre el comando tsc lo que hace es complilar nuestro archivo de typescript para poder leerlo en el lenguaje javascript. A su vez en el momento de compilar, lo que sucede es que el compilador verifica la sintaxis de los archivos para corroborar que este todo bien y no hayan errores, si no es así, se mostrara un msj de error en la terminal. basicamente lo que hace es ayudar a detectar errores en el momento de la compilacion y no en el momento de la ejecución.

2. Una clase esta organizada por:

- Nombre de la clase

- Atributos

- Constructor

- Metodos

3. Si, es correcto, ya que pueden ser reutilizados no solo dentro de la misma clase, sino que, también pueden ser llamados y utilizados en otras clases. Esto ayuda a la reutilización del codigo y no la duplicacion de la misma.

4. Interfaz:

Caracteristicas:

- Es el "contrato" que proporciona a las clases los atributos que deben tener y cumplir.

- La clase que implimenta sierta interfaz, debe cumplirla a raja tabla, ya que si no lo hace va error.

- Permiten una abstraccion eficaz, ya que el que utiliza la clase solamente se deben preocupar por los metodos definidos en la interfaz, no por como se implementan.

- Son un componente esencial del poliformismo, ya que se puede trabajar con objetos de distintas clases que implementan la misma interfaz de igual manera.
  <-------------------------------------Diagrama---------------------------------->

**Diagrama del codigo parte 2**

[enter link description here](https://app.diagrams.net/#G1PtI6KQckn-7UM9ItLPJYJGCzq6Hwemtn)
