import { component$, useMount$, useStore, useResource$, Resource } from '@builder.io/qwik';
import { initOptions } from '../model/option';
import { Selector } from './selector';


export const App = component$(() => {

  const state = useStore({
    mealOptions: initOptions
  });

  useMount$(async () => {
    const r = await fetch('/assets/meal-options.json');
    const options = await r.json();
    state.mealOptions = options;

    // QUESTION: This brings up an error on the console:
    //    [vite] Internal server error: fetch is not a function
    //    How to solve this?
  });

  const seatOptionsRes = useResource$(async () => {
    const r = await fetch('/assets/seat-options.json');
    const options = await r.json();
    return options;
  })

  return (
   <div>
      <h1>Add-ons</h1>
      <Selector kind="Meal" options={state.mealOptions}></Selector>
      <div class="mt40"></div>
      <Resource 
        value={seatOptionsRes}
        onPending={() => <p>Loading ...</p>}
        onRejected={() => <p>Error!</p>}
        onResolved={
          (seatOptions) => <Selector kind="Seat" options={seatOptions}></Selector>
        }
      />

   </div>
  );
});

