import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './box.css?inline';

interface ContainerProps {}

export const BoxPulse = component$((props: ContainerProps) => {
  useStylesScoped$(styles);

  return (
    <div class={`asection`}>
      <Slot />
	  </div>
  );
});
