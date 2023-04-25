export interface Destination {
    name: string;
    images: {
        png: string;
        webp: string;
    }
    description: string;
    distance: string;
    travel: string;
}

export interface Crew {
    name: string;
    images: {
        png: string;
        webp: string;
    }
    role: string;
    bio: string
}

export interface Technology {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    }
    description: string;
}




