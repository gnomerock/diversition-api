import { Elysia, t } from 'elysia';
import { jwt } from '@elysiajs/jwt';

export const authRoutes = new Elysia({ prefix: '/v1/auth' })
    .use(
        jwt({
            name: 'jwt',
            secret: process.env.JWT_SECRET
        })
    )
    .post('/login', async ({ body, set, jwt }) => {
        // Simple mock login
        // In a real app we'd check DB. Here we just mock the behavior from Bruno.
        // Bruno example successful login:
        // request: json: { "username": "example@diversition.com", "password": "qwer#1337" }
        
        if (body.username === 'example@diversition.com' && body.password === 'qwer#1337') {
             // success
             const token = await jwt.sign({
                username: body.username
             });
             return { 
                message: "success",
                token
             }; 
        }
        
        set.status = 400;
        return { message: "invalid creadential" };
    }, {
        body: t.Object({
            username: t.String(),
            password: t.String()
        })
    });
