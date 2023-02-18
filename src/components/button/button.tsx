import { component$, QwikMouseEvent, useStylesScoped$ } from '@builder.io/qwik';
import { Caret } from '../caret/caret';
import styles from './button.scss?inline';

interface ButtonProps {
  text?: string;
  subtext?: string;
  size?: string; // `small`, 'medium`, `large`
  color?: string; // `red`, `orange`, `yellow`, `green`, `blue`, `purple`, `neon`, `black`
  href?: string; /* if this is set, then it will link the anchor item */
  onClick$: (event: QwikMouseEvent) => void;
}

export const Button = component$((props: ButtonProps) => {
  useStylesScoped$(styles);

  const classes = `${props.size ? `size_${props.size}` : 'size_small'} ${props.color ? `${props.color}` : ''}`;

  return <>
    {props.href ? 
    <a href={props.href} class={classes} onClick$={props.onClick$}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="text">{props.text}<Caret /></div>
    </a> :
      <button class={classes} onClick$={props.onClick$}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="text">{props.text}<Caret /></div>
      </button>
      }
  </>;
});
