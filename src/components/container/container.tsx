import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './container.css?inline';

interface ContainerProps {
//   size?: number; // `1 to 5`, equivalent of h1 to h5
//   glitching?: boolean;
}

export const Container = component$((props: ContainerProps) => {
  useStylesScoped$(styles);

  return (
    <div class="box">
		{/* <div class="glass"></div> */}
		<div class="content">
      <Slot />
		</div>
	</div>
  );
});
