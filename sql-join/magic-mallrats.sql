select "f"."title" as "Film_Title",
       "c"."firstName" as "First_Name",
       "c"."lastName" as "Last_name"

  from "films" as "f"
  join "inventory" as "i" using ("filmId")
  join "rentals" as "r" using ("inventoryId")
  join "customers" as "c" using ("customerId")
  where "f"."title" = 'Magic Mallrats';
