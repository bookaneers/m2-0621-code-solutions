select "f"."title" as "Film_Title",
       "a"."firstName" as "First_Name",
       "a"."lastName" as "Last_name"
  from "films" as "f"
  join "castMembers" as "cm" using ("filmId")
  join "actors" as "a" using ("actorId")
  where "f"."title" = 'Jersey Sassy';
