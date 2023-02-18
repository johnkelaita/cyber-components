import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./table.scss?inline";

interface TableProps {
  small?: boolean;
  stripedColumns?: boolean;
  striped?: boolean;
  hover?: boolean;
  responsive?: boolean;
  borderless?: boolean;
  bordered?: boolean;
  caption?: string;
  valign?: "top" | "middle" | "bottom";
}

interface TableResponsiveProps {
  responsive: boolean;
}

export const TableResponsive = component$((props: TableResponsiveProps) => {
  useStyles$(styles);
  return (
    <>
      {props.responsive ? (
        <div class="table-responsive">
          <Slot />
        </div>
      ) : (
        <Slot />
      )}
    </>
  );
});

export const Table = component$((props: TableProps) => {
  return (
    <>
      <TableResponsive>
        <table class={{
            'table': true,
            'align-top': props.valign == 'top',
            'align-bottom': props.valign == 'bottom',
            'align-middle': props.valign == 'middle',            
            'table-striped': props.striped,
            'table-striped-columns': props.stripedColumns,
            'table-bordered': props.bordered,
            'table-borderless': props.borderless,
            'table-sm': props.small,
            'table-hover': props.hover
            }}>
          {props.caption && <caption>{props.caption}</caption>}
          <Slot />
        </table>
      </TableResponsive>
    </>
  );
});
