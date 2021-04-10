import API from "./api.js"

const endpoints = {
    tournaments: "data/tournaments",
    torunamentById: "data/tournaments/"
}

const api = new API("C89AB65E-A71B-0B1B-FF0C-914A80F2EB00",
        "827E6FD4-8DD0-400C-BC28-9E7F6D69C065",
        {},)

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);

//get all tournaments
export async function getAlltournaments(){
    return api.get(endpoints.tournaments)
}
//create Tournament(add)
export async function createTournament(tournament){
    return api.post(endpoints.tournaments, tournament)
}

// get tournament by ID(details)
export async function getTournamentById(id){
    return api.get(endpoints.tournamentsById + id)
}
//edit tournament by ID
export async function editTournamentById(id, newtournament){
    return api.put(endpoints.tournamentsById + id, newtournament)
}
//delete tournament by ID
export async function deleteTournamentById(id){
    return api.delete(endpoints.tournamentsById + id)
}

