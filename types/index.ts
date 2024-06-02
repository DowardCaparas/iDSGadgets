
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles: string;
    btnIcon?: string;
}

export interface GadgetDetails {
    name: string;
    currentPrice: number;
    oldPrice: number;
    description: string;
}

export interface Gadget {
    id: number;
    details: GadgetDetails;
    deviceIMG: string;
}

export interface ProductProps {
    imgurl: string;
    title: string;
}

export interface BlogProps {
    imgURL: string;
    title: string;
    date: string;
}

export interface IconProps {
    imageUrl: string;
    imageAlt: string;
}