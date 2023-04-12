
// Type 'HTMLElement | null' is not assignable to type 'HTMLElement'.
// Type 'null' is not assignable to type 'HTMLElement'
// let someTarget: HTMLElement = document.getElementById("target");

let target:HTMLElement | null= document.getElementById("target");
let someTarget: HTMLElement | null= target



/*
Type '(event: HTMLButtonElement) => any' is not assignable to type '(this: GlobalEventHandlers, ev: MouseEvent) => any'.
  Types of parameters 'event' and 'ev' are incompatible.
    Type 'MouseEvent' is missing the following properties from type 'HTMLButtonElement': disabled, form, formAction, formEnctype, and 301 more.ts(2322)
*/
// target.onclick = (event: HTMLButtonElement) => event.button; // Property 'button' does not exist on type 'HTMLButtonElement'.ts(2339)
// someTarget.onclick = (event: MouseEvent) => event.button; // 'target' is possibly 'null'.
someTarget.onclick = (event: MouseEvent): number | null => event.button; 




 


