
 const GetBreeds = async () => {
    
        const url = "https://api.thedogapi.com/v1/breeds"
        const res = await fetch(url);

        const data = await res.json();
        return data;
   

};
export default GetBreeds;
