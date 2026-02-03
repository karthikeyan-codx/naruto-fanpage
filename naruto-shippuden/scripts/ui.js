/**
 * Render hero section with banner and key stats
 * @param {Object} anime - Anime data object
 */
function renderHeroSection(anime) {
    const heroSection = document.getElementById('hero-section');
    const heroTitle = document.getElementById('hero-title');
    const heroTitleJp = document.getElementById('hero-title-jp');
    const heroScore = document.getElementById('hero-score');
    const heroEpisodes = document.getElementById('hero-episodes');
    const heroStatus = document.getElementById('hero-status');

    // Set background image if available
    if (anime.images && anime.images.jpg && anime.images.jpg.large_image_url) {
        heroSection.style.backgroundImage = `url(${anime.images.jpg.large_image_url})`;
    }

    // Set titles
    heroTitle.textContent = anime.title_english || anime.title || 'Naruto Shippuden';
    heroTitleJp.textContent = anime.title_japanese || '';

    // Set stats
    heroScore.textContent = anime.score ? anime.score.toFixed(1) : 'N/A';
    heroEpisodes.textContent = anime.episodes || 'N/A';
    heroStatus.textContent = anime.status || 'Unknown';
}

/**
 * Render synopsis section
 * @param {Object} anime - Anime data object
 */
function renderSynopsis(anime) {
    const synopsisText = document.getElementById('synopsis-text');
    if (anime.synopsis) {
        synopsisText.textContent = anime.synopsis;
    } else {
        synopsisText.textContent = 'Synopsis not available.';
    }
}

/**
 * Render information cards
 * @param {Object} anime - Anime data object
 */
function renderInfoCards(anime) {
    const infoCardsContainer = document.getElementById('info-cards');
    infoCardsContainer.innerHTML = '';

    const infoItems = [
        { label: 'Type', value: anime.type || 'N/A' },
        { label: 'Episodes', value: anime.episodes || 'N/A' },
        { label: 'Status', value: anime.status || 'N/A' },
        { label: 'Aired', value: formatAiredDate(anime.aired) },
        { label: 'Premiered', value: anime.season ? `${anime.season} ${anime.year || ''}`.trim() : 'N/A' },
        { label: 'Broadcast', value: formatBroadcast(anime.broadcast) },
        { label: 'Producers', value: formatArray(anime.producers, 'name') },
        { label: 'Studios', value: formatArray(anime.studios, 'name') },
        { label: 'Source', value: anime.source || 'N/A' },
        { label: 'Genres', value: formatGenres(anime.genres) },
        { label: 'Themes', value: formatArray(anime.themes, 'name') },
        { label: 'Demographics', value: formatArray(anime.demographics, 'name') },
        { label: 'Duration', value: anime.duration || 'N/A' },
        { label: 'Rating', value: anime.rating || 'N/A' },
        { label: 'Score', value: anime.score ? `${anime.score.toFixed(2)} / 10` : 'N/A' },
        { label: 'Ranked', value: anime.rank ? `#${anime.rank}` : 'N/A' },
        { label: 'Popularity', value: anime.popularity ? `#${anime.popularity}` : 'N/A' },
        { label: 'Members', value: anime.members ? formatNumber(anime.members) : 'N/A' },
        { label: 'Favorites', value: anime.favorites ? formatNumber(anime.favorites) : 'N/A' }
    ];

    infoItems.forEach(item => {
        if (item.value && item.value !== 'N/A' && item.value !== '' && item.value !== null) {
            const card = createInfoCard(item.label, item.value);
            if (card) {
                infoCardsContainer.appendChild(card);
            }
        }
    });
}

/**
 * Create an info card element
 * @param {string} label - Card label
 * @param {string|HTMLElement} value - Card value
 * @returns {HTMLElement} Info card element
 */
function createInfoCard(label, value) {
    const card = document.createElement('div');
    card.className = 'info-card';

    const labelEl = document.createElement('div');
    labelEl.className = 'info-card-label';
    labelEl.textContent = label;

    const valueEl = document.createElement('div');
    valueEl.className = 'info-card-value';
    
    if (typeof value === 'string') {
        valueEl.textContent = value;
    } else if (value instanceof HTMLElement) {
        valueEl.appendChild(value);
        valueEl.className += ' genres';
    } else {
        // Handle null or invalid values
        valueEl.textContent = 'N/A';
    }

    card.appendChild(labelEl);
    card.appendChild(valueEl);

    return card;
}

