import { component$, QwikChangeEvent, Slot, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import styles from './select-input.scss?inline';

export interface InputItemSchema {
  text: string;
  value: string;
}

interface SelectInputProps {
  placeholder?: string;
  value?: string;
  label?: string;
  options?: InputItemSchema[];
  allowNoneOption?: boolean;
  onChange$?: any;
}

export const SelectInput = component$((props: SelectInputProps) => {
  useStylesScoped$(styles);

  const inputValue = useSignal(props.value);

  return (
    <div class={`select-input ${props.label ? `labelled` : ``}`}>
      {props.label && <label><strong>{props.label}</strong></label>}
      <div class={`select`}>
        <select name="format" id="format" onChange$={props.onChange$}>
            {props.allowNoneOption ? (
            <option selected>Choose...</option>
            ) : <></>}
            {props.options?.map((option) => (
            <option value={option.value}>{option.text}</option>
            ))}
        </select>
      </div>
    </div>
  );
});
