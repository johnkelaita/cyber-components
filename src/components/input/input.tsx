import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Caret } from '../caret/caret';
import styles from './button.css?inline';

interface InputProps {
  placeholder?: string;
  value?: string;
  subtext?: string;
  size?: string; // `small`, 'medium`, `large`
  color?: string; // `red`, `orange`, `yellow`, `green`, `blue`, `purple`, `neon`, `black`
}

export const Input = component$((props: InputProps) => {
  useStylesScoped$(styles);

  return (
    <button class={`${props.size ? `size_${props.size}` : 'size_small'} ${props.color ? `${props.color}` : 'blue'}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="text">{props.value}<Caret /></div>
    </button>
  );
});
