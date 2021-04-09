import API from "./api.js"

const endpoints = {
    tournaments: "data/tournaments",
    torunamentById: "data/tournaments/"
}

const api = new API("E7A8ACC5-59C8-A894-FF1B-4FBD052E7800",
        "E09F1842-ED65-4438-80A6-789EB86F0893",
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

