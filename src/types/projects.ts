export type ProjectType = {
    slug: string;
    title: string;
    description: string;
    minicard?: {
        icon: string;
        tech: string;
    }
    image: {
        url: string;
        alt: string;
    };
    links: {
        gitlab?: string;
        github?: string;
        demo?: {
            url: string;
            description: string;
        };
    };
    category: {
        name: string;
        color: {
            tag: string;
            hover: string;
            arrow: string;
        };
    };
    techStack: {
        name: string;
        tagClass: string;
    }[];
    authors?: string;
    date?: string;
    duration?: string;
    context?: string;
    distribution?: {
        name: string;
        role: string;
    }[];
    concept?: string;
    features?: {
        icon: string;
        title: string;
    }[];
    difficultiesEncountered?: string[];
    conclusion?: string;
};

