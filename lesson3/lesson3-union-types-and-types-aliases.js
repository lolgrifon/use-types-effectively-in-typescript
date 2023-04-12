var userName = "Silver Surfer";
userName = ["Silver", "Surfer"]; // Type 'string[]' is not assignable to type 'string'
var userId = function (a, b) { return a + b; }; //
var target = document.getElementById("target");
/*
Type '(event: HTMLButtonElement) => any' is not assignable to type '(this: GlobalEventHandlers, ev: MouseEvent) => any'.
  Types of parameters 'event' and 'ev' are incompatible.
    Type 'MouseEvent' is missing the following properties from type 'HTMLButtonElement': disabled, form, formAction, formEnctype, and 301 more.ts(2322)
*/
// target.onclick = (event: HTMLButtonElement) => event.button; // Property 'button' does not exist on type 'HTMLButtonElement'.ts(2339)
target.onclick = function (event) { return event.button; }; // 'target' is possibly 'null'.
target.onclick = function (event) { return event.button; }; // 'target' is possibly 'null'.
