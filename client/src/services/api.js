class API {
    constructor(appId, apiKey, endpoints){
        this.appId = appId
        this.apiKey = apiKey
        this.endpoints = Object.assign({
            login: "users/login",
            register: "users/register",
            logout: "users/logout",
        }, endpoints)

    }

    host(endpoint){
        return `https://api.backendless.com/${this.appId}/${this.apiKey}/${endpoint}`
    }

    
    getOptions(headers){
        const token = sessionStorage.getItem("userToken")
        const options = { headers: headers || {}}
    
        if (token !== null){
            options.headers = Object.assign(options.headers, { "user-token": token })
        }
    
        return options
    }
    
    async get(endpoint){
        const options = this.getOptions();

        const result = await fetch(this.host(endpoint), options)

        try {
            return await result.json();
        } catch (err) {
            return result;
        } 

    }
    
    async post(endpoint, body){
        const options = this.getOptions({"Content-Type": "application/json"})
        options.method = "POST";
        options.body = JSON.stringify(body);
    
        const result = (await fetch(this.host(endpoint), options)).json();
    
        return result
    }

    async put(endpoint, body){
        const options = this.getOptions({"Content-Type": "application/json"})
        options.method = "PUT";
        options.body = JSON.stringify(body);
    
        const result = (await fetch(this.host(endpoint), options)).json();
    
        return result
    }

    async delete(endpoint){
        const options = this.getOptions()
        options.method = "DELETE";
    
        const result = (await fetch(this.host(endpoint), options)).json();
        
        return result
    }
    
    async register(username, email, password){
        return this.post(this.endpoints.register, {
                username,
                email,
                password
            })
    }
    
    async login(username, password){
        const result = await this.post(this.endpoints.login, {
            login: username,
            password
        })

        sessionStorage.setItem("userToken", result["user-token"]);
        sessionStorage.setItem("username", result.username);
        sessionStorage.setItem("userId", result.objectId);

        return result
    }
    
    async logout(){
        const result = await this.get(this.endpoints.logout);
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("userId");
        
        return result
    }

}

export default API;