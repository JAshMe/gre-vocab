/* Created By: JAshMe */
/*
    Description: To provide a nav bar in header
*/

export interface HeaderNavProps {
  brandLabel: string;
}

export const HeaderNav = (props: HeaderNavProps) =>
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">{props.brandLabel}</a>
        </nav>
    );
};
