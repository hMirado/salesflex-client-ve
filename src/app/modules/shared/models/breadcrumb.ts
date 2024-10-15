export interface Breadcrumb {
  icon?: string;
  label?: string;
  route?: string;
  routerLinkActiveOptions?: boolean;
}

export interface Header {
  title: string;
  subTitle?: string;
  breadcrumds: Breadcrumb[];
}
