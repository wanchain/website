const reAgent = (str, input) => {
    if ( input.indexOf(str) >= 0 ) {
        return true;
    } else if ( input.indexOf(str) < 0) {
        return false;
    }
};

export default reAgent;