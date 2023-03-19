import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';
import { setUserPrefsByKey } from '~/lib/store/userPrefs';
import { AppContext } from '~/root';
import { ThemeColors } from '~/routes/layout';
import { SelectInput } from '../form/select-input/select-input';
import { Heading } from '../heading/heading';
import styles from './header.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const colorOptions = ThemeColors.map((color) => (
    { value: color, text: color.toUpperCase() }
  ));

  const state: any = useContext(AppContext);

  return (
    <header>
      <div class="section-heading">
        <Heading size={1} glow>Qwik Cyber Themed Components</Heading>
      </div>
      <div class="section-color">
        <p>Current color:</p>
        <SelectInput
          onChange$={(ev: any) => {
            state.color = ev.target.value;
            setUserPrefsByKey(`color`, ev.target.value);
          }}
          options={colorOptions}
          >
        </SelectInput>
      </div>

      {/* <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank" title="qwik">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            Docs
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            Examples
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Tutorials
          </a>
        </li>
      </ul> */}
    </header>
  );
});
