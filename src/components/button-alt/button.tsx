import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './button.css?inline';

interface ButtonProps {
  text?: string;
  subtext?: string;
  size?: string; // `small`, 'medium`, `large`
  color?: string; // `red`, `orange`, `yellow`, `green`, `blue`, `purple`, `neon`, `black`
}

export const Button = component$((props: ButtonProps) => {
  useStylesScoped$(styles);

  return (
    <button class={`${props.size ? `size_${props.size}` : 'size_small'} ${props.color ? `color_${props.color}` : 'cybr-btn__color_blue'}`}>
        <span class="text">{props.text}<span aria-hidden>_</span></span>
        <span aria-hidden class="glitch">{props.text}</span>
        <span aria-hidden class="tag">{props.subtext}</span>
    </button>
  );
});
