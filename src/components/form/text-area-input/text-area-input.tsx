import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import styles from './text-area-input.css?inline';

interface TextAreaInputProps {
  placeholder?: string;
  value?: string;
  label?: string;
}

export const TextAreaInput = component$((props: TextAreaInputProps) => {
  useStylesScoped$(styles);

  const inputValue = useSignal(props.value);

  return (
    <div class={`text-area-input ${props.label ? `labelled` : ``}`}>
      {props.label && <label><strong>{props.label}</strong></label>}
      <textarea placeholder={props.placeholder} value={inputValue} />
    </div>
  );
});
