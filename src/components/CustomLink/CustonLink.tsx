import { Link } from "react-router-dom";
import { LinkProps } from "./CustomLink.props";

export const CustomLink = ({ to, children, className }: LinkProps) => {
    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
}
