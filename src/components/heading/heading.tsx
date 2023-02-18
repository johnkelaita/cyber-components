import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import { Caret } from '../caret/caret';
import styles from './heading.css?inline';

interface HeadingProps {
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'neon' | 'black';
  size?: number; // `1 to 5`, equivalent of h1 to h5
  typewriter?: boolean; // typewriter caret effect
  caret?: boolean; // caret effect
  glow?: boolean; // glow effect
}

export const Heading = component$((props: HeadingProps) => {
  useStylesScoped$(styles);

  return (
    <div class={`heading-wrap`}>
      {props.size == null || props.size == 1 ? <><h1 class={`heading ${props.glow ? `glow` : ``} ${props.typewriter ? `typed` : ``}`}><Slot /></h1>{props.typewriter || props.caret ? <h1><Caret /></h1> : ``}</> : <></>}
      {props.size == 2 ? <><h2 class={`heading ${props.glow ? `glow` : ``} ${props.typewriter ? `typed` : ``}`}><Slot /></h2>{props.typewriter || props.caret ? <h2><Caret /></h2> : ``}</> : <></>}
      {props.size == 3 ? <><h3 class={`heading ${props.glow ? `glow` : ``} ${props.typewriter ? `typed` : ``}`}><Slot /></h3>{props.typewriter || props.caret ? <h3><Caret /></h3> : ``}</> : <></>}
      {props.size == 4 ? <><h4 class={`heading ${props.glow ? `glow` : ``} ${props.typewriter ? `typed` : ``}`}><Slot /></h4>{props.typewriter || props.caret ? <h4><Caret /></h4> : ``}</> : <></>}
      {props.size == 5 ? <><h5 class={`heading ${props.glow ? `glow` : ``} ${props.typewriter ? `typed` : ``}`}><Slot /></h5>{props.typewriter || props.caret ? <h5><Caret /></h5> : ``}</> : <></>}
    </div>
  );
});
