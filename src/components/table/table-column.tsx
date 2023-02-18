import { component$, Slot } from "@builder.io/qwik";

interface TableColumnProps {
  valign?: "top" | "middle" | "bottom";
  active?: boolean;
  align?: "start" | "center" | "end"
}

export const TableColumn = component$((props: TableColumnProps) => {
  return (
    <td
      class={{
        "align-top": props.valign == "top",
        "align-bottom": props.valign == "bottom",
        "align-middle": props.valign == "middle",
        "table-active": props.active,
        "text-start": props.align == "start",
        "text-center": props.align == "center",
        "text-end": props.align == "end",
      }}
    >
      <Slot />
    </td>
  );
});
