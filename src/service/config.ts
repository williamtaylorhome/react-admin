/**
 * Interface address configuration file
 */
//easy-mock simulates data interface address
const MOCK_API = 'https://react-admin-mock.now.sh/api';
export const MOCK_AUTH_ADMIN = MOCK_API + '/admin.js'; // Administrator permissions interface
export const MOCK_AUTH_VISITOR = MOCK_API + '/visitor.js'; // Access permission interface
/** Server-side asynchronous menu interface */
export const MOCK_MENU = MOCK_API + '/menu.js';

// github authorization
export const GIT_OAUTH = 'https://github.com/login/oauth';
// github user
export const GIT_USER = 'https://api.github.com/user';

// bbc top news
export const NEWS_BBC =
    'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=429904aa01f54a39a278a406acf50070';
