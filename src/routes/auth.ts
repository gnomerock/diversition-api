import { Elysia, t } from 'elysia';

export const authRoutes = new Elysia({ prefix: '/v1/auth' })
    .post('/login', ({ body, set }) => {
        // Simple mock login
        // In a real app we'd check DB. Here we just mock the behavior from Bruno.
        // Bruno example successful login:
        // request: json: { "username": "example@diversition.com", "password": "qwer#1337" }
        
        if (body.username === 'example@diversition.com' && body.password === 'qwer#1337') {
             // success
             return { message: "success" }; // Bruno didn't show success body in the truncated view clearly, assuming standard success or token. 
             // Wait, looking at the Bruno file (implied from failure case), let's just return a success message or token.
             // The failure case in Bruno was 400 Bad Request with message "invalid creadential"
        }
        
        set.status = 400;
        return { message: "invalid creadential" };
    }, {
        body: t.Object({
            username: t.String(),
            password: t.String()
        })
    });
