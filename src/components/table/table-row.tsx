import { component$, Slot } from "@builder.io/qwik";

interface TableRowProps {
  valign?: "top" | "middle" | "bottom";
  active?: boolean;
}

export const TableRow = component$((props: TableRowProps) => {
  return (
    <tr
      class={{
        "align-top": props.valign == "top",
        "align-bottom": props.valign == "bottom",
        "align-middle": props.valign == "middle",
        "table-active": props.active,
      }}
    >
      <Slot />
    </tr>
  );
});
