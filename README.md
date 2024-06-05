# WebAdvanced
# Todo List Portfolio

Dit is mijn portfolio voor het vak waarin ik verschillende concepten en principes van webontwikkeling heb toegepast. Elk onderwerp is hieronder beschreven, samen met de voorbeelden van waar ze zijn gebruikt in het project.

# Takenlijst Applicatie

Deze takenlijst applicatie is gemaakt om verschillende JavaScript- en webontwikkelingsconcepten te demonstreren. Het doel van deze portfolio is om te bewijzen dat alle concepten en principes uit het vak gekend zijn en praktisch kunnen worden toegepast.

## Functionaliteiten

- Taken toevoegen
- Taken markeren als voltooid
- Taken verwijderen
- Taken opslaan in LocalStorage
- Taken laden vanuit LocalStorage
- CSS-animaties voor visuele feedback
- Gebruik van flexbox voor layout

## Inhoud

1. [Elementen selecteren](#elementen-selecteren)
2. [Elementen manipuleren](#elementen-manipuleren)
3. [Event aan een element koppelen](#event-aan-een-element-koppelen)
4. [Formulier valideren](#formulier-valideren)
5. [Gebruiken van een constante](#gebruiken-van-een-constante)
6. [Gebruiken van template literals](#gebruiken-van-template-literals)
7. [Destructuring](#destructuring)
8. [Spread & Rest operator](#spread--rest-operator)
9. [Iteration over een array](#iteration-over-een-array)
10. [Arrow function](#arrow-function)
11. [Callback function](#callback-function)
12. [Promise](#promise)
13. [Consumer methods](#consumer-methods)
14. [Async & Await](#async--await)
15. [Self executing function](#self-executing-function)
16. [Fetch om data op te halen](#fetch-om-data-op-te-halen)
17. [JSON manipuleren en weergeven](#json-manipuleren-en-weergeven)
18. [Basis CSS Animatie](#basis-css-animatie)
19. [Gebruiken van een flexbox of CSS grid](#gebruiken-van-een-flexbox-of-css-grid)
20. [Gebruik van LocalStorage](#gebruik-van-localstorage)
21. [Bronnen](#bronnen)

## Elementen selecteren
**Voorbeeld**: `const taskForm = document.getElementById('task-form');`
In het bestand `main.js` worden elementen geselecteerd met `document.getElementById` en `document.querySelector`.

## Elementen manipuleren
**Voorbeeld**: `taskSpan.classList.toggle('completed');`
Elementen worden gemanipuleerd door klassen toe te voegen en te verwijderen, zoals te zien is in de functie `addTask`.

## Event aan een element koppelen
**Voorbeeld**: `taskForm.addEventListener('submit', handleFormSubmit);`
Events worden gekoppeld aan elementen met `addEventListener`.

## Formulier valideren
**Voorbeeld**: `if (taskText !== '') { addTask(taskText); } else { alert('Please enter a task'); }`
Formulieren worden gevalideerd voordat gegevens worden verwerkt.

## Gebruiken van een constante
**Voorbeeld**: `const LOCAL_STORAGE_KEY = 'tasks';`
Constantes worden gebruikt voor waarden die niet veranderen, zoals de sleutel voor LocalStorage.

## Gebruiken van template literals
**Voorbeeld**: ``taskSpan.textContent = `${taskText}`;``
Template literals worden gebruikt voor het dynamisch maken van strings.

## Destructuring
**Voorbeeld**: `tasks.forEach(({ text, completed }) => { addTask(text, completed); });`
Destructuring wordt gebruikt om objecten te ontleden.

## Spread & Rest operator
**Voorbeeld**: `function mergeTasks(...taskArrays) { return [].concat(...taskArrays); }`
De spread en rest operator worden gebruikt voor het samenvoegen en verspreiden van arrays.

## Iteration over een array
**Voorbeeld**: `tasks.forEach(task => { addTask(task.text, task.completed); });`
Arrays worden doorlopen met `forEach`.

## Arrow function
**Voorbeeld**: `tasks.forEach(task => { addTask(task.text, task.completed); });`
Arrow functions worden gebruikt voor korte, anonieme functies.

## Callback function
**Voorbeeld**: `fetchButton.addEventListener('click', () => { fetchAndConsumeTasks(); });`
Callback functies worden gebruikt als argumenten voor andere functies.

## Promise
**Voorbeeld**: `function saveTasks() { return new Promise((resolve, reject) => { ... }); }`
Promises worden gebruikt voor asynchrone bewerkingen zoals het opslaan van taken.

## Consumer methods
**Voorbeeld**: `.then(res => { return res.json(); })`
Consumer methods zoals `then` en `catch` worden gebruikt om resultaten van promises te verwerken.

## Async & Await
**Voorbeeld**: `async function fetchAndConsumeTasks() { const tasks = await fetchTasks(); ... }`
Async/Await wordt gebruikt om asynchrone code te schrijven die lijkt op synchrone code.

## Self executing function
**Voorbeeld**: `(function() { console.log('Self executing function'); })();`
Self executing functions worden gebruikt om code direct uit te voeren.

## Fetch om data op te halen
**Voorbeeld**: `fetch('https://fakestoreapi.com/carts?limit=5')`
De Fetch API wordt gebruikt om data op te halen van een externe bron.

## JSON manipuleren en weergeven
**Voorbeeld**: `const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];`
JSON wordt gebruikt voor het opslaan en ophalen van data in LocalStorage.

## Basis CSS Animatie
**Voorbeeld**: 
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

#tasks li {
    animation: fadeIn 0.5s ease-in-out;
}

**Bronnen**
-- : https://www.w3schools.com/js/default.asp
-- : https://chatgpt.com/share/7cb55f6a-33a8-4e01-b895-52ddab3a6c9d
-- : https://chatgpt.com/share/c858618e-3c14-4b0f-b772-b6570ee18ad3
-- : https://fakestoreapi.com/docs
