
select "c"."firstName" as "fName",
       "c"."lastName" as "lName",
       "p"."amount" as "amount"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  order by "p"."amount" desc
  limit 10;
