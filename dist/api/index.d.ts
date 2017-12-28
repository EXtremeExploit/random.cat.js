export declare class Cat  {
    file: string;
}

export declare class Api {
    private baseUrl;
    constructor();


    /**
     * Makes an HTTP request to the random.cat API.
     * 
     * @param endpoint The URL of the random.cat API.
     * @returns A Promise object that will resolve to the result from the API call.
     */
    private apiCall(endpoint);

    
    /**
     * Makes a call to `/meow`.
     */
    getCat(): Promise<Cat>;

}
export declare function api(): Api;
