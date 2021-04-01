DROP TABLE IF EXISTS total_sold;
DROP TABLE IF EXISTS total_adjustment;
DROP TABLE IF EXISTS total_purchases;
DROP TABLE IF EXISTS qty_statistics;
DROP TABLE IF EXISTS product_qty_calc;
DROP TABLE IF EXISTS product_qty;
DROP TABLE IF EXISTS recievablesbyphone;










CREATE VIEW total_sold AS
SELECT order_details.product_id, SUM(order_details.quantity) AS totalsold
FROM order_details GROUP BY order_details.product_id;


CREATE VIEW total_adjustment AS
SELECT qty_adjustments.product_id, SUM(qty_adjustments.quantity) AS totaladjusted
FROM qty_adjustments GROUP BY qty_adjustments.product_id;

CREATE VIEW total_purchases AS
SELECT purchases.product_id, SUM(purchases.quantity) AS totalpurchased
FROM purchases GROUP BY purchases.product_id;
        

CREATE VIEW qty_statistics AS
SELECT p.product_id AS product_id ,p.totalpurchased AS totalpurchased, COALESCE(s.totalsold,0) AS totalsold, COALESCE(a.totaladjusted,0) AS totaladjusted, (COALESCE(p.totalpurchased,0) - (COALESCE(s.totalsold,0) + COALESCE(a.totaladjusted,0))) AS totalremaining, COALESCE(pro.alert_quantity,0) AS alert_qty,
CASE
WHEN
COALESCE(COALESCE(p.totalpurchased,0) - (COALESCE(s.totalsold,0) + COALESCE(a.totaladjusted)), 0) < COALESCE(pro.alert_quantity,0) 
THEN 1
ELSE 0
END
AS alert_status
FROM total_purchases AS p
LEFT JOIN total_sold AS s ON s.product_id=p.product_id
LEFT JOIN total_adjustment AS a ON s.product_id=a.product_id
LEFT JOIN products as pro ON a.product_id=pro.id;


CREATE VIEW product_qty_calc AS
SELECT product_id, totalpurchased AS qty
FROM total_purchases
union all
SELECT product_id, totalsold * (-1) AS qty
FROM total_sold
union all
SELECT product_id, totaladjusted AS qty
FROM total_adjustment;


CREATE VIEW product_qty AS
SELECT product_id, sum( qty ) as qty
FROM product_qty_calc
group by product_id;


CREATE VIEW recievablesbyphone AS
SELECT ord.id, ord.customer_id, sum(ord.sub_total) AS sub_total, sum(ord.total) AS total, sum(ord.amount_recieved) AS amount_recieved, ord.walkin_name, ord.walkin_phone, sum(rec.debit) AS debit, sum(rec.credit) AS credit, sum(rec.balance) as balance
FROM orders as ord
LEFT JOIN recievables as rec
ON rec.doc_id = ord.id
GROUP BY ord.walkin_phone;



ALTER TABLE banks ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE bank_details ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE brands ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE business ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE cashes ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE categories ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE customers ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE employees ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE expenses ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE expense_items ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE orders ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE order_details ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE panels ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE payables ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE payments ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE products ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE purchases ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE purchase_orders ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE qty_adjustments ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE receipts ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE recievables ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE salaries ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE slabs ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE suppliers ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE units ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
ALTER TABLE users ADD PRIMARY KEY(`id`), CHANGE `id` `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT;