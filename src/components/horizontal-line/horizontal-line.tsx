import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './horizontal-line.scss?inline';

interface HorizontalLineProps {
  size?: number; // `1 to 5`
  style?: 'solid' | 'dashed' | 'doubled' | 'pulse'; 
}

export const HorizontalLine = component$((props: HorizontalLineProps) => {
  useStylesScoped$(styles);

  return (
    <div class={`horizontal-line ${props.style == `pulse` ? `pulse` : ``} ${props.size && props.size > 0 ? `size-${props.size}` : `` }`}>
      <div class={`under`}>
          {props.style == `dashed` || props.style == `doubled` ? <span class={`underline`} /> : <></>}
          {props.style == `doubled` ? <span class={`underline`} /> : <></>}
      </div>
    </div>
  );
});
