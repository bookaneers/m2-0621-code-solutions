select "f"."title" as "Film_Title",
       "f"."releaseYear" as "Release_Year",
       "c"."name" as "Category_Name"
  from "films" as "f"
  join "filmCategory" as "fc" using ("filmId")
  join "categories" as "c" using ("categoryId")
  where "f"."title" = 'Boogie Amelie';
