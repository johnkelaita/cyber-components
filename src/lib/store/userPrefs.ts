export interface UserPrefs {
    color: string;
}

export const defaultUserPrefs = {
    color: 'blue'
}

export const getUserPrefs = () => {
    const userPrefs = window ? window.localStorage.getItem('userPrefs') : null;
    return userPrefs ? JSON.parse(userPrefs) : defaultUserPrefs;
}

export const setUserPrefs = (userPrefs: UserPrefs) => {
    window.localStorage.setItem('userPrefs', JSON.stringify(userPrefs))
}

export const setUserPrefsByKey = (key: string, value: any) => {
    let prefs: UserPrefs = getUserPrefs();

    switch (key.toLowerCase()) {
        case 'color':
            prefs.color = value;
            break;
    }

    window.localStorage.setItem('userPrefs', JSON.stringify(prefs))
}
