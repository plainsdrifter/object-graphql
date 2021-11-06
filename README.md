# object-graphql

## run it
- Default PORT=4000
- ### node
  1. `yarn install`
  2. `yarn start:dev`
- ### docker
  1. `docker build --tag object-graphql .`
  2. `docker run -p 4000:4000 object-graphql`
- ### docker-compose:
  1. `docker-compose up --build`

## queries/mutations
```
query object {
  object(id: 1) {
    __typename,
    ... on ObjectFree {
      id
    },
    ... on ObjectLocked {
      locked
    }
  }
}
```

``` 
mutation freeObject {
  freeObject(id: 1)
}
```
