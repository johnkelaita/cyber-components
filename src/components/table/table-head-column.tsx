import { component$, Slot } from "@builder.io/qwik";

interface TableHeadColumnProps {
  valign?: "top" | "middle" | "bottom";
}

export const TableHeadColumn = component$((props: TableHeadColumnProps) => {
  return (
    <th
      scope="col"
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
