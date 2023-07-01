export const formatTimestamp = (blogDate: Date) => {
    const date = new Date(blogDate);
    return date.toDateString();
}