/**
 * Format genres as tags
 * @param {Array} genres - Array of genre objects
 * @returns {HTMLElement|null} Container with genre tags or null
 */
function formatGenres(genres) {
    if (!genres || genres.length === 0) return null;

    const container = document.createElement('div');
    genres.forEach(genre => {
        if (genre && genre.name) {
            const tag = document.createElement('span');
            tag.className = 'genre-tag';
            tag.textContent = genre.name;
            container.appendChild(tag);
        }
    });
    
    // Return null if no valid genres were added
    return container.children.length > 0 ? container : null;
}

/**
 * Format array of objects
 * @param {Array} array - Array of objects
 * @param {string} property - Property to extract
 * @returns {string} Comma-separated values
 */
function formatArray(array, property) {
    if (!array || array.length === 0) return 'N/A';
    return array.map(item => item[property]).join(', ');
}

/**
 * Format aired date
 * @param {Object} aired - Aired date object
 * @returns {string} Formatted date string
 */
function formatAiredDate(aired) {
    if (!aired) return 'N/A';
    if (aired.string) return aired.string;
    
    const from = aired.from ? new Date(aired.from).toLocaleDateString() : '?';
    const to = aired.to ? new Date(aired.to).toLocaleDateString() : '?';
    return `${from} to ${to}`;
}

/**
 * Format broadcast information
 * @param {Object} broadcast - Broadcast object
 * @returns {string} Formatted broadcast string
 */
function formatBroadcast(broadcast) {
    if (!broadcast) return 'N/A';
    if (broadcast.string) return broadcast.string;
    return `${broadcast.day || ''} at ${broadcast.time || ''}`.trim() || 'N/A';
}

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Render statistics section
 * @param {Object} anime - Anime data object
 */
function renderStatistics(anime) {
    const statisticsContainer = document.getElementById('statistics-content');
    statisticsContainer.innerHTML = '';

    const stats = [
        { label: 'Score', value: anime.score ? anime.score.toFixed(2) : 'N/A' },
        { label: 'Ranked', value: anime.rank ? `#${anime.rank}` : 'N/A' },
        { label: 'Popularity', value: anime.popularity ? `#${anime.popularity}` : 'N/A' },
        { label: 'Members', value: anime.members ? formatNumber(anime.members) : 'N/A' },
        { label: 'Favorites', value: anime.favorites ? formatNumber(anime.favorites) : 'N/A' },
        { label: 'Episodes', value: anime.episodes || 'N/A' }
    ];

    stats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';

        const number = document.createElement('div');
        number.className = 'stat-card-number';
        number.textContent = stat.value;

        const label = document.createElement('div');
        label.className = 'stat-card-label';
        label.textContent = stat.label;

        statCard.appendChild(number);
        statCard.appendChild(label);
        statisticsContainer.appendChild(statCard);
    });
}

/**
 * Render characters section
 * @param {Array} characters - Array of character objects
 */
function renderCharacters(characters) {
    const charactersContainer = document.getElementById('characters-grid');
    charactersContainer.innerHTML = '';

    if (!characters || characters.length === 0) {
        charactersContainer.innerHTML = '<p style="color: var(--text-secondary);">Character information not available.</p>';
        return;
    }

    // Limit to top 20 characters for better performance
    const displayCharacters = characters.slice(0, 20);

    displayCharacters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card';

        const image = document.createElement('img');
        image.className = 'character-image';
        image.src = character.character.images?.jpg?.image_url || '';
        image.alt = character.character.name || 'Character';
        image.onerror = function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="200"%3E%3Crect fill="%23252525" width="150" height="200"/%3E%3Ctext fill="%23b0b0b0" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
        };

        const info = document.createElement('div');
        info.className = 'character-info';

        const name = document.createElement('div');
        name.className = 'character-name';
        name.textContent = character.character.name || 'Unknown';

        const role = document.createElement('div');
        role.className = 'character-role';
        role.textContent = character.role || 'Unknown';

        info.appendChild(name);
        info.appendChild(role);

        // Add voice actor if available
        if (character.voice_actors && character.voice_actors.length > 0) {
            const va = character.voice_actors[0];
            const voiceActor = document.createElement('div');
            voiceActor.className = 'voice-actor';
            voiceActor.textContent = `${va.person.name} (${va.language})`;
            info.appendChild(voiceActor);
        }

        characterCard.appendChild(image);
        characterCard.appendChild(info);
        charactersContainer.appendChild(characterCard);
    });
}

