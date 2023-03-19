import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './checkbox.css?inline';

interface CheckboxProps {
  placeholder?: string;
  value?: string;
  label?: string;
}

export const Checkbox = component$((props: CheckboxProps) => {
  useStylesScoped$(styles);

  return (
  <label class={`checkbox ${props.label ? `labelled` : ``}`}>
    {props.label && <strong>{props.label}</strong>}
    <input type="checkbox" checked />
    <span class="checkmark"></span>
  </label>);

});
