export async function register(name:string, email:string, telephone:string, password:string) {
    const response = await fetch(`http://localhost:3000/api/v2/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            name:name, 
            email:email, 
            telephone:telephone, 
            password:password 
        }),
        credentials: "include",
    });
    const data = await response.json();
    console.log(data)
    return data;
}
    
