# Summary

I've spend much time to get up to date with Vue and tools, and I still would like to check some
things to get conclusions how to work with components these days.

I could also think about using normal scripts instead of setup scripts in the components to be able
to define and export types from there and have the business logic maybe outside of it for component
wise encapsulation...

How it is done now is that I've defined types in the store and pass down all info
needed to update the state in the box component. But wasn't there the store principle to have
mutations and actions defined in the store, right?

Guess I missed that point and should reconsider. It's been a long time...

Without a store I would eiter pass events all the way up to the root component or all required
data, all the way down to the component which then executes the update on its own as it is now, so
how did the store help me in the current code? Not so much I guess. So don't take this as my
best, time ran out.

The cost calculations for the game are not done either cause time ran out and I had much to cach
up but they would be the cherries anyways.

At first it was not clear which public API to (I couldnt make sense out of it why there is anything
public in the first place), so I ran a bit into a wrong direction and started planning and creating
a backend with database and graphql API... I then had issues with the data structure of the public
API I took...

The Vuetify library I tried out was nothing for me. Might be better with more time but the end
result looks shocking so I'd rather not waste any more time on such a crap.

## Task

Create a website for a lottery supplier using a fictive brand of your choice. The website has to
contain a welcome page greeting the visitor as well as a lottery page for eurojackpot only.

The lottery page has to contain the drawing results which have to be fetched from the existing
[GraphQL endpoint](http://www.lottohelden.de/graphql).

(You might need to install the [local-cors-proxy](https://github.com/garmeeh/local-cors-proxy) package
to reach the endpoint from your local environment.)

KEEP IT SIMPLE - remember: we're not looking for a full-blown business application, but a basis for
discussion and further development. A simple text output for the result will do.

Please be sure to take care of the following things:

Vuejs, Typescript and GraphQL have to be used. You may use a component library of your choice.
The implementation should contain one or more components (i.e. be component based).
The website should be responsive - by using CSS preprocessing.
The application has to be tested (you can skip browser-tests).

You should follow clean code best practices, keep your solution simple and keep in mind that your
implementation will be the base for discussions, refactoring and extension.

### Frontend thoughts

- Should try out Vike!

### Backend thoughts

#### HTTP Web Server

For the HTTP server I want to use either actix (rust) or elysia (bun) (Java Script). If it will be rust
I'd want to use [ts-rs](https://github.com/Aleph-Alpha/ts-rs) to generate types automatically. As it's
a monorepo it should be nice and simple to work use it. I took a extensive look and created a list of
the best performance benchmarks I've found.

- [axum vs elysia vs express vs velocy, good examples](https://github.com/ishtms/learn-nodejs-hard-way/blob/master/chapters/ch00-nodejs-faster-than-you-think.md)
- [Benchmark](https://web-frameworks-benchmark.netlify.app/result?asc=0&l=rust,javascript,go&metric=totalRequestsPerS&order_by=level64)
- [Benchmark](https://github.com/diegopacheco/servers-benchmark#-servers-benchmark)
- [Benchmark](https://github.com/hugollm/http-benchmarks)
- [Benchmark](https://medium.com/deno-the-complete-reference/list-of-all-of-my-real-world-performance-comparisons-a8e9182ac50)
- [Bun vs Rust Q3 2022](https://medium.com/deno-the-complete-reference/bun-vs-rust-hello-world-performance-9ce23efcb0e7)
- [Bun vs Rust (hyper) Q2 2023](https://medium.com/deno-the-complete-reference/bun-vs-rust-hello-world-http-server-performance-comparison-a03e71fa05f3)
- [Bun vs Rust vs Go vs Node](https://www.priver.dev/blog/benchmark/go-vs-rust-vs-bun-vs-node-http-benchmark-v2/)

#### Database

NoSQL could be convenient, simple JSON storage (a User = a JSON object and so on).
  The performance is far superior. I would have to choose between Couchbase and Scylla. Don't know if I
  should use GraphQL on NoSQL. If I decide to go with a SQL database I would use PostgreSQL

- [Benchmark](https://benchant.com/ranking/database-ranking)
