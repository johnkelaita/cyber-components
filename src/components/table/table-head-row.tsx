import { component$, Slot } from "@builder.io/qwik";

interface TableHeadRowProps {
  valign?: "top" | "middle" | "bottom";
}

export const TableHeadRow = component$((props: TableHeadRowProps) => {
  return (
    <th
      scope="row"
      class={{
        "align-top": props.valign == "top",
        "align-bottom": props.valign == "bottom",
        "align-middle": props.valign == "middle",
      }}
    >
      <Slot />
    </th>
  );
});
