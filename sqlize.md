## Model Generate
```
npx sequelize model:generate --name restaurant --attributes name:string
npx sequelize model:generate --name food --attributes name:string,price:integer,restaurantId:integer
npx sequelize model:generate --name ingredient --attributes name:string
npx sequelize model:generate --name FIjunction --attributes foodId:integer,ingredientId:integer

```

## Seeds Generate
```
npx sequelize seed:generate --name restaurant
npx sequelize seed:generate --name food
npx sequelize seed:generate --name ingredient
npx sequelize seed:generate --name FIjunction

```