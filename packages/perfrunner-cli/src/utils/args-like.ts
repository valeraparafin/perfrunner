export const argsLike = (v: string) =>
    v
        .split(/(?=[A-Z])/g)
        .join('-')
        .toLowerCase();
