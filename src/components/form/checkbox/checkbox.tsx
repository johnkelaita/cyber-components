import { component$, Slot, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import styles from './checkbox.css?inline';

interface CheckboxProps {
  placeholder?: string;
  value?: string;
  label?: string;
}

export const Checkbox = component$((props: CheckboxProps) => {
  useStylesScoped$(styles);

  const inputValue = useSignal(props.value);

  return (
  <label class={`checkbox ${props.label ? `labelled` : ``}`}>
    {props.label && <strong>{props.label}</strong>}
    <input type="checkbox" checked="checked" />
    <span class="checkmark"></span>
  </label>);

});
