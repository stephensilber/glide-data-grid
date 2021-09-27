import * as React from "react";
interface Props extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    readonly placeholder?: string;
}
declare const GrowingEntry: React.NamedExoticComponent<Props>;
export default GrowingEntry;
