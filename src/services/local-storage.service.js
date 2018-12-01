/* Object to represent Service Functions */
const ls = {
    get   : (itemId) => {
        return JSON.parse(window.localStorage.getItem(itemId));
    },
    set   : (itemId, itemContent) => {
        return window.localStorage.setItem(itemId, JSON.stringify(itemContent));
    },
    remove: (itemId) => {
        window.localStorage.removeItem('itemId');
    },
};

export default ls;
