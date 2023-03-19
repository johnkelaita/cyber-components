import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './box.css?inline';

interface BoxProps {
  type?: "default" | "flat";
  filled?: boolean;
}

export const BoxOutline = component$((props: BoxProps) => {
  useStylesScoped$(styles);

  return (
    <div class={`asection ${props.filled ? `filled` : ``}  ${props.type == 'flat' ? `flat` : ``}`}>
      <Slot />
    </div>
  );
});