/**
 * Render episodes list
 * @param {Array} episodes - Array of episode objects
 * @param {number} page - Current page number
 */
function renderEpisodes(episodes, page) {
    const episodesContainer = document.getElementById('episodes-list');
    episodesContainer.innerHTML = '';

    if (!episodes || episodes.length === 0) {
        episodesContainer.innerHTML = '<p style="color: var(--text-secondary);">Episode information not available.</p>';
        return;
    }

    episodes.forEach((episode, index) => {
        const episodeItem = document.createElement('div');
        episodeItem.className = 'episode-item';

        const episodeNumber = document.createElement('div');
        episodeNumber.className = 'episode-number';
        episodeNumber.textContent = `#${episode.mal_id || (page - 1) * 50 + index + 1}`;

        const episodeTitle = document.createElement('div');
        episodeTitle.className = 'episode-title';
        episodeTitle.textContent = episode.title || `Episode ${episode.mal_id || (page - 1) * 50 + index + 1}`;

        const episodeDate = document.createElement('div');
        episodeDate.className = 'episode-date';
        if (episode.aired) {
            const date = new Date(episode.aired);
            episodeDate.textContent = date.toLocaleDateString();
        } else {
            episodeDate.textContent = 'N/A';
        }

        episodeItem.appendChild(episodeNumber);
        episodeItem.appendChild(episodeTitle);
        episodeItem.appendChild(episodeDate);
        episodesContainer.appendChild(episodeItem);
    });
}

/**
 * Render characters preview (limited number)
 * @param {Array} characters - Array of character objects
 * @param {number} limit - Maximum number of characters to display
 */
function renderCharactersPreview(characters, limit = 6) {
    const charactersContainer = document.getElementById('characters-grid');
    if (!charactersContainer) return;
    
    charactersContainer.innerHTML = '';

    if (!characters || characters.length === 0) {
        charactersContainer.innerHTML = '<p style="color: var(--text-secondary);">Character information not available.</p>';
        return;
    }

    const displayCharacters = characters.slice(0, limit);

    displayCharacters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card';

        const image = document.createElement('img');
        image.className = 'character-image';
        image.src = character.character.images?.jpg?.image_url || '';
        image.alt = character.character.name || 'Character';
        image.onerror = function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="200"%3E%3Crect fill="%23252525" width="150" height="200"/%3E%3Ctext fill="%23b0b0b0" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
        };

        const info = document.createElement('div');
        info.className = 'character-info';

        const name = document.createElement('div');
        name.className = 'character-name';
        name.textContent = character.character.name || 'Unknown';

        const role = document.createElement('div');
        role.className = 'character-role';
        role.textContent = character.role || 'Unknown';

        info.appendChild(name);
        info.appendChild(role);

        if (character.voice_actors && character.voice_actors.length > 0) {
            const va = character.voice_actors[0];
            const voiceActor = document.createElement('div');
            voiceActor.className = 'voice-actor';
            voiceActor.textContent = `${va.person.name} (${va.language})`;
            info.appendChild(voiceActor);
        }

        characterCard.appendChild(image);
        characterCard.appendChild(info);
        charactersContainer.appendChild(characterCard);
    });
}

/**
 * Render recommendations
 * @param {Array} recommendations - Array of recommendation objects
 */
