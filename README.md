# Vercel Solutions - E-commerce Challenge

Our customer ACME Store has a simple e-commerce website that includes:

- A home page with a bunch of campaigns
- A PLP that lists products
- A PDP that shows a product and its details

## Challenges

1. Home page is really slow, the customer said that campaigns don't change that often and are the same for everyone.
2. Customer changed their mind, they want to have random buckets (a, b and c) of campaigns for each user.
3. Build times are too long for PDP, only products with +100 reviews are important.
4. Everything in the PDP page is static except the related products.
5. Customer said that products above 50 USD should have reviews updated in real time (or at least every 10 seconds).

## Notes

- All requests are mocked and have a synthetic delay of ~ 1 second

## Recommendations

- Always take performance in mind
- Assume that customers will have lot of traffic
- Always think about scalability
