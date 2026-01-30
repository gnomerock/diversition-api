import { Elysia, t } from 'elysia';
import { store } from '../store';

export const reviewRoutes = new Elysia({ prefix: '/v1/reviews' })
    .put('/:id', ({ params, set }) => {
        const id = parseInt(params.id);
        
        const success = store.updateReview(id, "updated text placeholder"); // Mock update
        
        if (success) {
            return { message: "edit review success." };
        } else {
             set.status = 404;
             return { message: `review id ${id} not found.` };
        }

    }, {
        params: t.Object({
            id: t.String()
        })
    })
    .delete('/:id', ({ params, set }) => {
        const id = parseInt(params.id);
        const success = store.deleteReview(id);
        
        if (success) {
            return { message: "delete review success." };
        } else {
            set.status = 404;
            return { message: `review id ${id} not found.` };
        }
    }, {
        params: t.Object({
             id: t.String()
        })
    });
