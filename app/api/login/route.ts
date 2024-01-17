export async function POST(req : Request){

    console.log('triggered by credential provider to /api/login')


    return new Response(JSON.stringify({
        username : 'myuser',
        password : 'mypassword'
    }))
}