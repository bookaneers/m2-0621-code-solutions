select "c"."firstName" as "First Name",
      "c"."lastName" as "Last Name",
      sum("p"."amount") as "Total in Rentals"

from "customers" as "c"
join "payments" as "p" using ("customerId")
group by "c"."customerId"
order by "Total in Rentals" desc;