function renderRecommendations(recommendations) {
    const recommendationsContainer = document.getElementById('recommendations-grid');
    if (!recommendationsContainer) return;
    
    recommendationsContainer.innerHTML = '';

    if (!recommendations || recommendations.length === 0) {
        recommendationsContainer.innerHTML = '<p style="color: var(--text-secondary);">No recommendations available.</p>';
        return;
    }

    // Limit to top 6 recommendations
    const displayRecommendations = recommendations.slice(0, 6);

    displayRecommendations.forEach(rec => {
        const recCard = document.createElement('div');
        recCard.className = 'recommendation-card';

        const image = document.createElement('img');
        image.className = 'recommendation-image';
        image.src = rec.entry.images?.jpg?.image_url || '';
        image.alt = rec.entry.title || 'Anime';
        image.onerror = function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="300"%3E%3Crect fill="%23252525" width="200" height="300"/%3E%3Ctext fill="%23b0b0b0" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
        };

        const info = document.createElement('div');
        info.className = 'recommendation-info';

        const title = document.createElement('div');
        title.className = 'recommendation-title';
        title.textContent = rec.entry.title || 'Unknown';

        const votes = document.createElement('div');
        votes.className = 'recommendation-votes';
        votes.textContent = `${rec.votes || 0} recommendations`;

        info.appendChild(title);
        info.appendChild(votes);

        recCard.appendChild(image);
        recCard.appendChild(info);
        recommendationsContainer.appendChild(recCard);
    });
}

/**
 * Render detailed character information
 * @param {Object} character - Character data object
 */
function renderCharacterDetails(character) {
    // This will be used in characters.html
    return character;
}

/**
 * Render staff information
 * @param {Array} staff - Array of staff objects
 */
function renderStaff(staff) {
    const staffContainer = document.getElementById('staff-grid');
    if (!staffContainer) return;
    
    staffContainer.innerHTML = '';

    if (!staff || staff.length === 0) {
        staffContainer.innerHTML = '<p style="color: var(--text-secondary);">Staff information not available.</p>';
        return;
    }

    staff.forEach(member => {
        const staffCard = document.createElement('div');
        staffCard.className = 'staff-card';

        const image = document.createElement('img');
        image.className = 'staff-image';
        image.src = member.person.images?.jpg?.image_url || '';
        image.alt = member.person.name || 'Staff';
        image.onerror = function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="200"%3E%3Crect fill="%23252525" width="150" height="200"/%3E%3Ctext fill="%23b0b0b0" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
        };

        const info = document.createElement('div');
        info.className = 'staff-info';

        const name = document.createElement('div');
        name.className = 'staff-name';
        name.textContent = member.person.name || 'Unknown';

        const position = document.createElement('div');
        position.className = 'staff-position';
        position.textContent = member.positions?.join(', ') || 'Unknown';

        info.appendChild(name);
        info.appendChild(position);
        staffCard.appendChild(image);
        staffCard.appendChild(info);
        staffContainer.appendChild(staffCard);
    });
}

/**
 * Render reviews
 * @param {Array} reviews - Array of review objects
 */
function renderReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews-list');
    if (!reviewsContainer) return;
    
    reviewsContainer.innerHTML = '';

    if (!reviews || reviews.length === 0) {
        reviewsContainer.innerHTML = '<p style="color: var(--text-secondary);">No reviews available.</p>';
        return;
    }

    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';

        const header = document.createElement('div');
        header.className = 'review-header';

        const userInfo = document.createElement('div');
        userInfo.className = 'review-user';

        const username = document.createElement('div');
        username.className = 'review-username';
        username.textContent = review.user?.username || 'Anonymous';

        const score = document.createElement('div');
        score.className = 'review-score';
        score.textContent = `Score: ${review.score || 'N/A'}`;

        userInfo.appendChild(username);
        userInfo.appendChild(score);

        const date = document.createElement('div');
        date.className = 'review-date';
        if (review.date) {
            date.textContent = new Date(review.date).toLocaleDateString();
        }

        header.appendChild(userInfo);
        header.appendChild(date);

        const content = document.createElement('div');
        content.className = 'review-content';
        const reviewText = review.review || 'No review text available.';
        content.textContent = reviewText.length > 500 ? reviewText.substring(0, 500) + '...' : reviewText;

        reviewCard.appendChild(header);
        reviewCard.appendChild(content);
        reviewsContainer.appendChild(reviewCard);
    });
}
