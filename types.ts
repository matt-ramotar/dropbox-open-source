export type SingleNavItem = { title: string; href: string; outlined?: boolean; isInternal: boolean };

export type NavItems = SingleNavItem[];

export type Repository = {
    id: number;
    name: string;
    private: boolean;
    html_url: string;
    description: string | null;
    collaborators_url: string;
    contributors_url: string;
    forks_url: string;
    git_url: string;
    labels_url: string;
    languages_url: string;
    releases_url: string;
    stargazers_url: string;
    subscribers_url: string;
    tags_url: string;
    homepage: string | null;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    default_branch: string;
    open_issues_count: number;
    topics: string[];
    created_at: string;
    updated_at: string;
    visibility: string;
};