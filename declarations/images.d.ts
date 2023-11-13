declare module "*.png" {
    interface IImage {
        [image: string]: string;
    }

    const image: IImage;

    export = image;
}

declare module "*.jpg" {
    interface IImage {
        [image: string]: string;
    }

    const image: IImage;

    export = image;
}

declare module "*.jpeg" {
    interface IImage {
        [image: string]: string;
    }

    const image: IImage;

    export = image;
}