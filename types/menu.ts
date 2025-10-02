export interface MenuPage {
  id: number;
  title_short: string;
  title: string;
  description: string;
}

export interface MenuType {
  id: number;
  title: string;
}

export interface IconType {
  id: number;
  title: string;
  url: string;
}

export interface MenuItem {
  id: number;
  parent_id: number;
  position: number;
  high_menu: any;
  menu_type_: MenuType;
  title: string;
  description: string;
  icon_: IconType;
  link_: string;
  top_menu: boolean;
  blog_: any;
  page_: MenuPage;
  departament_: any;
}
