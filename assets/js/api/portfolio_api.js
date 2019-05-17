/**
 * Returns a promise where the data is the rep log collection
 *
 * @return {Promise<Response>}
*/
export function getAPropos() {
    return fetch('/dashboard/AproposJSON')
    .then(response => {
        return response.json();
    });
}



































/*function fetchJson(url, options) {
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