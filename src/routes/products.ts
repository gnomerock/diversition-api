import { Elysia, t } from 'elysia';
import { store } from '../store';

export const productRoutes = new Elysia({ prefix: '/v1/products' })
    .get('/', ({ query }) => {
        const page = parseInt(query.page ?? '1');
        const pageSize = parseInt(query.pageSize ?? '5');
        const allProducts = store.getProducts();
        
        // Mock pagination
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const items = allProducts.slice(start, end);
        
        return {
            items,
            page,
            pageSize,
            total: allProducts.length
        };
    }, {
        query: t.Object({
            page: t.Optional(t.String()),
            pageSize: t.Optional(t.String())
        })
    })
    .get('/:id', ({ params, set }) => {
        const id = parseInt(params.id);
        const product = store.getProduct(id);
        
        if (!product) {
            set.status = 404;
            return { message: `product id ${id} not found.` };
        }
        
        return product;
    }, {
        params: t.Object({
            id: t.String()
        })
    })
    .get('/:id/reviews', ({ params, query, set }) => {
        const id = parseInt(params.id);
        const product = store.getProduct(id);
       
        if (!product) {
            set.status = 404;
             return { message: `product id ${id} not found.` };
        }

        const page = parseInt(query.page ?? '1');
        const pageSize = parseInt(query.pageSize ?? '5');
        
        const allReviews = store.getReviewsByProduct(id);
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const items = allReviews.slice(start, end);

        return {
            items,
            page,
            pageSize,
            total: allReviews.length
        };

    }, {
         params: t.Object({
            id: t.String()
        }),
        query: t.Object({
            page: t.Optional(t.String()),
            pageSize: t.Optional(t.String())
        })
    })
    .post('/:id/reviews', ({ params, body, set }) => {
        const id = parseInt(params.id);
        const product = store.getProduct(id);
        
        if (!product) {
            set.status = 404;
            return { message: `product id ${id} not found.` };
        }
        
        store.addReview(id, body.review);
        
        set.status = 201;
        return { message: "review success." };
    }, {
        params: t.Object({
            id: t.String()
        }),
        body: t.Object({
            review: t.String()
        })
    });
