export const getHeader = () => {
    const token = localStorage.getItem('token')
    const config = {

        headers: { 'x-access-token': token }
    }
    return config;
}

export const calculateStats = (response) => {
    let stats = {};
    let { data } = response;
    stats.average = 0;
    stats.correct = 0;
    stats.wrong = 0;
    stats.score = 0;
    if(Object.keys(response).length > 0) {
        data.forEach(element => {
            stats.correct = stats.correct + element.correctAnswers;
            stats.wrong = stats.wrong + element.wrongAnswers;
            stats.score = stats.score + element.testScore;
        });
        stats.totalTest = data.length;
        stats.average = stats.score/stats.totalTest;
        return stats;
    } else {
        stats.totalTest = 0;
        return stats
    }
    
}