import { ReactNode, AnchorHTMLAttributes } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string,
    children: ReactNode,
}