import queryString from 'query-string';
/**
 * Get URL parameters
 */
export function parseQuery() {
    return queryString.parseUrl(window.location.href).query;
}

/**
 * Verify login
 * @param permits
 */
export const checkLogin = (permits: any): boolean =>
    (process.env.NODE_ENV === 'production' && !!permits) || process.env.NODE_ENV === 'development';
