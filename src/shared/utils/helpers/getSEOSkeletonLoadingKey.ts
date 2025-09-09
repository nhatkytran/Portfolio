/** Returns the key for SEO skeleton loading to help SEO skeleton loading re-render. */
export const getSEOSkeletonLoadingKey = (shouldDisplay: boolean) => (shouldDisplay ? 'content' : 'skeleton');
