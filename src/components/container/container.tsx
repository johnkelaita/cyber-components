import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './container.css?inline';

export const Container = component$(() => {
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
