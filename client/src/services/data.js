import API from "./api.js"

const endpoints = {
    tournaments: "data/tournaments",
    torunamentById: "data/tournaments/"
}

const api = new API({})

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

export function checkRes(result){
    if (result.hasOwnProperty("errorData")){
        const error = new Error();
        Object.assign(error, result);
        throw error
    }
}

