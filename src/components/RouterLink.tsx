import { Link as RouterDomLink, type LinkProps } from "react-router-dom";
import { prefetchRoute } from "@/lib/prefetchRoute";

type AppLinkProps = Omit<LinkProps, "to"> & {
  href: string;
};

export function Link({ href, onMouseEnter, onFocus, ...rest }: AppLinkProps) {
  const warmRoute = () => prefetchRoute(href);

  return (
    <RouterDomLink
      to={href}
      onMouseEnter={(event) => {
        warmRoute();
        onMouseEnter?.(event);
      }}
      onFocus={(event) => {
        warmRoute();
        onFocus?.(event);
      }}
      {...rest}
    />
  );
}
