
select "co"."name" as "Country",
       count(*) as "Cities"
  from "cities" as "ci"
  join "countries" as "co" using ("countryId")
 group by "countryId";
