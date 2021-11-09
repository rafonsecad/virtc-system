CREATE TABLE `central_bank` (
  `cap` decimal NOT NULL,
  `tco` int NOT NULL
);

CREATE TABLE `users` (
  `uuid` varchar(36) PRIMARY KEY NOT NULL,
  `nickname` varchar(14) NOT NULL,
  `entry` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `money` DECIMAL
);

CREATE TABLE `transactions` (
  `user_uuid` varchar(36) NOT NULL,
  `fp` varchar(64) PRIMARY KEY NOT NULL,
  `afp` varchar(64) NOT NULL,
  `tco` INT NOT NULL
);

ALTER TABLE `transactions` ADD FOREIGN KEY (`user_uuid`) REFERENCES `users` (`uuid`);

ALTER TABLE `central_bank` ADD FOREIGN KEY (`tco`) REFERENCES `transactions` (`tco`);
