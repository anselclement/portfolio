
function fetchJson(url, options) {
    return fetch(url, Object.assign({
        credentials: 'same-origin',
    }, options))
        .then(checkStatus)
        .then(response => {
            return response.text()
                .then(text => text ? JSON.parse(text) : '');
        });
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 400) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;

    throw error
}


/**
 * Returns a promise where the data is the rep log collection
 *
 * @return {Promise<Response>}
*/
export function getAPropos() {
    return fetchJson('/AproposJSON')
    .then(data => data)
}

/**
 * Returns a promise where the data is the rep log collection
 *
 * @return {Promise<Response>}
*/
export function getHobbies() {
    return fetchJson('/hobbiesJSON')
    .then(icon => icon)
}

/**
 * Returns a promise where the data is the rep log collection
 *
 * @return {Promise<Response>}
*/
export function getCompetences() {
    return fetchJson('/competencesJSON')
    .then(competences => competences)
}

/**
 * Returns a promise where the data is the rep log collection
 *
 * @return {Promise<Response>}
*/
export function getExperiences() {
    return fetchJson('/experiencesJSON')
    .then(experiences => experiences)
}

/**
 * Returns a promise where the data is the rep log collection
 *
 * @return {Promise<Response>}
*/
export function getPortfolio() {
    return fetchJson('/portfolioJSON')
    .then(portfolio => portfolio)
}



export function createMail(mail) {
    
    return fetchJson('/contact', {
        method: 'POST',
        body: JSON.stringify(mail),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}


/*

export function deleteRepLog(id) {
    return fetchJson(`/reps/${id}`, {
        method: 'DELETE'
    });
}

export function createAPropos(aPropos) {
    return fetchJson('/dashboard/Apropos', {
        method: 'POST',
        body: JSON.stringify(aPropos),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}*/