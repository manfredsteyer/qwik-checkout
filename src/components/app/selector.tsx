import { component$, useStore } from "@builder.io/qwik";
import { Option } from "../model/option";

export interface Props {
    kind: string;
    options: Option[];
}

export interface State {
    option: number;
    count: number;
    price: number;
}

export function nextOption(state: State, options: Option[], step = 1): void {
    state.option = state.option + step;

    if (state.option >= options.length) {
        state.option = 0;
    }
    else if (state.option < 0) {
        state.option = options.length -1;
    }

    state.price = options[state.option].price;
    state.count = 1;
}

export function incCount(state: State, options: Option[], step = 1): void {
    state.count += step;
    state.price = options[state.option].price * state.count;
}

export const Selector = component$((props: Props) => {
    
    const state = useStore<State>({ 
        option: 0,
        count: 1,
        price: props.options[0].price
    });

    const options = props.options;
    const option = props.options[state.option];
    const kind = props.kind;

    return (
     <div>
        <h2>Select your { kind }</h2>
        <h3>{ option.title }</h3>
        <img src={option.img}></img>
        <div>
        <button onClick$={() => nextOption(state, options, -1)}>&larr; Prev</button>
        <button onClick$={() => nextOption(state, options) }>Next &rarr;</button>
        </div>
        <p>
            {option.text}
        </p>
        <p>
            <button class="mr10 counter" onClick$={() => incCount(state, options, -1)}>-</button>
            <span>Count: {state.count}</span>
            <button class="ml10 counter" onClick$={() => incCount(state, options)}>+</button>
            <span class="ml20">€ {state.price}</span>
        </p>
     </div>
    );
  });