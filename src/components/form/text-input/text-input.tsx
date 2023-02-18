import { component$, Slot, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import styles from './text-input.css?inline';

interface TextInputProps {
  placeholder?: string;
  value?: string;
  label?: string;
}

export const TextInput = component$((props: TextInputProps) => {
  useStylesScoped$(styles);

  const inputValue = useSignal(props.value);

  return (
  <div class={`text-input ${props.label ? `labelled` : ``}`}>
    {props.label && <label><strong>{props.label}</strong></label>}
    <input placeholder={props.placeholder} value={inputValue} />
  </div>);
});
