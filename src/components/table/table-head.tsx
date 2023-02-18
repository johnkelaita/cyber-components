import { component$, Slot } from "@builder.io/qwik";

interface TableHeadProps {
  valign?: "top" | "middle" | "bottom";
}

export const TableHead = component$((props: TableHeadProps) => {
  return (
    <thead
      class={{
        "align-top": props.valign == "top",
        "align-bottom": props.valign == "bottom",
        "align-middle": props.valign == "middle",
      }}
    >
      <Slot />
    </thead>
  );
});
