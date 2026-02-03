// Jikan API Base URL
const JIKAN_API_BASE = 'https://api.jikan.moe/v4';

// Rate limiting helper
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 350; // Slightly more than 3 requests/second

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function rateLimitedFetch(url) {
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;
    
    if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
        await delay(MIN_REQUEST_INTERVAL - timeSinceLastRequest);
    }
    
    lastRequestTime = Date.now();
    
    const response = await fetch(url);
    
    if (!response.ok) {
        if (response.status === 429) {
            throw new Error('Rate limit exceeded. Please wait a moment and try again.');
        }
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
}

/**
 * Fetch anime details by ID
 * @param {number} animeId - MyAnimeList anime ID (Naruto Shippuden: 1735)
 * @returns {Promise<Object>} Anime data object
 */
async function fetchAnimeDetails(animeId) {
    try {
        const url = `${JIKAN_API_BASE}/anime/${animeId}`;
        const data = await rateLimitedFetch(url);
        return data.data;
    } catch (error) {
        console.error('Error fetching anime details:', error);
        throw new Error(`Failed to fetch anime details: ${error.message}`);
    }
}

/**
 * Fetch anime characters
 * @param {number} animeId - MyAnimeList anime ID
 * @returns {Promise<Object>} Characters data object
 */
async function fetchAnimeCharacters(animeId) {
    try {
        const url = `${JIKAN_API_BASE}/anime/${animeId}/characters`;
        const data = await rateLimitedFetch(url);
        return data.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw new Error(`Failed to fetch characters: ${error.message}`);
    }
}

/**
 * Fetch anime episodes
 * @param {number} animeId - MyAnimeList anime ID
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Episodes data object with pagination
 */
async function fetchAnimeEpisodes(animeId, page = 1) {
    try {
        const url = `${JIKAN_API_BASE}/anime/${animeId}/episodes?page=${page}`;
        const data = await rateLimitedFetch(url);
        return data;
    } catch (error) {
        console.error('Error fetching episodes:', error);
        throw new Error(`Failed to fetch episodes: ${error.message}`);
    }
}

/**
 * Fetch anime staff
 * @param {number} animeId - MyAnimeList anime ID
 * @returns {Promise<Object>} Staff data object
 */
async function fetchAnimeStaff(animeId) {
    try {
        const url = `${JIKAN_API_BASE}/anime/${animeId}/staff`;
        const data = await rateLimitedFetch(url);
        return data.data;
    } catch (error) {
        console.error('Error fetching staff:', error);
        throw new Error(`Failed to fetch staff: ${error.message}`);
    }
}

/**
 * Fetch anime reviews
 * @param {number} animeId - MyAnimeList anime ID
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Reviews data object with pagination
 */
async function fetchAnimeReviews(animeId, page = 1) {
    try {
        const url = `${JIKAN_API_BASE}/anime/${animeId}/reviews?page=${page}`;
        const data = await rateLimitedFetch(url);
        return data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw new Error(`Failed to fetch reviews: ${error.message}`);
    }
}

/**
 * Fetch anime recommendations
 * @param {number} animeId - MyAnimeList anime ID
 * @returns {Promise<Object>} Recommendations data object
 */
async function fetchAnimeRecommendations(animeId) {
    try {
        const url = `${JIKAN_API_BASE}/anime/${animeId}/recommendations`;
        const data = await rateLimitedFetch(url);
        return data.data;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        throw new Error(`Failed to fetch recommendations: ${error.message}`);
    }
}

/**
 * Fetch anime news
 * @param {number} animeId - MyAnimeList anime ID
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} News data object with pagination
 */
async function fetchAnimeNews(animeId, page = 1) {
    try {
        const url = `${JIKAN_API_BASE}/anime/${animeId}/news?page=${page}`;
        const data = await rateLimitedFetch(url);
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw new Error(`Failed to fetch news: ${error.message}`);
    }
}

/**
 * Fetch character details
 * @param {number} characterId - MyAnimeList character ID
 * @returns {Promise<Object>} Character data object
 */
async function fetchCharacterDetails(characterId) {
    try {
        const url = `${JIKAN_API_BASE}/characters/${characterId}/full`;
        const data = await rateLimitedFetch(url);
        return data.data;
    } catch (error) {
        console.error('Error fetching character details:', error);
        throw new Error(`Failed to fetch character details: ${error.message}`);
    }
}
