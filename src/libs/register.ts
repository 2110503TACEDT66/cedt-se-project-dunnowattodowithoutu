export async function register(name:string, email:string, telephone:string, password:string) {
    const response = await fetch("https://rest-go.vercel.app/api/v1/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name:name, email:email, telephone:telephone, password:password }),
    });
    const data = response.json();
    return data;
}
    
