import {  component$ } from '@builder.io/qwik';
import { mealOptions, seatOptions } from '../model/option';
import { Selector } from './selector';


export const App = component$(() => {
  return (
   <div>
      <h1>Add-ons</h1>
      <Selector kind="Seat" options={seatOptions}></Selector>

      <div class="mt40"></div>
      <Selector kind="Meal" options={mealOptions}></Selector>

   </div>
  );
});

