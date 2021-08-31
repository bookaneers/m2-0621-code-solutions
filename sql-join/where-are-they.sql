select "a"."line1" as "street",
       "ci"."name" as "city",
       "a"."district" as "district",
       "co"."name" as "country"
  from "addresses" as "a"
  join "cities" as "ci" using ("cityId")
  join "countries" as "co" using ("countryId");
