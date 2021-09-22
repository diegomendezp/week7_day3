# week7_day3

## React forms
- Los formularios en React (_controlled components_) reflejan el contenido del estado, manipulándolo a tiempo real frente a la interacción del usuario:
  - Cada input dispone de un atributo `value` conectado al estado.
  - Cada input dispone de un atributo `onChange` controlando el estado.
  - Cada input dispone de un atributo `name` para replicarlos como _computed property names_ en el envío.
  - El formulario dispone de un atributo `onSubmit` para gestionar el envío.

## Nombres de propiedades computados
- Incluir el nombre de la propiedad de un objeto entre corchetes da lugar a un _computed name property_, sustituyendo el valor de la variable por el nombre de la propiedad del objeto:
  ````javascript
  const keyName = 'age'
  const person = {[keyName]: 33}   // {age: 33}
  ````

## React stateful components lifecycle

<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_801d26372f9946811f79250cb98322bf.jpg" alt="">