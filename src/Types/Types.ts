import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";

export interface ICustomLink {
    text : string;
    href : string
    fontWeight?: string
    color?: string
    handleClick?: (arg : any) => void;
}
export interface ILayout {
    title : string;
    children : any
    desc ?: string;
    navbarSx ?: any;
}
export interface INavbar {
    navbarSx?:any;
    toggleDrawer : (state?: boolean) => void
}
export interface IInput {
    multi?: boolean;
    mt?: string;
    name : string;
    label : string
    type?: string;
}
export interface IContactBox {
    t1 : string;
    t2 : string;
    t3 : string;
    target ?: string;
    href: string;
}
export interface IIcon {
    filter: boolean;
    svg: string;
    title: string;
    isFrontend: boolean;
}
export interface ICustomDrawer extends INavbar {
    isOpen : boolean;
}
export interface IToolCard {
    title: string;
    svg: string;
    filter: boolean;
    className: string;
}
// src/Types/Types.ts
export interface ISocialMedia {
    svg: string;
    title: string;
    href: string;
    color: string;
    filter: boolean;
    className: string;
}

export interface IDrawerItem {
    text : string;
    Icon : OverridableComponent < SvgIconTypeMap < {},
    "svg" >> & {
        muiName: string;
    }
    isToggleTheme?: boolean;
    url : string;
    toggleDrawer : (state?: boolean) => void
}
export interface IProject {
    title: string;
    repoUrl: string;
    siteUrl: string;
    description: string;
    img: string | null;
}
export interface IProjectCard extends IProject {
    isReversed?: boolean;
    className?: string;
}