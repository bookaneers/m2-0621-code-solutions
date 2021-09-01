select "ca"."name" as "Category Name",
       count(*) as "movies"

from "actors" as "ac"
join "castMembers" as "cm" using ("actorId")
join "filmCategory" as "fc" using ("filmId")
join "categories" as "ca" using ("categoryId")

where "ac"."firstName" = 'Lisa'
and "ac"."lastName" = 'Monroe'

group by "ca"."name";
