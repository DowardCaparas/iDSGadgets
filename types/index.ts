
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
    btnIcon?: string;
    label: string;
}

export interface GadgetDetails {
    name: string;
    currentPrice: number;
    oldPrice: number;
    description: string;
    deviceIMG: string;
}

export interface IconProps {
    imageUrl: string;
    imageAlt: string;
}